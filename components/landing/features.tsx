import {
  BookOpen,
  Target,
  Repeat2,
  PenLine,
  Mic,
  MessagesSquare,
} from "lucide-react";
import { Reveal, StaggerGroup, StaggerItem } from "./reveal";

const features = [
  {
    icon: BookOpen,
    title: "Lessons for all 4 modules",
    desc: "Listening, Reading, Writing & Speaking — fully covered.",
  },
  {
    icon: Target,
    title: "Proven strategies",
    desc: "Techniques that work for the real exam, not just theory.",
  },
  {
    icon: Repeat2,
    title: "Structured practice",
    desc: "Progressive drills that build confidence and consistency.",
  },
  {
    icon: PenLine,
    title: "Writing corrections",
    desc: "Task-by-task feedback with band scores and rewrites.",
  },
  {
    icon: Mic,
    title: "Speaking support",
    desc: "Practice prompts and pronunciation guidance.",
  },
  {
    icon: MessagesSquare,
    title: "Direct clarification",
    desc: "Ask questions and get answers from real instructors.",
  },
];

const Features = () => (
  <section id="features" className="py-20 lg:py-28 bg-gradient-soft">
    <div className="container">
      <Reveal className="max-w-2xl mx-auto text-center">
        <span className="text-sm font-semibold text-primary uppercase tracking-wider">
          What&apos;s Included
        </span>
        <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-bold">
          What You Will Get
        </h2>
      </Reveal>

      <StaggerGroup className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {features.map((f) => (
          <StaggerItem key={f.title}>
            <div className="group h-full rounded-2xl bg-card border border-border p-6 shadow-soft hover:shadow-card transition-smooth hover:-translate-y-1">
              <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary grid place-items-center mb-4 group-hover:scale-110 transition-smooth">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-lg">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {f.desc}
              </p>
            </div>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </div>
  </section>
);

export default Features;
