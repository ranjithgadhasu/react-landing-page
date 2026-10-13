import { useState } from "react";
import { ArrowRight, CheckCircle2, Mail } from "lucide-react";
import Reveal from "./Reveal";

export default function CTA() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const submit = (e) => {
    e.preventDefault();
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
    if (!valid) {
      setError("Please enter a valid work email.");
      return;
    }
    setError("");
    setSent(true);
  };

  return (
    <section className="relative px-4 pb-20 sm:px-6 sm:pb-28 lg:px-8">
      <Reveal variant="scale" className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[2rem] bg-slate-950 px-6 py-14 text-center shadow-2xl shadow-indigo-950/30 sm:px-12 sm:py-20">
          <div
            className="pointer-events-none absolute inset-0"
            aria-hidden="true"
          >
            <div className="bg-grid-dark absolute inset-0 opacity-70 [mask-image:radial-gradient(ellipse_60%_70%_at_50%_50%,black,transparent)]" />
            <div className="animate-blob absolute -left-16 -top-16 h-64 w-64 rounded-full bg-indigo-600/40 blur-[100px]" />
            <div className="animate-blob absolute -bottom-16 -right-16 h-64 w-64 rounded-full bg-fuchsia-600/30 blur-[100px] [animation-delay:4s]" />
            <div className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-indigo-400/60 to-transparent" />
          </div>

          <div className="relative mx-auto max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-indigo-300">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              Join 48,000+ teams
            </span>

            <h2 className="mt-5 text-balance text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              Ready to 10× your team's{" "}
              <span className="text-gradient-light">output?</span>
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">
              Start your free trial today. Set up in minutes, invite your team,
              and feel the difference by Friday.
            </p>

            {sent ? (
              <div className="mx-auto mt-8 flex max-w-md items-center justify-center gap-3 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 px-6 py-4">
                <CheckCircle2 className="h-6 w-6 shrink-0 text-emerald-400" />
                <p className="text-left text-sm font-semibold text-emerald-200">
                  You're in! Check{" "}
                  <span className="font-extrabold text-white">{email}</span> for
                  your magic invite link.
                </p>
              </div>
            ) : (
              <form
                onSubmit={submit}
                className="mx-auto mt-8 max-w-md"
                noValidate
              >
                <div className="flex flex-col gap-3 sm:flex-row">
                  <label className="relative flex-1">
                    <Mail className="pointer-events-none absolute left-4 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-slate-500" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@company.com"
                      className="w-full rounded-2xl border border-white/15 bg-white/5 py-4 pl-11 pr-4 text-[15px] font-medium text-white placeholder:text-slate-500 outline-none backdrop-blur transition focus:border-indigo-400 focus:bg-white/10 focus:ring-4 focus:ring-indigo-500/20"
                    />
                  </label>

                  <button
                    type="submit"
                    className="btn-shine group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-2xl bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 px-7 py-4 text-[15px] font-bold text-white shadow-xl shadow-violet-600/40 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl"
                  >
                    Get Started
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>

                {error ? (
                  <p className="mt-3 text-sm font-semibold text-rose-300">
                    {error}
                  </p>
                ) : (
                  <p className="mt-3 text-[13px] font-medium text-slate-500">
                    Free 14-day trial · No credit card · Cancel anytime
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
