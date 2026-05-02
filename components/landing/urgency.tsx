import { Clock, Users } from "lucide-react";
import { Reveal } from "./reveal";

const Urgency = () => (
  <section className="py-12 bg-gradient-soft border-y border-border">
    <div className="container">
      <Reveal>
        <div className="flex flex-col sm:flex-row items-center gap-6 rounded-2xl bg-card border border-primary/20 px-6 py-6 shadow-soft">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="h-12 w-12 rounded-full bg-destructive/10 text-destructive grid place-items-center">
                <Clock className="h-6 w-6" />
              </div>
              <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-destructive animate-pulse" />
            </div>
            <div>
              <h3 className="font-display font-bold text-lg sm:text-xl">
                Limited Slots Available
              </h3>
              <p className="text-sm text-muted-foreground mt-0.5">
                We cap each cohort to ensure personalised attention. Spots fill
                quickly.
              </p>
            </div>
          </div>
          <div className="sm:ml-auto flex items-center gap-2 text-sm font-semibold text-primary">
            <Users className="h-4 w-4" />
            Only a few spots left this month
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

export default Urgency;
