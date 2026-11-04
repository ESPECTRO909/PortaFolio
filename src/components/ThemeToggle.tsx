import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggleTheme() {
    const nextIsDark = !isDark;
    document.documentElement.classList.toggle("dark", nextIsDark);
    setIsDark(nextIsDark);

    try {
      localStorage.setItem("theme", nextIsDark ? "dark" : "light");
    } catch {}
  }

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label="Modo oscuro"
      onClick={toggleTheme}
      className="relative inline-flex h-9 w-[4.25rem] shrink-0 items-center rounded-full border border-line bg-surface p-1 text-fg transition-colors hover:border-accent-text"
    >
      <span className="grid h-7 w-7 place-items-center" aria-hidden="true">
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.7">
          <circle cx="12" cy="12" r="3.5" />
          <path strokeLinecap="round" d="M12 2.5v2m0 15v2m9.5-9.5h-2m-15 0h-2m16.22-6.72-1.42 1.42M6.7 17.3l-1.42 1.42m13.44 0-1.42-1.42M6.7 6.7 5.28 5.28" />
        </svg>
      </span>
      <span className="grid h-7 w-7 place-items-center" aria-hidden="true">
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.7">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.2 15.1A8.4 8.4 0 0 1 8.9 3.8 8.5 8.5 0 1 0 20.2 15.1Z" />
        </svg>
      </span>
      <span
        className={`absolute left-1 top-1 h-7 w-7 rounded-full bg-accent transition-transform ${isDark ? "translate-x-7" : "translate-x-0"}`}
        aria-hidden="true"
      />
    </button>
  );
}