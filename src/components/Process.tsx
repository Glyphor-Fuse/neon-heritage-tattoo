import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { CircleCheck, ShieldCheck, Zap } from 'lucide-react';

const steps = [
  {
    title: "PREPARATION",
    desc: "Exfoliate, hydrate, and rest. We provide a tailored guide 48 hours before your session.",
    icon: <Zap className="w-8 h-8 text-primary" />,
    color: "bg-primary/5"
  },
  {
    title: "THE SESSION",
    desc: "A private, focused environment. No distractions, just high-performance traditionalism.",
    icon: <CircleCheck className="w-8 h-8 text-primary" />,
    color: "bg-white/5"
  },
  {
    title: "AFTERCARE",
    desc: "The tattoo is only half the work. Follow our medical-grade protocol for lifetime vibrancy.",
    icon: <ShieldCheck className="w-8 h-8 text-primary" />,
    color: "bg-primary/5"
  }
];

export const Process = () => {
  return (
    <section id="process" className="py-32 bg-black border-y border-white/5">
      <div className="container px-6">
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter mb-6">PROFESSIONAL TRANSPARENCY</h2>
          <p className="text-muted-foreground text-lg">Meticulous standards for permanent art. Every step of our process is designed for safety, comfort, and exceptional healed results.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <Card key={idx} className={`rounded-none border-white/10 ${step.color} hover:border-primary/50 transition-colors`}>
              <CardContent className="p-10">
                <div className="mb-8">{step.icon}</div>
                <h3 className="text-2xl font-display font-bold tracking-tight mb-4">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.desc}
                </p>
                <div className="mt-8 flex items-center text-xs font-bold tracking-widest text-primary uppercase cursor-pointer hover:underline">
                  Read Protocol
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
