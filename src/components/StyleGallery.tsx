import { useState } from 'react';
import { motion } from 'framer-motion';
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const projects = [
  { id: 1, title: 'Cobra Coil', flash: '/images/flash-1.jpg', healed: '/images/healed-1.jpg', size: 'large' },
  { id: 2, title: 'Neon Dagger', flash: '/images/flash-2.jpg', healed: '/images/healed-2.jpg', size: 'small' },
  { id: 3, title: 'Lotus Burn', flash: '/images/flash-3.jpg', healed: '/images/healed-3.jpg', size: 'medium' },
  { id: 4, title: 'Heritage Mask', flash: '/images/flash-4.jpg', healed: '/images/healed-4.jpg', size: 'medium' },
  { id: 5, title: 'Cyber Swallow', flash: '/images/flash-5.jpg', healed: '/images/healed-5.jpg', size: 'large' },
  { id: 6, title: 'Prism Tiger', flash: '/images/flash-6.jpg', healed: '/images/healed-6.jpg', size: 'small' },
];

export const StyleGallery = () => {
  const [viewMode, setViewMode] = useState<'flash' | 'healed'>('healed');

  return (
    <section id="gallery" className="py-32 bg-background">
      <div className="container px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tighter mb-6">
              FLASH TO <span className="text-primary italic">SKIN</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Witness the transformation from paper to permanence. Use the toggle to switch between original flash designs and finished, healed work.
            </p>
          </div>
          
          <div className="bg-white/5 p-1 rounded-none border border-white/10">
            <ToggleGroup type="single" value={viewMode} onValueChange={(val) => val && setViewMode(val as any)}>
              <ToggleGroupItem value="flash" className="rounded-none px-6 font-bold tracking-widest uppercase text-xs data-[state=on]:bg-primary data-[state=on]:text-black">
                Original Flash
              </ToggleGroupItem>
              <ToggleGroupItem value="healed" className="rounded-none px-6 font-bold tracking-widest uppercase text-xs data-[state=on]:bg-primary data-[state=on]:text-black">
                Healed Work
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          {projects.map((item) => (
            <motion.div
              layout
              key={item.id}
              className={`relative group overflow-hidden border border-white/5 ${
                item.size === 'large' ? 'md:row-span-2' : ''
              }`}
            >
              <img
                src={viewMode === 'flash' ? item.flash : item.healed}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <div>
                  <p className="text-primary text-xs font-bold tracking-widest uppercase mb-1">Project {item.id}</p>
                  <h3 className="text-xl font-display font-bold text-white">{item.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StyleGallery;
