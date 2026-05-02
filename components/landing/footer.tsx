import { BRAND_NAME, WHATSAPP_LINK } from "@/lib/constants";
import { WhatsappIcon } from "../icons/whatsapp-icon";

const Footer = () => (
  <footer className="border-t border-border bg-background py-8">
    <div className="container py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
      <div className="flex items-center gap-2">
        <span className="h-8 w-8 rounded-lg bg-gradient-primary grid place-items-center text-primary-foreground font-bold text-sm">
          V
        </span>
        <div>
          <div className="font-display font-bold">{BRAND_NAME}</div>
          <div className="text-xs text-muted-foreground">
            IELTS Band 7+ Preparation
          </div>
        </div>
      </div>
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-sm font-medium text-foreground/80 hover:text-primary transition-smooth"
      >
        <WhatsappIcon color="green" size={20} /> Chat on WhatsApp
      </a>
      <p className="text-xs text-muted-foreground">
        © {new Date().getFullYear()} {BRAND_NAME}. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
