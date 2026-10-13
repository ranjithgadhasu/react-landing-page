import { useState } from "react";
import {
  Zap,
  MapPin,
  Phone,
  Mail,
  Send,
  CheckCircle2,
  Heart,
} from "lucide-react";

const XIcon = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const LinkedInIcon = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124M7.119 20.452H3.554V9h3.565zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z" />
  </svg>
);

const GitHubIcon = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02-.006 2.04-.138 3-.405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653 3.285 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

const YouTubeIcon = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814M9.545 15.568V8.432L15.818 12z" />
  </svg>
);

const columns = [
  {
    title: "Product",
    links: [
      "Features",
      "Integrations",
      "Pricing",
      "Changelog",
      "Roadmap",
      "API Docs",
    ],
  },
  {
    title: "Company",
    links: ["About us", "Careers", "Blog", "Press kit", "Contact", "Partners"],
  },
  {
    title: "Resources",
    links: [
      "Help center",
      "Community",
      "Templates",
      "Webinars",
      "Status",
      "Security",
    ],
  },
  {
    title: "Legal",
    links: ["Privacy", "Terms", "DPA", "Cookies", "SOC 2 Report"],
  },
];

const socials = [
  { icon: XIcon, label: "Twitter / X", href: "#" },
  { icon: LinkedInIcon, label: "LinkedIn", href: "#" },
  { icon: GitHubIcon, label: "GitHub", href: "#" },
  { icon: YouTubeIcon, label: "YouTube", href: "#" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const subscribe = (e) => {
    e.preventDefault();
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) setDone(true);
  };

  return (
    <footer className="relative overflow-hidden bg-slate-950 text-slate-400">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-1/2 top-0 h-px w-full bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />
        <div className="absolute -top-32 left-1/2 h-64 w-[720px] -translate-x-1/2 rounded-full bg-indigo-600/15 blur-[110px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pb-10 pt-16 sm:px-6 sm:pt-20 lg:px-8">
        <div className="grid gap-10 border-b border-white/10 pb-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
          <div>
            <a href="#home" className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 via-violet-600 to-fuchsia-600 shadow-lg shadow-indigo-500/30">
                <Zap className="h-5 w-5 text-white" strokeWidth={2.5} />
              </span>
              <span className="text-xl font-extrabold tracking-tight text-white">
                Nex<span className="text-gradient-light">ova</span>
              </span>
            </a>

            <p className="mt-4 max-w-md text-[15px] leading-relaxed">
              The all-in-one platform to automate workflows, collaborate faster
              and grow your business. Trusted by 48,000+ teams in 120 countries.
            </p>

            <ul className="mt-6 space-y-3 text-sm font-medium">
              <li className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/5 text-indigo-300">
                  <MapPin className="h-4 w-4" />
                </span>
                548 Market Street, San Francisco, CA 94104
              </li>
              <li>
                <a
                  href="tel:+14155550132"
                  className="flex items-center gap-3 transition-colors hover:text-white"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/5 text-indigo-300">
                    <Phone className="h-4 w-4" />
                  </span>
                  +1 (415) 555-0132
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@nexova.io"
                  className="flex items-center gap-3 transition-colors hover:text-white"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/5 text-indigo-300">
                    <Mail className="h-4 w-4" />
                  </span>
                  hello@nexova.io
                </a>
              </li>
            </ul>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
            <h3 className="text-lg font-extrabold text-white">
              Get product tips in your inbox
            </h3>
            <p className="mt-1.5 text-sm">
              One tactical email per week. No spam, unsubscribe anytime.
            </p>

            {done ? (
              <p className="mt-5 flex items-center gap-2 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3.5 text-sm font-bold text-emerald-300">
                <CheckCircle2 className="h-5 w-5 shrink-0" /> Subscribed!
                Welcome aboard.
              </p>
            ) : (
              <form
                onSubmit={subscribe}
                className="mt-5 flex flex-col gap-3 sm:flex-row"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Work email"
                  className="w-full flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white placeholder:text-slate-500 outline-none transition focus:border-indigo-400 focus:ring-4 focus:ring-indigo-500/20"
                />
                <button
                  type="submit"
                  className="btn-shine inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-extrabold text-slate-900 transition-all duration-300 hover:-translate-y-0.5 hover:bg-indigo-100"
                >
                  Subscribe <Send className="h-4 w-4" />
                </button>
              </form>
            )}

            <div className="mt-6 flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-transparent hover:bg-gradient-to-br hover:from-indigo-500 hover:to-fuchsia-500 hover:text-white hover:shadow-lg hover:shadow-violet-500/40"
                >
                  <s.icon className="h-4.5 w-4.5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 py-12 sm:grid-cols-4">
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-[13px] font-extrabold uppercase tracking-[0.16em] text-white">
                {col.title}
              </h4>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#home"
                      className="group inline-flex items-center gap-0 text-sm font-medium transition-all duration-300 hover:gap-1.5 hover:text-white"
                    >
                      <span className="h-px w-0 bg-gradient-to-r from-indigo-400 to-fuchsia-400 transition-all duration-300 group-hover:w-3" />
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-[13px] font-medium sm:flex-row">
          <p>© {new Date().getFullYear()} Nexova Inc. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative h-2.5 w-2.5 rounded-full bg-emerald-400" />
            </span>
            All systems operational
          </div>
        </div>
      </div>
    </footer>
  );
}
