import { Check, GraduationCap } from "lucide-react";
import { Reveal } from "./reveal";

const points = [
  {
    title: "Clear instruction",
    desc: "Step-by-step lessons covering every question type and module.",
  },
  {
    title: "Guided practice",
    desc: "Real exam-style tasks with model answers and timing drills.",
  },
  {
    title: "Corrections & feedback",
    desc: "Personalised writing and speaking feedback with band scores.",
  },
  {
    title: "Ongoing support",
    desc: "Direct access for questions, doubts, and motivation when you need it.",
  },
];

const Solution = () => (
  <section id="solution" className="py-20 lg:py-28 bg-gradient-soft">
    <div className="container">
      <Reveal className="max-w-2xl mx-auto text-center">
        <span className="text-sm font-semibold text-primary uppercase tracking-wider">
          The Solution
        </span>
        <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-bold">
          A Complete IELTS Preparation System
        </h2>
      </Reveal>

      <div className="mt-14 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <Reveal>
          <div className="relative rounded-3xl bg-gradient-primary p-8 lg:p-10 text-primary-foreground shadow-elegant overflow-hidden">
            <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full bg-white/10 blur-2xl" />
            <GraduationCap className="h-10 w-10 mb-5 opacity-90" />
            <h3 className="font-display text-2xl sm:text-3xl font-bold leading-tight">
              Structured learning that combines theory with deliberate practice.
            </h3>
            <p className="mt-4 text-primary-foreground/85 leading-relaxed">
              We don&lsquo;t just teach English — we teach IELTS. Every lesson
              follows a proven progression: understand the format, learn the
              strategy, practice under exam conditions, and get expert feedback
              to lock in improvement.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                { v: "4", l: "Modules" },
                { v: "100+", l: "Practice tasks" },
                { v: "1:1", l: "Feedback" },
              ].map((s) => (
                <div
                  key={s.l}
                  className="rounded-xl bg-white/10 backdrop-blur p-3 text-center"
                >
                  <div className="text-2xl font-bold">{s.v}</div>
                  <div className="text-xs opacity-80">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <ul className="space-y-4">
            {points.map((p) => (
              <li
                key={p.title}
                className="flex gap-4 rounded-2xl bg-card border border-border p-5 shadow-soft hover:shadow-card transition-smooth"
              >
                <div className="shrink-0 h-10 w-10 rounded-full bg-success/10 text-success grid place-items-center">
                  <Check className="h-5 w-5" strokeWidth={3} />
                </div>
                <div>
                  <h4 className="font-semibold text-base">{p.title}</h4>
                  <p className="text-sm text-muted-foreground mt-1">{p.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </div>
  </section>
);

export default Solution;
