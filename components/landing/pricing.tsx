import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal, StaggerGroup, StaggerItem } from "./reveal";
import { WHATSAPP_LINK } from "@/lib/constants";
import { cn } from "@/lib/utils";

type Plan = {
  name: string;
  price: string;
  duration?: string;
  features: string[];
  popular?: boolean;
};

const plans: Plan[] = [
  {
    name: "Recorded Full Course",
    price: "₦20,000",
    duration: "lifetime access",
    features: [
      "Self-paced learning",
      "Watch anywhere, anytime",
      "Full module library",
      "Practice materials included",
    ],
  },
  {
    name: "Live Online Classes",
    price: "₦30,000",
    duration: "/ 3 weeks",
    features: [
      "Real-time teaching",
      "Interactive sessions",
      "All 4 modules",
      "Q&A with instructor",
    ],
  },
  {
    name: "Writing Feedback Service",
    price: "₦50,000",
    duration: "/ 4 weeks",
    features: [
      "Detailed corrections",
      "Band score per task",
      "Task 1 & Task 2",
      "Personalised improvement plan",
    ],
    popular: true,
  },
  {
    name: "One-on-One Private",
    price: "₦150,000",
    duration: "/ 4 weeks",
    features: [
      "Personalised coaching",
      "Flexible scheduling",
      "All modules covered",
      "Direct mentor access",
    ],
  },
];

const Pricing = () => (
  <section id="pricing" className="py-20 lg:py-28">
    <div className="container">
      <Reveal className="max-w-2xl mx-auto text-center">
        <span className="text-sm font-semibold text-primary uppercase tracking-wider">
          Programs
        </span>
        <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-bold">
          Choose the Option That Fits You
        </h2>
        <p className="mt-4 text-muted-foreground text-lg">
          Four flexible ways to prepare — pick what matches your schedule,
          budget, and goals.
        </p>
      </Reveal>

      <StaggerGroup className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {plans.map((plan) => (
          <StaggerItem key={plan.name}>
            <div
              className={cn(
                "relative h-full rounded-2xl border bg-card p-6 flex flex-col transition-smooth hover:-translate-y-1",
                plan.popular
                  ? "border-primary/40 shadow-elegant ring-1 ring-primary/20"
                  : "border-border shadow-soft hover:shadow-card",
              )}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 rounded-full bg-gradient-primary text-primary-foreground text-xs font-bold px-3 py-1 shadow-soft">
                  <Sparkles className="h-3 w-3" /> Most Popular
                </span>
              )}
              <h3 className="font-display text-lg font-bold">{plan.name}</h3>
              <div className="mt-4 flex items-baseline gap-1.5">
                <span className="text-3xl font-extrabold tracking-tight">
                  {plan.price}
                </span>
                {plan.duration && (
                  <span className="text-sm text-muted-foreground">
                    {plan.duration}
                  </span>
                )}
              </div>
              <ul className="mt-5 space-y-2.5 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check
                      className="h-4 w-4 text-success mt-0.5 shrink-0"
                      strokeWidth={3}
                    />
                    <span className="text-foreground/80">{f}</span>
                  </li>
                ))}
              </ul>
              <Button
                asChild
                variant={plan.popular ? "hero" : "outline"}
                className="mt-6 w-full"
              >
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Choose Plan
                </a>
              </Button>
            </div>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </div>
  </section>
);

export default Pricing;
