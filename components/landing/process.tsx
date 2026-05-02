import {
  ListChecks,
  MessageCircle,
  ClipboardCheck,
  Rocket,
} from "lucide-react";
import { Reveal, StaggerGroup, StaggerItem } from "./reveal";

const steps = [
  {
    icon: ListChecks,
    title: "Choose a plan",
    desc: "Pick the program that matches your goals and schedule.",
  },
  {
    icon: MessageCircle,
    title: "Message on WhatsApp",
    desc: "Send 'IELTS' to start the conversation with our team.",
  },
  {
    icon: ClipboardCheck,
    title: "Get assessment",
    desc: "We evaluate your current level and target band.",
  },
  {
    icon: Rocket,
    title: "Start preparation",
    desc: "Begin your structured journey to Band 7+.",
  },
];

const Process = () => (
  <section id="process" className="py-20 lg:py-28 bg-gradient-soft">
    <div className="container">
      <Reveal className="max-w-2xl mx-auto text-center">
        <span className="text-sm font-semibold text-primary uppercase tracking-wider">
          Get Started
        </span>
        <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-bold">
          How to Get Started
        </h2>
        <p className="mt-4 text-muted-foreground text-lg">
          Four simple steps from today to your IELTS success.
        </p>
      </Reveal>

      <StaggerGroup className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 relative">
        {steps.map((s, i) => (
          <StaggerItem key={s.title}>
            <div className="relative h-full rounded-2xl bg-card border border-border p-6 shadow-soft hover:shadow-card transition-smooth">
              <div className="flex items-center justify-between mb-4">
                <div className="h-12 w-12 rounded-xl bg-gradient-primary text-primary-foreground grid place-items-center shadow-soft">
                  <s.icon className="h-6 w-6" />
                </div>
                <span className="text-4xl font-display font-extrabold text-primary/10">
                  0{i + 1}
                </span>
              </div>
              <h3 className="font-semibold text-lg">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </div>
  </section>
);

export default Process;
