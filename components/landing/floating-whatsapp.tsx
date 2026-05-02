import { WHATSAPP_LINK } from "@/lib/constants";
import { WhatsappIcon } from "../icons/whatsapp-icon";

const FloatingWhatsApp = () => (
  <a
    href={WHATSAPP_LINK}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat with us on WhatsApp"
    className="fixed bottom-5 right-5 z-50 group"
  >
    <span
      className="absolute inset-0 rounded-full bg-whatsapp animate-pulse-ring"
      aria-hidden
    />
    <span className="relative flex items-center gap-2 bg-whatsapp text-whatsapp-foreground rounded-full pl-4 pr-5 py-3 shadow-elegant transition-smooth group-hover:scale-105">
      <WhatsappIcon />
      <span className="hidden sm:inline font-semibold text-sm">
        Chat on WhatsApp
      </span>
    </span>
  </a>
);

export default FloatingWhatsApp;
