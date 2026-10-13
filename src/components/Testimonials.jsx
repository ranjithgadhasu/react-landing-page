import { useCallback, useEffect, useRef, useState } from "react";
import { Star, Quote, ChevronLeft, ChevronRight, BadgeCheck } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { testimonials } from "../data/content";
import { cn } from "../utils/cn";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [perView, setPerView] = useState(() => {
    if (typeof window === "undefined") return 1;
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 640) return 2;
    return 1;
  });
  const timer = useRef(null);

  useEffect(() => {
    const calc = () => {
      if (window.innerWidth >= 1024) setPerView(3);
      else if (window.innerWidth >= 640) setPerView(2);
      else setPerView(1);
    };
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);

  const maxIndex = Math.max(testimonials.length - perView, 0);

  const next = useCallback(() => {
    setIndex((i) => (i >= maxIndex ? 0 : i + 1));
  }, [maxIndex]);

  const prev = useCallback(() => {
    setIndex((i) => (i <= 0 ? maxIndex : i - 1));
  }, [maxIndex]);

  useEffect(() => {
    if (paused) return;
    timer.current = window.setInterval(next, 4200);
    return () => {
      if (timer.current) window.clearInterval(timer.current);
    };
  }, [next, paused]);


  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  return (
    <section id="testimonials" className="relative scroll-mt-24 overflow-hidden bg-gradient-to-b from-slate-50 via-indigo-50/40 to-white py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-1/2 top-10 h-64 w-[640px] -translate-x-1/2 rounded-full bg-violet-200/40 blur-[110px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Customer Love"
          title="Loved by teams"
          highlight="around the world"
          description="4.9/5 average across 6,200+ verified reviews on G2, Capterra and Product Hunt."
        />

        <Reveal delay={150} className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {["G2 4.9 ★", "Capterra 4.8 ★", "Product Hunt #1"].map((b) => (
            <span key={b} className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-4 py-2 text-[13px] font-bold text-slate-600 shadow-sm">
              <BadgeCheck className="h-4 w-4 text-indigo-500" /> {b}
            </span>
          ))}
        </Reveal>

        <Reveal delay={200} className="relative mt-12">
          <div
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            className="overflow-hidden rounded-[1.5rem] [mask-image:linear-gradient(to_right,transparent,black_4%,black_96%,transparent)]"
          >
            <div
              className="flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{ transform: `translateX(-${index * (100 / perView)}%)` }}
            >
              {testimonials.map((t) => (
                <div
                  key={t.name}
                  className="shrink-0 px-2.5 sm:px-3"
                  style={{ width: `${100 / perView}%` }}
                >
                  <figure className="group relative flex h-full flex-col rounded-3xl border border-slate-100 bg-white p-5 sm:p-7 shadow-[0_10px_40px_-16px_rgba(15,23,42,0.15)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_60px_-16px_rgba(79,70,229,0.3)]">
                    <Quote className="absolute right-6 top-6 h-8 w-8 text-indigo-100 transition-colors duration-300 group-hover:text-indigo-200" />
                    <div className="flex gap-1">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-slate-600">
                      “{t.quote}”
                    </blockquote>
                    <figcaption className="mt-6 flex items-center gap-3.5 border-t border-slate-100 pt-5">
                      <span className={`flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br ${t.color} text-sm font-extrabold text-white shadow-lg`}>
                        {t.initials}
                      </span>
                      <div>
                        <p className="flex items-center gap-1.5 text-[15px] font-extrabold text-slate-900">
                          {t.name}
                          <BadgeCheck className="h-4 w-4 text-sky-500" />
                        </p>
                        <p className="text-[13px] font-medium text-slate-500">
                          {t.role} · {t.company}
                        </p>
                      </div>
                    </figcaption>
                  </figure>
                </div>
              ))}
            </div>
          </div>

      
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              aria-label="Previous testimonials"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition-all duration-300 hover:-translate-x-0.5 hover:border-indigo-300 hover:bg-indigo-600 hover:text-white hover:shadow-lg hover:shadow-indigo-500/40"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex items-center gap-2">
              {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={cn(
                    "h-2.5 rounded-full transition-all duration-400",
                    i === index ? "w-8 bg-gradient-to-r from-indigo-600 to-fuchsia-500" : "w-2.5 bg-slate-300 hover:bg-slate-400"
                  )}
                />
              ))}
            </div>
            <button
              onClick={next}
              aria-label="Next testimonials"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition-all duration-300 hover:translate-x-0.5 hover:border-indigo-300 hover:bg-indigo-600 hover:text-white hover:shadow-lg hover:shadow-indigo-500/40"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
