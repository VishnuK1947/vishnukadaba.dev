import { useEffect, useState } from 'react';

const sectionIds = ['work', 'involvements', 'projects'] as const;
type SectionId = (typeof sectionIds)[number];

// Coordinate viewport reveals instead of giving each section an unrelated delay.
export function useSectionReveals(enabled: boolean) {
  const [visible, setVisible] = useState<Partial<Record<SectionId, boolean>>>({});

  useEffect(() => {
    if (!enabled) return;

    if (!('IntersectionObserver' in window)) {
      setVisible({ work: true, involvements: true, projects: true });
      return;
    }

    const scheduled = new Set<SectionId>();
    const timers: number[] = [];
    let lastStart = -Infinity;
    const observer = new IntersectionObserver(entries => {
      const entering = entries
        .filter(entry => entry.isIntersecting && entry.intersectionRatio >= 0.1)
        .sort((a, b) => sectionIds.indexOf(a.target.id as SectionId) - sectionIds.indexOf(b.target.id as SectionId));

      for (const entry of entering) {
        const id = entry.target.id as SectionId;
        if (scheduled.has(id)) continue;
        scheduled.add(id);
        observer.unobserve(entry.target);

        // Nearby reveals start 180ms apart, but never build a long scroll backlog.
        const now = performance.now();
        const start = Math.min(Math.max(now, lastStart + 180), now + 360);
        lastStart = start;
        timers.push(window.setTimeout(() => {
          setVisible(previous => ({ ...previous, [id]: true }));
        }, start - now));
      }
    }, { threshold: 0.1 });

    for (const id of sectionIds) {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    }

    return () => {
      observer.disconnect();
      timers.forEach(timer => window.clearTimeout(timer));
    };
  }, [enabled]);

  return visible;
}
