import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { StyleGallery } from '@/components/StyleGallery';
import { Process } from '@/components/Process';
import { BookingCTA, Footer } from '@/components/BookingCTA';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <StyleGallery />
        <Process />
        <BookingCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
