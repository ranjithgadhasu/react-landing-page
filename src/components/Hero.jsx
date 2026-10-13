import { useEffect, useRef, useState } from "react";

import {
  ArrowRight,
  Play,
  Star,
  CheckCircle2,
  TrendingUp,
  Users,
  Bell,
  Sparkles,
  MousePointerClick,
} from "lucide-react";

import { brandLogos } from "../data/content";

import Reveal from "./Reveal";

function useMouseParallax(strength = 18) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;

    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches)
      return;

    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;

      el.style.setProperty("--px", `${x * strength}px`);
      el.style.setProperty("--py", `${y * strength}px`);
    };

    const onLeave = () => {
      el.style.setProperty("--px", "0px");
      el.style.setProperty("--py", "0px");
    };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);

    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [strength]);

  return ref;
}

export default function Hero() {
  const parallaxRef = useMouseParallax(22);
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <section
      id="home"
      className="relative overflow-hidden pt-32 pb-16 sm:pt-40 lg:pb-24"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_35%,black,transparent)]" />
        <div className="absolute -top-32 left-1/2 h-[560px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-r from-indigo-300/40 via-violet-300/40 to-pink-300/40 blur-[120px]" />
        <div className="animate-blob absolute -left-24 top-40 h-72 w-72 rounded-full bg-indigo-400/20 blur-3xl" />
        <div className="animate-blob absolute -right-24 top-64 h-80 w-80 rounded-full bg-fuchsia-400/20 blur-3xl [animation-delay:4s]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          <div className="min-w-0 text-center lg:text-left">
            <Reveal>
              <a
                href="#features"
                className="group inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-white/80 py-1.5 pl-1.5 pr-4 text-xs font-bold text-slate-700 shadow-sm backdrop-blur transition hover:border-indigo-200 hover:shadow-md sm:text-[13px]"
              >
                <span className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 px-3 py-1 text-[11px] font-extrabold uppercase tracking-wide text-white">
                  <Sparkles className="h-3 w-3" /> New
                </span>
                Nexova Automations
                <ArrowRight className="h-3.5 w-3.5 text-indigo-500 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </Reveal>

            <Reveal delay={100}>
              <h1 className="mt-6 text-balance text-[2.15rem] min-[400px]:text-4xl font-extrabold leading-[1.08] tracking-tight text-slate-900 sm:text-5xl lg:text-[3.9rem] xl:text-[4.3rem]">
                Automate work.
                <br />
                <span className="text-gradient">Amplify growth.</span>
              </h1>
            </Reveal>

            <Reveal delay={200}>
              <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg lg:mx-0">
                Nexova is the all-in-one platform that connects your tools,
                automates busywork and gives every team real-time insight — so
                you ship faster with less chaos.
              </p>
            </Reveal>

            <Reveal delay={300}>
              <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
                <a
                  href="#pricing"
                  className="btn-shine group inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 px-7 py-4 text-[15px] font-bold text-white shadow-xl shadow-indigo-600/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-indigo-600/40 sm:w-auto"
                >
                  Start Free Trial
                  <ArrowRight className="h-4.5 w-4.5 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
                <button
                  onClick={() => setVideoOpen(true)}
                  className="group inline-flex w-full items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white/80 px-7 py-4 text-[15px] font-bold text-slate-800 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-lg sm:w-auto"
                >
                  <span className="animate-pulse-ring flex h-9 w-9 items-center justify-center rounded-full bg-indigo-600 text-white">
                    <Play className="ml-0.5 h-4 w-4 fill-current" />
                  </span>
                  Watch Demo
                  <span className="text-xs font-semibold text-slate-400">
                    2:14
                  </span>
                </button>
              </div>
            </Reveal>

            <Reveal delay={400}>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[13px] font-semibold text-slate-500 lg:justify-start">
                <span className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" /> Free
                  14-day trial
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" /> No
                  credit card required
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" /> Cancel
                  anytime
                </span>
              </div>
            </Reveal>

            <Reveal delay={500}>
              <div className="mt-10 grid max-w-lg grid-cols-3 gap-4 border-t border-slate-100 pt-8 max-sm:mx-auto lg:mx-0">
                {[
                  { value: "48k+", label: "Happy teams" },
                  { value: "4.9/5", label: "G2 rating", stars: true },
                  { value: "99.99%", label: "Uptime SLA" },
                ].map((s) => (
                  <div key={s.label} className="text-center lg:text-left">
                    <div className="flex items-center justify-center gap-1 lg:justify-start">
                      <p className="text-xl font-extrabold text-slate-900 sm:text-2xl">
                        {s.value}
                      </p>
                    </div>
                    {s.stars && (
                      <div className="mt-1 flex justify-center gap-0.5 lg:justify-start">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className="h-3.5 w-3.5 fill-amber-400 text-amber-400"
                          />
                        ))}
                      </div>
                    )}
                    <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal variant="scale" delay={200} className="relative">
            <div ref={parallaxRef} className="relative mx-auto max-w-[560px]">
              <div
                className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-indigo-500/20 via-violet-500/15 to-pink-500/20 blur-2xl"
                aria-hidden="true"
              />

              <div
                className="relative overflow-hidden rounded-3xl border border-white/60 bg-white/90 shadow-[0_32px_80px_-24px_rgba(79,70,229,0.45)] backdrop-blur-xl transition-transform duration-300 ease-out"
                style={{
                  transform: "translate(var(--px, 0px), var(--py, 0px))",
                }}
              >
                <div className="flex items-center gap-2 border-b border-slate-100 px-5 py-3.5">
                  <span className="h-3 w-3 rounded-full bg-rose-400" />
                  <span className="h-3 w-3 rounded-full bg-amber-400" />
                  <span className="h-3 w-3 rounded-full bg-emerald-400" />
                  <div className="ml-3 flex flex-1 items-center gap-2 rounded-lg bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-400">
                    <span className="h-2 w-2 rounded-full bg-emerald-400" />
                    app.nexova.io/dashboard
                  </div>
                </div>

                <div className="p-5 sm:p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        Revenue overview
                      </p>
                      <p className="mt-1 text-2xl font-extrabold text-slate-900 sm:text-3xl">
                        $128,430{" "}
                        <span className="ml-2 inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 align-middle text-xs font-bold text-emerald-600">
                          <TrendingUp className="h-3 w-3" /> +24%
                        </span>
                      </p>
                    </div>
                    <div className="hidden gap-2 sm:flex">
                      {["1D", "1W", "1M"].map((t, i) => (
                        <span
                          key={t}
                          className={`rounded-lg px-3 py-1.5 text-xs font-bold ${i === 2 ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-500"}`}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-5 rounded-2xl border border-slate-100 bg-gradient-to-b from-indigo-50/60 to-white p-4">
                    <svg
                      viewBox="0 0 400 140"
                      className="h-32 w-full sm:h-36"
                      aria-hidden="true"
                    >
                      <defs>
                        <linearGradient
                          id="heroChart"
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop
                            offset="0%"
                            stopColor="#6366f1"
                            stopOpacity="0.35"
                          />
                          <stop
                            offset="100%"
                            stopColor="#6366f1"
                            stopOpacity="0"
                          />
                        </linearGradient>
                        <linearGradient
                          id="heroLine"
                          x1="0"
                          y1="0"
                          x2="1"
                          y2="0"
                        >
                          <stop offset="0%" stopColor="#6366f1" />
                          <stop offset="60%" stopColor="#8b5cf6" />
                          <stop offset="100%" stopColor="#d946ef" />
                        </linearGradient>
                      </defs>
                      {[28, 62, 96].map((y) => (
                        <line
                          key={y}
                          x1="0"
                          y1={y}
                          x2="400"
                          y2={y}
                          stroke="#e2e8f0"
                          strokeDasharray="4 5"
                          strokeWidth="1"
                        />
                      ))}
                      <path
                        d="M0,110 C40,100 55,78 90,74 C125,70 140,88 175,72 C210,56 225,64 260,44 C295,24 320,40 350,24 C370,14 390,18 400,12 L400,140 L0,140 Z"
                        fill="url(#heroChart)"
                      />
                      <path
                        d="M0,110 C40,100 55,78 90,74 C125,70 140,88 175,72 C210,56 225,64 260,44 C295,24 320,40 350,24 C370,14 390,18 400,12"
                        fill="none"
                        stroke="url(#heroLine)"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                      />
                      <circle
                        cx="260"
                        cy="44"
                        r="6"
                        fill="#fff"
                        stroke="#8b5cf6"
                        strokeWidth="3"
                      />
                      <circle
                        cx="350"
                        cy="24"
                        r="6"
                        fill="#fff"
                        stroke="#d946ef"
                        strokeWidth="3"
                      />
                    </svg>
                    <div className="mt-2 flex items-center justify-between text-[11px] font-bold text-slate-400">
                      <span>JAN</span>
                      <span>FEB</span>
                      <span>MAR</span>
                      <span>APR</span>
                      <span>MAY</span>
                      <span>JUN</span>
                    </div>
                  </div>

                  <div className="mt-4 grid grid-cols-3 gap-3">
                    {[
                      { icon: Users, label: "Active users", val: "12.4k" },
                      {
                        icon: MousePointerClick,
                        label: "Workflows",
                        val: "842",
                      },
                      { icon: Bell, label: "Automations", val: "98%" },
                    ].map((m) => (
                      <div
                        key={m.label}
                        className="rounded-xl border border-slate-100 bg-slate-50/70 p-3 text-center"
                      >
                        <m.icon className="mx-auto h-4 w-4 text-indigo-500" />
                        <p className="mt-1.5 text-sm font-extrabold text-slate-900">
                          {m.val}
                        </p>
                        <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
                          {m.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="animate-float absolute -left-4 top-16 hidden rounded-2xl border border-white/60 bg-white/95 p-3.5 pr-5 shadow-xl shadow-indigo-500/20 backdrop-blur sm:block lg:-left-10">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500 text-white shadow-lg shadow-emerald-500/30">
                    <CheckCircle2 className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-[13px] font-extrabold text-slate-900">
                      Invoice #2041 paid
                    </p>
                    <p className="text-xs font-medium text-slate-500">
                      Automation • just now
                    </p>
                  </div>
                </div>
              </div>

              <div className="animate-float-delayed absolute -right-3 bottom-20 hidden rounded-2xl border border-white/60 bg-white/95 p-3.5 pr-5 shadow-xl shadow-violet-500/20 backdrop-blur sm:block lg:-right-8">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2.5">
                    {[
                      "from-violet-500 to-purple-600",
                      "from-sky-500 to-blue-600",
                      "from-pink-500 to-rose-500",
                    ].map((g, i) => (
                      <span
                        key={i}
                        className={`flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br ${g} text-[11px] font-extrabold text-white ring-2 ring-white`}
                      >
                        {["AK", "JM", "RS"][i]}
                      </span>
                    ))}
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-[10px] font-extrabold text-white ring-2 ring-white">
                      +9
                    </span>
                  </div>
                  <div>
                    <p className="text-[13px] font-extrabold text-slate-900">
                      Design sync
                    </p>
                    <p className="text-xs font-medium text-emerald-600">
                      ● 4 online now
                    </p>
                  </div>
                </div>
              </div>

              <div className="animate-float-slow absolute -top-5 right-8 flex items-center gap-2 rounded-full border border-white/60 bg-slate-900/95 px-4 py-2 text-xs font-bold text-white shadow-xl backdrop-blur">
                <Sparkles className="h-3.5 w-3.5 text-amber-300" />
                nexova
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={200} className="mt-16 lg:mt-20">
          <p className="text-center text-xs font-bold uppercase tracking-[0.22em] text-slate-400">
            Trusted by 48,000+ teams worldwide
          </p>
          <div className="mask-fade-x relative mt-6 overflow-hidden">
            <div className="animate-marquee flex w-max items-center gap-12 pr-12">
              {[...brandLogos, ...brandLogos].map((logo, i) => (
                <span
                  key={i}
                  className="flex items-center gap-2 text-lg font-extrabold tracking-tight text-slate-300 transition-colors hover:text-slate-500"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-100 text-[11px] font-black text-slate-400">
                    {logo.slice(0, 1)}
                  </span>
                  {logo}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      {videoOpen && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-sm"
          onClick={() => setVideoOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative w-full max-w-3xl overflow-hidden rounded-3xl bg-slate-900 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
              <p className="text-sm font-bold text-white">
                Nexova — Product Tour (2:14)
              </p>
              <button
                onClick={() => setVideoOpen(false)}
                className="rounded-lg bg-white/10 px-3 py-1.5 text-sm font-bold text-white transition hover:bg-white/20"
              >
                Close ✕
              </button>
            </div>
            <div className="flex aspect-video flex-col items-center justify-center gap-4 bg-gradient-to-br from-indigo-950 via-slate-900 to-fuchsia-950 p-8 text-center">
              <span className="animate-pulse-ring flex h-20 w-20 items-center justify-center rounded-full bg-white text-indigo-600">
                <Play className="ml-1 h-8 w-8 fill-current" />
              </span>
              <p className="max-w-md text-lg font-bold text-white">
                Your interactive demo would play here
              </p>
              <p className="max-w-md text-sm text-slate-400">
                In production, embed your Loom / YouTube / Wistia video here.
                This modal proves the interaction works — ESC or backdrop click
                closes it.
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
