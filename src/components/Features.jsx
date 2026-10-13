import { ArrowUpRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { features } from "../data/content";

export default function Features() {
  return (
    <section
      id="features"
      className="relative scroll-mt-24 overflow-hidden bg-slate-950 py-20 sm:py-28"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="bg-grid-dark absolute inset-0 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]" />
        <div className="absolute left-1/2 top-0 h-72 w-[720px] -translate-x-1/2 rounded-full bg-indigo-600/25 blur-[130px]" />
        <div className="animate-blob absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-violet-600/20 blur-3xl" />
        <div className="animate-blob absolute -right-20 top-1/3 h-72 w-72 rounded-full bg-fuchsia-600/15 blur-3xl [animation-delay:5s]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          dark
          eyebrow="Powerful Features"
          title="Everything you need to"
          highlight="scale faster"
          description="Six superpowers, one subscription. Each feature is crafted to remove friction and give your team leverage."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={(i % 3) * 110} variant="scale">
              <article className="card-glow group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 sm:p-7 backdrop-blur transition-colors duration-300 hover:border-white/20 hover:bg-white/[0.07]">
                <div
                  className={`pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gradient-to-br ${f.gradient} opacity-0 blur-[80px] transition-opacity duration-500 group-hover:opacity-40`}
                  aria-hidden="true"
                />

                <div className="relative">
                  <div className="flex items-start justify-between">
                    <span
                      className={`inline-flex h-13 w-13 items-center justify-center rounded-2xl bg-gradient-to-br ${f.gradient} p-3.5 text-white shadow-lg transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110`}
                    >
                      <f.icon className="h-6 w-6" strokeWidth={2.2} />
                    </span>

                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-slate-300">
                      {f.tag}
                    </span>
                  </div>

                  <h3 className="mt-5 text-xl font-extrabold tracking-tight text-white">
                    {f.title}
                  </h3>

                  <p className="mt-2.5 text-[15px] leading-relaxed text-slate-400">
                    {f.description}
                  </p>

                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-indigo-300 transition-all duration-300 group-hover:gap-3 group-hover:text-white">
                    Learn more
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
                  </span>
                </div>

                <span
                  className={`absolute inset-x-0 bottom-0 h-[3px] bg-gradient-to-r ${f.gradient} origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100`}
                  aria-hidden="true"
                />
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200} className="mt-12 text-center">
          <p className="text-sm font-semibold text-slate-400">
            …plus 40+ more capabilities like SSO, audit logs, API access and
            white-labeling.
          </p>

          <a
            href="#pricing"
            className="btn-shine mt-5 inline-flex items-center gap-2 rounded-2xl bg-white px-7 py-3.5 text-sm font-extrabold text-slate-900 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-indigo-50"
          >
            Explore all features <ArrowUpRight className="h-4 w-4" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
