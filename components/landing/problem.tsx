import { BookX, Compass, MessageSquareWarning, MicOff } from "lucide-react";
import { Reveal, StaggerGroup, StaggerItem } from "./reveal";

const items = [
  {
    icon: BookX,
    title: "No structured preparation",
    desc: "Random YouTube videos and PDFs leave gaps that cost you bands.",
  },
  {
    icon: Compass,
    title: "Lack of exam strategy",
    desc: "Knowing English isn't enough — IELTS rewards technique.",
  },
  {
    icon: MessageSquareWarning,
    title: "No proper feedback",
    desc: "Without correction, mistakes get repeated until exam day.",
  },
  {
    icon: MicOff,
    title: "Weak speaking & writing",
    desc: "These productive skills need expert assessment to improve.",
  },
];

const Problem = () => (
  <section id="problem" className="py-20 lg:py-28">
    <div className="container">
      <Reveal className="max-w-2xl mx-auto text-center">
        <span className="text-sm font-semibold text-primary uppercase tracking-wider">
          The Problem
        </span>
        <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-bold">
          Why Many Candidates Struggle
        </h2>
        <p className="mt-4 text-muted-foreground text-lg">
          Most IELTS candidates fall short of their target band — not because
          they lack English, but because they lack the right system.
        </p>
      </Reveal>

      <StaggerGroup className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {items.map((it) => (
          <StaggerItem key={it.title}>
            <div className="h-full rounded-2xl border border-border bg-card p-6 shadow-soft hover:shadow-card transition-smooth hover:-translate-y-1">
              <div className="h-12 w-12 rounded-xl bg-destructive/10 text-destructive grid place-items-center mb-4">
                <it.icon className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-lg">{it.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {it.desc}
              </p>
            </div>
          </StaggerItem>
        ))}
      </StaggerGroup>

      <Reveal delay={0.2} className="mt-10 text-center max-w-3xl mx-auto">
        <p className="text-muted-foreground">
          The good news? Each of these problems has a clear, proven solution —
          and it starts with a structured approach.
        </p>
      </Reveal>
    </div>
  </section>
);

export default Problem;
