import { Check, Award, Rocket, HeartHandshake } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { useCountUp } from "../hooks/useCountUp";

const checklist = [
  "Unify every tool into one command center",
  "Automate repetitive tasks with triggers",
  "Get board-ready reports in a single click",
  "Onboard your whole team in under a day",
];

function Stat({ target, suffix, label, decimals = 0 }) {
  const { ref, value } = useCountUp(target, 1800, decimals);

  return (
    <div className="text-center">
      <p className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
        <span ref={ref}>
          {decimals
            ? value.toFixed(decimals)
            : Math.round(value).toLocaleString()}
        </span>
        <span className="text-gradient">{suffix}</span>
      </p>
      <p className="mt-1 text-[13px] font-bold uppercase tracking-wider text-slate-500">
        {label}
      </p>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="relative scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="About Nexova"
          title="Built for teams that"
          highlight="move fast"
          description="We started Nexova after watching brilliant teams drown in tabs, spreadsheets and status meetings. So we built the operating system for modern work."
        />

        <div className="mt-14 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal variant="left" className="relative">
            <div className="relative">
              <div
                className="bg-dots absolute -left-6 -top-6 h-32 w-32 opacity-60"
                aria-hidden="true"
              />

              <div className="relative overflow-hidden rounded-[1.75rem] border border-slate-100 bg-gradient-to-br from-indigo-600 via-violet-600 to-fuchsia-600 p-1.5 shadow-2xl shadow-indigo-500/25">
                <div className="grid grid-cols-2 gap-1.5 overflow-hidden rounded-[1.4rem] bg-white p-4 sm:p-6">
                  <div className="col-span-2 rounded-2xl bg-slate-900 p-5 text-white">
                    <div className="flex items-center justify-between">
                      <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
                        Team velocity
                      </p>
                      <span className="rounded-full bg-emerald-500/15 px-2.5 py-1 text-[11px] font-bold text-emerald-400">
                        ▲ +38% this quarter
                      </span>
                    </div>

                    <div className="mt-4 flex h-20 items-end gap-2">
                      {[35, 55, 42, 68, 52, 80, 64, 92, 74, 100, 86, 96].map(
                        (h, i) => (
                          <div
                            key={i}
                            className="flex-1 rounded-t-md bg-gradient-to-t from-indigo-600 to-violet-400 transition-all duration-500 hover:from-fuchsia-500 hover:to-pink-400"
                            style={{ height: `${h}%` }}
                          />
                        ),
                      )}
                    </div>
                  </div>

                  <div className="rounded-2xl bg-indigo-50 p-4">
                    <Rocket className="h-6 w-6 text-indigo-600" />
                    <p className="mt-2 text-xl font-extrabold text-slate-900">
                      3.2×
                    </p>
                    <p className="text-xs font-semibold text-slate-500">
                      Faster launches
                    </p>
                  </div>

                  <div className="rounded-2xl bg-amber-50 p-4">
                    <HeartHandshake className="h-6 w-6 text-amber-600" />
                    <p className="mt-2 text-xl font-extrabold text-slate-900">
                      12hrs
                    </p>
                    <p className="text-xs font-semibold text-slate-500">
                      Saved weekly / user
                    </p>
                  </div>
                </div>
              </div>

              <div className="animate-float absolute -bottom-6 -right-3 flex items-center gap-3 rounded-2xl border border-white/60 bg-white/95 px-5 py-4 shadow-xl shadow-slate-900/10 backdrop-blur sm:-right-6">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 text-white shadow-lg shadow-orange-500/30">
                  <Award className="h-6 w-6" />
                </span>
                <div>
                  <p className="text-lg font-extrabold leading-none text-slate-900">
                    8+ Years
                  </p>
                  <p className="mt-1 text-xs font-semibold text-slate-500">
                    of product excellence
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal variant="right">
              <h3 className="text-2xl font-extrabold leading-snug tracking-tight text-slate-900 sm:text-3xl">
                One platform. Zero busywork.{" "}
                <span className="text-gradient">Infinite momentum.</span>
              </h3>

              <p className="mt-4 leading-relaxed text-slate-600">
                Nexova replaces five disconnected subscriptions with a single
                intelligent workspace. Sales, marketing, product and ops finally
                see the same truth — updated live, automated end-to-end, and
                beautiful to use.
              </p>
            </Reveal>

            <ul className="mt-7 space-y-3.5">
              {checklist.map((item, i) => (
                <Reveal key={item} delay={i * 90} variant="right">
                  <li className="group flex items-center gap-3.5 rounded-2xl border border-transparent p-2 transition-all duration-300 hover:border-indigo-100 hover:bg-indigo-50/50 hover:pl-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-indigo-600 to-violet-600 text-white shadow-md shadow-indigo-500/30 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                      <Check className="h-4 w-4" strokeWidth={3} />
                    </span>
                    <span className="text-[15px] font-semibold text-slate-700">
                      {item}
                    </span>
                  </li>
                </Reveal>
              ))}
            </ul>

            <Reveal delay={400}>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#how-it-works"
                  className="btn-shine inline-flex items-center gap-2 rounded-xl bg-slate-900 px-6 py-3.5 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-indigo-600"
                >
                  See how it works
                </a>

                <a
                  href="#testimonials"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-bold text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-indigo-200 hover:text-indigo-600 hover:shadow-md"
                >
                  Read customer stories
                </a>
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal delay={150} className="mt-20">
          <div className="grid grid-cols-2 gap-8 rounded-[1.75rem] border border-slate-100 bg-gradient-to-br from-slate-50 via-white to-indigo-50/60 px-6 py-10 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] sm:py-12 lg:grid-cols-4">
            <Stat target={48} suffix="k+" label="Active teams" />
            <Stat target={12} suffix="M+" label="Workflows run" />
            <Stat
              target={4.9}
              suffix="/5"
              label="Average rating"
              decimals={1}
            />
            <Stat target={99.99} suffix="%" label="Uptime SLA" decimals={2} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
