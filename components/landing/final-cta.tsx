import { Button } from "@/components/ui/button";
import { Reveal } from "./reveal";
import { WHATSAPP_LINK } from "@/lib/constants";
import { WhatsappIcon } from "../icons/whatsapp-icon";

const FinalCTA = () => (
  <section id="cta" className="py-20 lg:py-28">
    <div className="container">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl bg-gradient-cta px-6 py-14 sm:px-12 sm:py-20 text-center text-primary-foreground shadow-elegant">
          <div className="absolute inset-0 z-0 opacity-30">
            <div className="absolute top-0 left-1/4 h-64 w-64 rounded-full bg-white/30 blur-3xl" />
            <div className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-accent/40 blur-3xl" />
          </div>
          <div className="relative">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight max-w-3xl mx-auto">
              Start Your IELTS Preparation Today
            </h2>
            <p className="mt-5 text-primary-foreground/90 text-lg max-w-xl mx-auto">
              Join hundreds of students who&lsquo;ve already achieved Band 7+.
              Your target band is one message away.
            </p>
            <div className="mt-9 flex flex-col items-center gap-4">
              <Button
                asChild
                variant="whatsapp"
                size="xl"
                className="shadow-glow"
              >
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WhatsappIcon /> Chat on WhatsApp
                </a>
              </Button>
              <p className="text-sm text-primary-foreground/80">
                Send:{" "}
                <span className="font-bold bg-white/15 rounded-md px-2 py-0.5">
                  &quot;IELTS&quot;
                </span>
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

export default FinalCTA;
