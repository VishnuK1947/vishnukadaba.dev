import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
  theme: string;
  setTheme: (theme: string) => void;
}

export function ThemeToggle({ theme, setTheme }: ThemeToggleProps) {
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative flex h-10 w-20 items-center rounded-full p-1 transition-colors duration-300 hover:bg-muted/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 shadow-md"
      aria-label="Toggle theme"
    >
      <motion.div
        className="absolute inset-1 rounded-full bg-background shadow-md"
        animate={{
          x: theme === 'dark' ? '100%' : '0%',
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 30,
        }}
        style={{
          width: 'calc(50% - 2px)',
        }}
      />

      <div className="relative z-10 flex w-full items-center justify-between px-2">
        <motion.div
          animate={{
            scale: theme === 'light' ? 1.1 : 0.8,
            opacity: theme === 'light' ? 1 : 0.5,
            rotate: theme === 'light' ? 0 : 180,
          }}
          transition={{ duration: 0.3 }}
        >
          <Sun className="h-4 w-4 text-yellow-500" />
        </motion.div>

        <motion.div
          animate={{
            scale: theme === 'dark' ? 1.1 : 0.8,
            opacity: theme === 'dark' ? 1 : 0.5,
            rotate: theme === 'dark' ? 0 : -180,
          }}
          transition={{ duration: 0.3 }}
        >
          <Moon className="h-4 w-4 text-blue-400" />
        </motion.div>
      </div>
    </button>
  );
}