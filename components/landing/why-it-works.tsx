import { Brain, Wrench, TrendingUp, ShieldCheck, Trophy } from "lucide-react";
import { Reveal, StaggerGroup, StaggerItem } from "./reveal";

const points = [
  {
    icon: Brain,
    text: "Understand the exam deeply — format, scoring, and expectations.",
  },
  {
    icon: Wrench,
    text: "Apply techniques confidently under real timing pressure.",
  },
  {
    icon: TrendingUp,
    text: "Improve weak areas with targeted, measurable practice.",
  },
  {
    icon: ShieldCheck,
    text: "Avoid repeated mistakes with expert correction loops.",
  },
  {
    icon: Trophy,
    text: "Increase your chances of hitting Band 7+ on exam day.",
  },
];

const WhyItWorks = () => (
  <section id="why" className="py-20 lg:py-28">
    <div className="container max-w-5xl">
      <Reveal className="max-w-2xl mx-auto text-center">
        <span className="text-sm font-semibold text-primary uppercase tracking-wider">
          The Method
        </span>
        <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-bold">
          Why This Approach Works
        </h2>
      </Reveal>

      <StaggerGroup className="mt-14 space-y-3">
        {points.map((p, i) => (
          <StaggerItem key={p.text}>
            <div className="flex items-center gap-5 rounded-2xl bg-card border border-border p-5 shadow-soft hover:shadow-card hover:border-primary/30 transition-smooth">
              <div className="shrink-0 relative">
                <div className="h-12 w-12 rounded-xl bg-gradient-primary text-primary-foreground grid place-items-center font-bold text-sm shadow-soft">
                  {String(i + 1).padStart(2, "0")}
                </div>
              </div>
              <p className="font-medium text-foreground/90 flex items-center gap-2">
                <p.icon className="h-4 w-4 text-primary shrink-0" />
                <span>{p.text}</span>
              </p>
            </div>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </div>
  </section>
);

export default WhyItWorks;
