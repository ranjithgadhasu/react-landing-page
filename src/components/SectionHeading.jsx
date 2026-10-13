import Reveal from "./Reveal";
import { cn } from "../utils/cn";

export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  align = "center",
  dark = false,
}) {
  return (
    <div className={cn("max-w-2xl", align === "center" ? "mx-auto text-center" : "text-left")}>
      <Reveal>
        <span
          className={cn(
            "inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em]",
            dark
              ? "border-white/15 bg-white/5 text-indigo-300"
              : "border-indigo-100 bg-indigo-50/80 text-indigo-600"
          )}
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-indigo-500" />
          </span>
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={100}>
        <h2
          className={cn(
            "mt-5 text-[1.9rem] min-[400px]:text-3xl font-extrabold leading-[1.12] tracking-tight text-balance sm:text-4xl lg:text-[2.75rem]",
            dark ? "text-white" : "text-slate-900"
          )}
        >
          {title}{" "}
          {highlight && <span className="text-gradient">{highlight}</span>}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={200}>
          <p className={cn("mt-4 text-base leading-relaxed sm:text-lg", dark ? "text-slate-400" : "text-slate-600")}>
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
