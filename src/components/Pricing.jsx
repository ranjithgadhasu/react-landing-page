import { useState } from "react";
import { Check, Sparkles, ArrowRight, ShieldCheck } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { plans } from "../data/content";
import { cn } from "../utils/cn";

export default function Pricing() {
  const [yearly, setYearly] = useState(true);

  return (
    <section
      id="pricing"
      className="relative scroll-mt-24 overflow-hidden py-20 sm:py-28"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-1/2 top-0 h-80 w-[820px] -translate-x-1/2 rounded-full bg-indigo-100/70 blur-[130px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Simple Pricing"
          title="Plans that grow"
          highlight="with you"
          description="Start free, upgrade when you're ready. Every paid plan includes a 14-day trial — no credit card required."
        />

        <Reveal delay={150} className="mt-8 flex justify-center">
          <div className="relative inline-flex items-center rounded-2xl border border-slate-200 bg-white p-1.5 shadow-sm">
            {["Monthly", "Yearly"].map((label) => {
              const isYearly = label === "Yearly";
              const selected = yearly === isYearly;
              return (
                <button
                  key={label}
                  onClick={() => setYearly(isYearly)}
                  className={cn(
                    "relative z-10 rounded-xl px-6 py-2.5 text-sm font-bold transition-all duration-300 sm:px-8",
                    selected
                      ? "text-white"
                      : "text-slate-500 hover:text-slate-800",
                  )}
                >
                  {label}
                  {isYearly && (
                    <span
                      className={cn(
                        "ml-2 rounded-full px-2 py-0.5 text-[11px] font-extrabold",
                        selected
                          ? "bg-white/20 text-white"
                          : "bg-emerald-100 text-emerald-700",
                      )}
                    >
                      −20%
                    </span>
                  )}
                </button>
              );
            })}
            <span
              className="absolute inset-y-1.5 w-[calc(50%-6px)] rounded-xl bg-slate-900 shadow-lg transition-all duration-300 ease-out"
              style={{ left: yearly ? "calc(50%)" : "6px" }}
              aria-hidden="true"
            />
          </div>
        </Reveal>

        <div className="mt-12 grid items-stretch gap-6 lg:grid-cols-3">
          {plans.map((plan, i) => {
            const price = yearly ? plan.yearly : plan.monthly;
            return (
              <Reveal
                key={plan.name}
                delay={i * 120}
                variant="scale"
                className="h-full"
              >
                <article
                  className={cn(
                    "relative flex h-full flex-col rounded-[1.75rem] p-6 sm:p-8 transition-all duration-500",
                    plan.popular
                      ? "border-2 border-transparent bg-slate-900 text-white shadow-[0_32px_80px_-24px_rgba(79,70,229,0.55)] lg:-translate-y-4 lg:scale-[1.02]"
                      : "card-glow border border-slate-200 bg-white shadow-[0_16px_50px_-24px_rgba(15,23,42,0.2)] hover:shadow-xl",
                  )}
                  style={
                    plan.popular
                      ? {
                          backgroundImage:
                            "linear-gradient(#0b1129, #0b1129), linear-gradient(135deg, #6366f1, #a855f7, #ec4899)",
                          backgroundOrigin: "border-box",
                          backgroundClip: "padding-box, border-box",
                        }
                      : undefined
                  }
                >
                  {plan.popular && (
                    <>
                      <div
                        className="pointer-events-none absolute inset-0 overflow-hidden rounded-[1.6rem]"
                        aria-hidden="true"
                      >
                        <div className="bg-grid-dark absolute inset-0 opacity-60" />
                        <div className="absolute -top-20 left-1/2 h-56 w-96 -translate-x-1/2 rounded-full bg-violet-600/30 blur-[80px]" />
                      </div>
                      <span className="absolute -top-4 left-1/2 inline-flex -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded-full bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider text-white shadow-lg shadow-violet-500/40">
                        <Sparkles className="h-3.5 w-3.5" /> Most Popular
                      </span>
                    </>
                  )}

                  <div className="relative">
                    <h3
                      className={cn(
                        "text-lg font-extrabold tracking-tight",
                        plan.popular ? "text-white" : "text-slate-900",
                      )}
                    >
                      {plan.name}
                    </h3>
                    <p
                      className={cn(
                        "mt-1 text-sm font-medium",
                        plan.popular ? "text-slate-400" : "text-slate-500",
                      )}
                    >
                      {plan.tagline}
                    </p>

                    <div className="mt-6 flex items-end gap-2">
                      <span
                        className={cn(
                          "text-5xl font-black tracking-tight",
                          plan.popular ? "text-white" : "text-slate-900",
                        )}
                      >
                        ${price}
                      </span>
                      <span
                        className={cn(
                          "pb-1.5 text-sm font-semibold",
                          plan.popular ? "text-slate-400" : "text-slate-500",
                        )}
                      >
                        / mo{yearly && price > 0 ? ", billed yearly" : ""}
                      </span>
                    </div>
                    {yearly && price > 0 && (
                      <p
                        className={cn(
                          "mt-1.5 text-[13px] font-bold",
                          plan.popular
                            ? "text-emerald-300"
                            : "text-emerald-600",
                        )}
                      >
                        Save ${(plan.monthly - plan.yearly) * 12}/year vs
                        monthly
                      </p>
                    )}

                    <a
                      href="#home"
                      className={cn(
                        "btn-shine group mt-7 inline-flex w-full items-center justify-center gap-2 rounded-2xl px-6 py-3.5 text-sm font-bold transition-all duration-300 hover:-translate-y-0.5",
                        plan.popular
                          ? "bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 text-white shadow-xl shadow-violet-500/40 hover:shadow-2xl"
                          : "bg-slate-900 text-white shadow-lg hover:bg-indigo-600 hover:shadow-indigo-500/30",
                      )}
                    >
                      {plan.cta}
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </a>

                    <ul
                      className={cn(
                        "mt-7 space-y-3 border-t pt-6",
                        plan.popular ? "border-white/10" : "border-slate-100",
                      )}
                    >
                      {plan.features.map((f) => (
                        <li
                          key={f}
                          className="flex items-start gap-3 text-sm font-medium"
                        >
                          <span
                            className={cn(
                              "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full",
                              plan.popular
                                ? "bg-emerald-500/20 text-emerald-300"
                                : "bg-emerald-50 text-emerald-600",
                            )}
                          >
                            <Check className="h-3 w-3" strokeWidth={3.5} />
                          </span>
                          <span
                            className={
                              plan.popular ? "text-slate-200" : "text-slate-600"
                            }
                          >
                            {f}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={200}>
          <p className="mt-10 flex flex-wrap items-center justify-center gap-2 text-center text-sm font-semibold text-slate-500">
            <ShieldCheck className="h-4.5 w-4.5 text-emerald-500" />
            30-day money-back guarantee · SOC 2 certified · Cancel anytime with
            two clicks
          </p>
        </Reveal>
      </div>
    </section>
  );
}
