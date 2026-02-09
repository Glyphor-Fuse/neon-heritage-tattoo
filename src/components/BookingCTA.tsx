import React from 'react';
import { Button } from "@/components/ui/button";

export const BookingCTA = () => {
  return (
    <section id="booking" className="py-32 relative overflow-hidden">
      <div className="container px-6 relative z-10">
        <div className="bg-primary p-12 md:p-24 flex flex-col items-center text-center">
          <h2 className="text-5xl md:text-8xl font-display font-bold text-black tracking-tighter mb-8 max-w-4xl">
            CLAIM YOUR SPACE ON THE SCHEDULE
          </h2>
          <p className="text-black/80 text-xl font-medium max-w-2xl mb-12 leading-relaxed">
            Neon Heritage operates on a private, appointment-only basis. Our books open quarterly. Secure your consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 w-full max-w-md">
            <Button size="lg" className="h-16 flex-1 bg-black text-white hover:bg-white hover:text-black rounded-none font-bold tracking-widest text-lg">
              BOOK NOW
            </Button>
            <Button size="lg" variant="outline" className="h-16 flex-1 border-black text-black hover:bg-black hover:text-white rounded-none font-bold tracking-widest text-lg">
              EMAIL INQUIRY
            </Button>
          </div>
          <p className="mt-12 text-black/60 text-sm font-bold tracking-widest uppercase">
            Current wait time: ~4 weeks for custom work
          </p>
        </div>
      </div>
      
      {/* Decorative BG text */}
      <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 overflow-hidden opacity-5 pointer-events-none select-none">
        <p className="text-[20vw] font-display font-bold leading-none whitespace-nowrap text-white">
          BOOKING OPENING SOON • NEON HERITAGE • 
        </p>
      </div>
    </section>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-black py-20 border-t border-white/5">
      <div className="container px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <h3 className="text-2xl font-display font-bold tracking-tighter text-primary mb-6">NEON HERITAGE</h3>
          <p className="text-muted-foreground max-w-md leading-relaxed mb-8">
            A boutique studio specializing in high-saturation traditional work. We believe in bold lines, vibrant longevity, and professional integrity.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-primary hover:text-primary transition-all">IG</a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-primary hover:text-primary transition-all">TW</a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-primary hover:text-primary transition-all">FB</a>
          </div>
        </div>
        <div>
          <h4 className="font-bold tracking-widest uppercase text-sm mb-6">STUDIO</h4>
          <ul className="space-y-4 text-muted-foreground">
            <li>123 Ink Alley, East London</li>
            <li>Monday — Friday</li>
            <li>11:00 AM — 19:00 PM</li>
            <li>hello@neonheritage.com</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold tracking-widest uppercase text-sm mb-6">LEGAL</h4>
          <ul className="space-y-4 text-muted-foreground">
            <li><a href="#" className="hover:text-primary">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-primary">Consent Terms</a></li>
            <li><a href="#" className="hover:text-primary">Aftercare Guide</a></li>
          </ul>
        </div>
      </div>
      <div className="container px-6 mt-20 pt-8 border-t border-white/5 text-center text-xs text-muted-foreground tracking-[0.2em] uppercase">
        © 2024 NEON HERITAGE TATTOO STUDIO. ALL RIGHTS RESERVED.
      </div>
    </footer>
  );
};

export default BookingCTA;
