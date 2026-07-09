import { useEffect, useState } from 'react';

interface Props {
  isDark: boolean;
  toggle: () => void;
}

export function DarkModeToggle({ isDark, toggle }: Props) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <button
      onClick={toggle}
      className="w-10 h-10 rounded-full flex items-center justify-center
        bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700
        transition-all duration-200 text-lg"
      aria-label="Toggle dark mode"
    >
      {isDark ? '☀️' : '🌙'}
    </button>
  );
}
