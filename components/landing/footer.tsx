import { BRAND_NAME, WHATSAPP_LINK } from "@/lib/constants";
import Image from "next/image";
import { WhatsappIcon } from "../icons/whatsapp-icon";

const Footer = () => (
  <footer className="border-t border-border bg-background py-8 max-h-20">
    <div className="container py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <a href="#top" className="flex shrink-0 items-center py-2">
            <Image
              src="/vic-logo-transparent-preview.png"
              alt="VIC Institute"
              height={10}
              width={220}
              className="h-auto w-full max-w-35 sm:max-w-45 md:max-w-55"
            />
          </a>
          <div>
            <div className="font-display font-bold">{BRAND_NAME}</div>
            <div className="text-xs text-muted-foreground">
              IELTS Band 7+ Preparation
            </div>
          </div>
        </div>
        <p className="text-xs font-display">
          <b>Principal</b>: Isaac Victor Chiagoziem
        </p>
        <p className="text-xs font-display mb-4">
          <b>Email</b>: <a href="mailto:v.i.c.instituteoflearning@gmail.com" className="hover:underline">
            V.I.C.INSTITUTEOFLEARNING@gmail.com
          </a>
        </p>
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
