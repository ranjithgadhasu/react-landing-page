import { useState } from "react";
import {
  Plug2,
  PenTool,
  Bot,
  LineChart,
  Check,
  PlayCircle,
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { steps } from "../data/content";
import { cn } from "../utils/cn";

const icons = [Plug2, PenTool, Bot, LineChart];

export default function HowItWorks() {
  const [active, setActive] = useState(1);

  return (
    <section
      id="how-it-works"
      className="relative scroll-mt-24 overflow-hidden py-20 sm:py-28"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute right-0 top-20 h-96 w-96 rounded-full bg-indigo-100/60 blur-[120px]" />
        <div className="absolute left-0 bottom-0 h-96 w-96 rounded-full bg-pink-100/50 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="How it works"
          title="Live in minutes,"
          highlight="not months"
          description="Four simple steps separate you from a fully automated operation. No engineers, no consultants, no headaches."
        />

        <div className="relative mt-14">
          <div
            className="absolute left-0 right-0 top-9 hidden lg:block"
            aria-hidden="true"
          >
            <div className="mx-16 h-1 rounded-full bg-slate-100">
              <div
                className="h-full rounded-full bg-gradient-to-r from-indigo-600 via-violet-500 to-fuchsia-500 transition-all duration-700 ease-out"
                style={{ width: `${((active + 1) / steps.length) * 100}%` }}
              />
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => {
              const Icon = icons[i];
              const isActive = active === i;
              const isDone = i < active;
              return (
                <Reveal key={s.step} delay={i * 110}>
                  <button
                    onClick={() => setActive(i)}
                    onMouseEnter={() => setActive(i)}
                    className={cn(
                      "group relative w-full rounded-3xl border p-6 text-left transition-all duration-500 sm:p-7",
                      isActive
                        ? "border-transparent bg-slate-900 shadow-2xl shadow-slate-900/25 lg:-translate-y-3"
                        : "border-slate-200 bg-white hover:-translate-y-1.5 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-500/10",
                    )}
                  >
                    <div className="flex items-center justify-between">
                      <span
                        className={cn(
                          "relative z-10 flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-2xl text-2xl transition-all duration-500",
                          isActive
                            ? "bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500 text-white shadow-lg shadow-violet-500/40"
                            : isDone
                              ? "bg-emerald-500 text-white"
                              : "bg-slate-100 text-slate-500 group-hover:bg-indigo-100 group-hover:text-indigo-600",
                        )}
                      >
                        {isDone && !isActive ? (
                          <Check className="h-7 w-7" strokeWidth={3} />
                        ) : (
                          <Icon className="h-7 w-7" strokeWidth={2} />
                        )}
                      </span>
                      <span
                        className={cn(
                          "text-5xl font-black tracking-tighter transition-colors",
                          isActive
                            ? "text-white/10"
                            : "text-slate-100 group-hover:text-indigo-100",
                        )}
                      >
                        {s.step}
                      </span>
                    </div>

                    <h3
                      className={cn(
                        "mt-5 text-lg font-extrabold tracking-tight",
                        isActive ? "text-white" : "text-slate-900",
                      )}
                    >
                      {s.title}
                    </h3>
                    <p
                      className={cn(
                        "mt-2 text-sm leading-relaxed",
                        isActive ? "text-slate-300" : "text-slate-500",
                      )}
                    >
                      {s.description}
                    </p>
                    <ul className="mt-4 space-y-2">
                      {s.points.map((p) => (
                        <li
                          key={p}
                          className={cn(
                            "flex items-center gap-2 text-[13px] font-semibold",
                            isActive ? "text-slate-200" : "text-slate-600",
                          )}
                        >
                          <span
                            className={cn(
                              "flex h-4.5 w-4.5 items-center justify-center rounded-full p-0.5",
                              isActive
                                ? "bg-emerald-500/20 text-emerald-300"
                                : "bg-emerald-50 text-emerald-600",
                            )}
                          >
                            <Check className="h-3 w-3" strokeWidth={3.5} />
                          </span>
                          {p}
                        </li>
                      ))}
                    </ul>

                    <span
                      className={cn(
                        "mt-5 inline-flex items-center gap-1.5 text-[13px] font-bold transition-all",
                        isActive
                          ? "text-indigo-300"
                          : "text-slate-400 group-hover:text-indigo-600",
                      )}
                    >
                      Step {s.step} of 04
                      <span
                        className={cn(
                          "h-1.5 w-1.5 rounded-full transition-colors",
                          isActive ? "bg-emerald-400" : "bg-slate-300",
                        )}
                      />
                    </span>
                  </button>
                </Reveal>
              );
            })}
          </div>
        </div>

        <Reveal delay={150} className="mt-10 flex justify-center">
          <a
            href="#pricing"
            className="group inline-flex items-center gap-2.5 rounded-2xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-bold text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-indigo-300 hover:text-indigo-600 hover:shadow-lg"
          >
            <PlayCircle className="h-5 w-5 text-indigo-600 transition-transform duration-300 group-hover:scale-110" />
            Watch the 2-minute setup walkthrough
          </a>
        </Reveal>
      </div>
    </section>
  );
}
