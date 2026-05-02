import { UserCheck, MessagesSquare, Target, GraduationCap } from "lucide-react";
import { Reveal, StaggerGroup, StaggerItem } from "./reveal";

const items = [
  {
    icon: UserCheck,
    title: "Needs structured guidance",
    desc: "You want a clear roadmap, not scattered resources.",
  },
  {
    icon: MessagesSquare,
    title: "Wants real feedback",
    desc: "You're tired of guessing whether your answers are good enough.",
  },
  {
    icon: Target,
    title: "Preparing for IELTS",
    desc: "Academic or General — you have an exam date in mind.",
  },
  {
    icon: GraduationCap,
    title: "Stuck at Band 6 – 6.5",
    desc: "You've plateaued and need a system to push past it.",
  },
];

const Audience = () => (
  <section id="audience" className="py-20 lg:py-28 bg-gradient-soft">
    <div className="container">
      <Reveal className="max-w-2xl mx-auto text-center">
        <span className="text-sm font-semibold text-primary uppercase tracking-wider">
          Right For You If
        </span>
        <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-bold">
          Who This Program Is For
        </h2>
      </Reveal>

      <StaggerGroup className="mt-14 grid sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
        {items.map((it) => (
          <StaggerItem key={it.title}>
            <div className="flex gap-4 rounded-2xl bg-card border border-border p-6 shadow-soft hover:shadow-card transition-smooth">
              <div className="shrink-0 h-12 w-12 rounded-xl bg-accent/15 text-primary grid place-items-center">
                <it.icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">{it.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{it.desc}</p>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </div>
  </section>
);

export default Audience;
