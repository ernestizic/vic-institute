import { Star, Quote } from "lucide-react";
import { Reveal, StaggerGroup, StaggerItem } from "./reveal";

const testimonials = [
  {
    name: "Ijeoma",
    country: "Nigeria",
    band: "7.0",
    quote:
      "The structure made all the difference. I knew exactly what to focus on each week, and the writing feedback transformed my Task 2 essays. Hit my Band 7.0 on the first attempt.",
  },
  {
    name: "Fara",
    country: "Cyprus",
    band: "8.0",
    quote:
      "I had only two weeks before my exam. The strategies I learned for Reading and Listening alone pushed me from a 6.5 to an 8.0 — I still can't believe it.",
  },
  {
    name: "Serena",
    country: "Nigeria",
    band: "7.5",
    quote:
      "Reading was always my weakest. The technique training gave me a complete breakthrough — I now finish all passages with time to check my answers.",
  },
];

const Testimonials = () => (
  <section id="testimonials" className="py-20 lg:py-28">
    <div className="container">
      <Reveal className="max-w-2xl mx-auto text-center">
        <span className="text-sm font-semibold text-primary uppercase tracking-wider">
          Success Stories
        </span>
        <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-bold">
          Real Results from Students
        </h2>
        <p className="mt-4 text-muted-foreground text-lg">
          Hundreds of students have hit their target band with our system.
          Here&lsquo;s what a few of them say.
        </p>
      </Reveal>

      <StaggerGroup className="mt-14 grid md:grid-cols-3 gap-6">
        {testimonials.map((t) => (
          <StaggerItem key={t.name}>
            <article className="h-full rounded-2xl bg-card border border-border p-6 lg:p-7 shadow-soft hover:shadow-card transition-smooth flex flex-col">
              <div className="flex items-center justify-between">
                <div className="flex gap-0.5" aria-label="5 star rating">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <span className="inline-flex items-center gap-1 rounded-full bg-success/10 text-success text-xs font-bold px-2.5 py-1">
                  Band {t.band}
                </span>
              </div>
              <Quote className="h-8 w-8 text-primary/20 mt-4" />
              <blockquote className="mt-2 text-foreground/85 leading-relaxed flex-1">
                &lsquo;{t.quote}&lsquo;
              </blockquote>
              <footer className="mt-6 flex items-center gap-3 pt-5 border-t border-border">
                <div className="h-10 w-10 rounded-full bg-gradient-primary text-primary-foreground grid place-items-center font-bold">
                  {t.name[0]}
                </div>
                <div>
                  <div className="font-semibold text-sm">{t.name}</div>
                  <div className="text-xs text-muted-foreground">
                    {t.country}
                  </div>
                </div>
              </footer>
            </article>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </div>
  </section>
);

export default Testimonials;
