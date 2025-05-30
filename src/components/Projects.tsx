import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { staggerChildren, slideIn } from '../data/animations';
import { projects } from '../data/projects';

export function Projects() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showArrows, setShowArrows] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkScroll = () => {
    const container = scrollRef.current;
    if (!container) return;
    const { scrollLeft, scrollWidth, offsetWidth } = container;
    const AT_START_THRESHOLD = 4;
    const AT_END_THRESHOLD = 4;

    if (scrollWidth <= offsetWidth + 1) {
      setCanScrollLeft(false);
      setCanScrollRight(false);
      return;
    }

    setCanScrollLeft(Math.abs(scrollLeft) > AT_START_THRESHOLD);
    setCanScrollRight(
      Math.abs(scrollLeft + offsetWidth - scrollWidth) > AT_END_THRESHOLD
    );
  };

  useEffect(() => {
    checkScroll();
    const container = scrollRef.current;
    if (!container) return;
    container.addEventListener('scroll', checkScroll, { passive: true });
    window.addEventListener('resize', checkScroll);
    return () => {
      container?.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
    };
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    const container = scrollRef.current;
    if (!container) return;
    const scrollAmount = container.offsetWidth * 0.8;
    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  const handleMouseEnter = () => setShowArrows(true);
  const handleMouseLeave = () => setShowArrows(false);

  return (
    <motion.div
      className="space-y-4"
      variants={staggerChildren}
      initial="hidden"
      animate="visible"
    >
      <motion.h2
        className="text-3xl font-normal font-manrope text-center"
        variants={slideIn}
      >
        Projects
      </motion.h2>

      <div
        className="relative w-full"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <button
          aria-label="Scroll left"
          className={`absolute left-3 top-1/2 -translate-y-1/2 z-30 p-1.5 bg-background/90 backdrop-blur-md rounded-full border border-border/30 transition-all duration-300 hidden md:block ${
            showArrows && canScrollLeft
              ? 'opacity-100 hover:bg-accent/80 hover:border-border'
              : 'opacity-0 pointer-events-none'
          }`}
          onClick={() => scroll('left')}
        >
          <ChevronLeft className="h-4 w-4" />
        </button>

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory py-2 px-1 font-instrument-sans no-scrollbar"
          style={{
            scrollBehavior: 'smooth',
            WebkitOverflowScrolling: 'touch',
            maskImage: `linear-gradient(to right, 
              ${canScrollLeft ? 'transparent 0%, black 40px' : 'black 0%'}, 
              black ${
                canScrollLeft
                  ? 'calc(100% - 40px)'
                  : canScrollRight
                  ? 'calc(100% - 40px)'
                  : '100%'
              }, 
              ${canScrollRight ? 'transparent 100%' : 'black 100%'})`,
            WebkitMaskImage: `linear-gradient(to right, 
              ${canScrollLeft ? 'transparent 0%, black 40px' : 'black 0%'}, 
              black ${
                canScrollLeft
                  ? 'calc(100% - 40px)'
                  : canScrollRight
                  ? 'calc(100% - 40px)'
                  : '100%'
              }, 
              ${canScrollRight ? 'transparent 100%' : 'black 100%'})`,
          }}
          tabIndex={0}
        >
          {projects.map(project => (
            <motion.div
              key={project.name}
              variants={slideIn}
              className="min-w-[240px] max-w-[260px] w-full flex-shrink-0 snap-center font-manrope"
            >
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex h-full flex-col overflow-hidden rounded-lg border border-purple-300 bg-card/40 backdrop-blur-sm transition-all duration-300 hover:bg-card/60 hover:border-purple-400"
              >
                <div className="aspect-[13/8] overflow-hidden">
                  <img
                    src={project.image}
                    alt={`Screenshot of ${project.name}`}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col p-4">
                  <div className="mb-1 flex items-start justify-between gap-2">
                    <div className="flex items-center gap-2 min-w-0">
                      <h3 className="font-medium text-sm truncate font-manrope">
                        {project.name}
                      </h3>
                    </div>
                  </div>
                  {project.achievement && (
                    <span
                      className="rounded-md bg-orange-500/10 border border-orange-500/20 px-2 py-0.5 text-xs font-medium text-orange-600 dark:text-orange-400 font-manrope"
                      style={{ width: 'fit-content' }}
                    >
                      {project.achievement}
                    </span>
                  )}
                  <p className="text-xs text-muted-foreground leading-relaxed line-clamp-5 font-manrope">
                    {project.description}
                  </p>
                </div>
              </a>
            </motion.div>
          ))}
        </div>

        <button
          aria-label="Scroll right"
          className={`absolute right-3 top-1/2 -translate-y-1/2 z-30 p-1.5 bg-background/90 backdrop-blur-md rounded-full border border-border/30 transition-all duration-300 hidden md:block ${
            showArrows && canScrollRight
              ? 'opacity-100 hover:bg-accent/80 hover:border-border'
              : 'opacity-0 pointer-events-none'
          }`}
          onClick={() => scroll('right')}
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </motion.div>
  );
}