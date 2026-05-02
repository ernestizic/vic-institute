import Audience from "@/components/landing/audience";
import Features from "@/components/landing/features";
import FinalCTA from "@/components/landing/final-cta";
import FloatingWhatsApp from "@/components/landing/floating-whatsapp";
import Footer from "@/components/landing/footer";
import Hero from "@/components/landing/hero";
import Navbar from "@/components/landing/navbar";
import Pricing from "@/components/landing/pricing";
import Problem from "@/components/landing/problem";
import Process from "@/components/landing/process";
import Solution from "@/components/landing/solution";
import Testimonials from "@/components/landing/testimonials";
import Urgency from "@/components/landing/urgency";
import WhyItWorks from "@/components/landing/why-it-works";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Pricing />
        <Features />
        <WhyItWorks />
        <Audience />
        <Testimonials />
        <Process />
        <Urgency />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
