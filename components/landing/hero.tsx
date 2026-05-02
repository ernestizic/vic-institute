"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, BadgeCheck, GraduationCap, Layers } from "lucide-react";
import { motion } from "framer-motion";
import { WHATSAPP_LINK } from "@/lib/constants";
import Image from "next/image";
import { WhatsappIcon } from "../icons/whatsapp-icon";

const trustBadges = [
  { icon: BadgeCheck, label: "Band 7+ Proven Results" },
  { icon: GraduationCap, label: "Expert Guidance" },
  { icon: Layers, label: "Structured Program" },
];

const Hero = () => (
  <section
    id="top"
    className="relative overflow-hidden bg-gradient-hero pt-28 pb-20 lg:pt-36 lg:pb-28"
  >
    <div className="absolute inset-0 -z-10 opacity-60">
      <div className="absolute top-1/4 -left-24 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />
    </div>

    <div className="container grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
        className="text-center lg:text-left"
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary">
          <span className="h-1.5 w-1.5 rounded-full bg-success animate-pulse" />
          Now enrolling — limited slots
        </span>
        <h1 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] text-foreground">
          Achieve <span className="text-gradient">Band 7+</span> in IELTS with
          the Right Strategy
        </h1>
        <p className="mt-5 text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0">
          Structured training, practice, and expert feedback for all four
          modules — Listening, Reading, Writing, and Speaking.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
          <Button asChild variant="hero" size="xl">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <WhatsappIcon /> Start on WhatsApp
            </a>
          </Button>
          <Button asChild variant="outline" size="xl">
            <a href="#solution">
              See How It Works <ArrowRight />
            </a>
          </Button>
        </div>

        <ul className="mt-8 flex flex-wrap justify-center lg:justify-start gap-x-5 gap-y-3">
          {trustBadges.map((b) => (
            <li
              key={b.label}
              className="flex items-center gap-2 text-sm font-medium text-foreground/80"
            >
              <b.icon className="h-4 w-4 text-primary" />
              {b.label}
            </li>
          ))}
        </ul>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
        className="relative"
      >
        <div className="relative mx-auto max-w-md lg:max-w-none">
          <div
            className="absolute -inset-6 rounded-4xl bg-gradient-primary opacity-20 blur-2xl"
            aria-hidden
          />
          <div className="relative rounded-3xl overflow-hidden shadow-elegant border border-border bg-card">
            <Image
              src="/vic-logo.jpeg"
              alt="Confident IELTS student achieving Band 7.5"
              width={1024}
              height={1024}
              className="w-full h-auto"
              loading="eager"
            />
          </div>
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-5 -left-4 sm:-left-8 bg-card rounded-2xl shadow-card border border-border p-4 flex items-center gap-3"
          >
            <div className="h-10 w-10 rounded-xl bg-success/10 grid place-items-center text-success font-bold">
              8.0
            </div>
            <div className="text-sm">
              <div className="font-semibold leading-tight">Fara — 2 weeks</div>
              <div className="text-muted-foreground text-xs">
                Band 8.0 achieved
              </div>
            </div>
          </motion.div>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute -top-4 -right-2 sm:-right-6 bg-card rounded-2xl shadow-card border border-border px-4 py-3 flex items-center gap-2"
          >
            <div className="flex -space-x-2">
              <span className="h-7 w-7 rounded-full bg-primary/30 border-2 border-card" />
              <span className="h-7 w-7 rounded-full bg-accent/40 border-2 border-card" />
              <span className="h-7 w-7 rounded-full bg-primary-glow/40 border-2 border-card" />
            </div>
            <span className="text-xs font-semibold">500+ students</span>
          </motion.div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Hero;
