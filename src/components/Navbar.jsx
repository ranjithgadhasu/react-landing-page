import { useEffect, useState } from "react";
import { ArrowRight, Menu, X, Zap } from "lucide-react";
import { navLinks } from "../data/content";
import { cn } from "../utils/cn";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);

      const doc = document.documentElement;
      const total = doc.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? Math.min((y / total) * 100, 100) : 0);

      const ids = navLinks.map((l) => l.href.slice(1));
      let current = "home";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) current = id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <div className="fixed inset-x-0 top-0 z-[60] h-[3px] bg-transparent">
        <div
          className="h-full bg-gradient-to-r from-indigo-600 via-violet-500 to-pink-500 transition-[width] duration-150"
          style={{ width: `${progress}%` }}
        />
      </div>

      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled ? "py-3" : "py-5",
        )}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav
            className={cn(
              "flex items-center justify-between rounded-2xl px-4 py-3 transition-all duration-500 sm:px-6",
              scrolled
                ? "glass border border-white/60 shadow-[0_8px_40px_-12px_rgba(79,70,229,0.35)]"
                : "border border-transparent bg-transparent",
            )}
          >
            <a
              href="#home"
              className="group flex items-center gap-2.5"
              aria-label="Nexova home"
            >
              <span className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-indigo-600 via-violet-600 to-fuchsia-600 shadow-lg shadow-indigo-500/30 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-105">
                <Zap className="h-5 w-5 text-white" strokeWidth={2.5} />
                <span className="absolute inset-0 bg-gradient-to-t from-white/0 via-white/20 to-white/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </span>
              <span className="text-xl font-extrabold tracking-tight text-slate-900">
                Nex<span className="text-gradient">ova</span>
              </span>
            </a>

            <ul className="hidden items-center gap-1 xl:flex">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={cn(
                      "relative rounded-full px-3 xl:px-4 py-2 text-sm font-semibold transition-colors duration-300",
                      active === link.href.slice(1)
                        ? "text-indigo-600"
                        : "text-slate-600 hover:text-slate-900",
                    )}
                  >
                    {link.label}
                    <span
                      className={cn(
                        "absolute inset-x-4 -bottom-0.5 h-0.5 origin-left rounded-full bg-gradient-to-r from-indigo-600 to-fuchsia-500 transition-transform duration-300",
                        active === link.href.slice(1)
                          ? "scale-x-100"
                          : "scale-x-0",
                      )}
                    />
                  </a>
                </li>
              ))}
            </ul>

            <div className="hidden items-center gap-3 xl:flex">
              <a
                href="#pricing"
                className="btn-shine group inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-slate-900/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-indigo-600 hover:shadow-xl hover:shadow-indigo-600/30"
              >
                Get Started Free
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>

            <button
              onClick={() => setOpen(!open)}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white/80 text-slate-700 shadow-sm transition hover:bg-slate-50 xl:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
            >
              <span className="relative block h-5 w-5">
                <Menu
                  className={cn(
                    "absolute inset-0 h-5 w-5 transition-all duration-300",
                    open ? "rotate-90 opacity-0" : "rotate-0 opacity-100",
                  )}
                />
                <X
                  className={cn(
                    "absolute inset-0 h-5 w-5 transition-all duration-300",
                    open ? "rotate-0 opacity-100" : "-rotate-90 opacity-0",
                  )}
                />
              </span>
            </button>
          </nav>
        </div>

        <div
          className={cn(
            "mx-auto max-w-7xl px-4 transition-all duration-500 sm:px-6 xl:hidden",
            open
              ? "pointer-events-auto mt-2 max-h-[480px] opacity-100"
              : "pointer-events-none mt-0 max-h-0 overflow-hidden opacity-0",
          )}
        >
          <div className="glass overflow-hidden rounded-2xl border border-white/60 p-3 shadow-2xl shadow-indigo-500/15">
            <ul className="divide-y divide-slate-100">
              {navLinks.map((link, i) => (
                <li
                  key={link.href}
                  className={cn(
                    "transition-all duration-500",
                    open
                      ? "translate-x-0 opacity-100"
                      : "translate-x-6 opacity-0",
                  )}
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "flex items-center justify-between rounded-xl px-4 py-3 text-[15px] font-semibold transition-colors",
                      active === link.href.slice(1)
                        ? "bg-indigo-50 text-indigo-600"
                        : "text-slate-700 hover:bg-slate-50",
                    )}
                  >
                    {link.label}
                    <ArrowRight className="h-4 w-4 opacity-40" />
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-3 grid gap-2 p-1">
              <a
                href="#pricing"
                onClick={() => setOpen(false)}
                className="btn-shine inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-bold text-white"
              >
                Get Started Free <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
