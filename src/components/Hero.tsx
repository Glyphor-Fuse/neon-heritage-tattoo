import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/hero-bg.jpg" 
          alt="Studio Atmosphere" 
          className="w-full h-full object-cover opacity-40 grayscale hover:grayscale-0 transition-all duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
      </div>

      <div className="container relative z-10 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold tracking-[0.3em] uppercase mb-6 border border-primary/20">
            Private Tattoo Studio • London
          </span>
          <h1 className="text-6xl md:text-9xl font-display font-bold leading-[0.9] tracking-tighter mb-8">
            VIBRANT <br />
            <span className="text-primary italic">TRADITION</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10 leading-relaxed">
            Where heritage linework meets modern neon saturation. A private editorial experience for those who view skin as the ultimate canvas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="h-16 px-8 rounded-none text-lg font-bold bg-primary text-black hover:bg-white transition-colors group">
              VIEW THE FLASH
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="h-16 px-8 rounded-none text-lg font-bold border-white/20 hover:bg-white/5 transition-colors">
              BOOK CONSULTATION
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Vertical Decorative Text */}
      <div className="absolute right-10 bottom-10 hidden lg:block">
        <p className="text-xs font-bold tracking-[0.5em] uppercase text-white/20 [writing-mode:vertical-rl]">
          ESTABLISHED MMXXIV • NEON HERITAGE
        </p>
      </div>
    </section>
  );
};

export default Hero;
