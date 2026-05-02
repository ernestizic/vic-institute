'use client';

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { WHATSAPP_LINK, BRAND_NAME } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { WhatsappIcon } from "../icons/whatsapp-icon";

const links = [
  { href: "#problem", label: "Why" },
  { href: "#solution", label: "Solution" },
  { href: "#pricing", label: "Plans" },
  { href: "#testimonials", label: "Results" },
  { href: "#process", label: "How it works" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-40 transition-smooth",
        scrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border shadow-soft"
          : "bg-transparent",
      )}
    >
      <div className="container flex items-center justify-between h-16">
        <a
          href="#top"
          className="flex items-center gap-2 font-display font-bold text-lg"
        >
          <span className="h-8 w-8 rounded-lg bg-gradient-primary grid place-items-center text-primary-foreground text-sm">
            V
          </span>
          <span>{BRAND_NAME}</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="hover:text-foreground transition-smooth"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="hidden md:flex">
          <Button asChild variant="whatsapp" size="sm">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <WhatsappIcon /> WhatsApp
            </a>
          </Button>
        </div>
        <button
          className="md:hidden p-2 -mr-2 text-foreground"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background py-4">
          <div className="container py-4 flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-2 text-sm font-medium text-foreground/80"
              >
                {l.label}
              </a>
            ))}
            <Button asChild variant="whatsapp" className="mt-2">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <WhatsappIcon /> Start on WhatsApp
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
