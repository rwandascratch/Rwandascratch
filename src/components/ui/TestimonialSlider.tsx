import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonials } from '@/data/testimonials';
import { Link } from 'react-router-dom';

export function TestimonialSlider() {
  const [activeIndex, setActiveIndex] = useState(1);
  const next = () => setActiveIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <div className="w-full flex flex-col justify-center gap-12 lg:gap-20">
      <div className="text-center animate-fade-in">
        <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold tracking-tight mb-4">What Our Customers Say</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg mb-8">
          Real stories from real people! See how our services have transformed their experiences.
        </p>
        <Link 
          to="/request-website" 
          className="inline-flex items-center justify-center bg-foreground text-background px-8 py-3 rounded-full font-medium hover:scale-105 transition-transform duration-300 shadow-md"
        >
          Book Now
        </Link>
      </div>

      <div className="relative h-64 sm:h-80 flex items-center justify-center w-full animate-slide-up" style={{ animationDelay: '0.1s' }}>
        {/* Base Wavy Path */}
        <svg className="absolute w-full h-full opacity-10 pointer-events-none stroke-foreground" preserveAspectRatio="none" viewBox="0 0 1000 200">
          <path d="M-50,100 C150,200 250,0 500,100 C750,200 850,0 1050,100" fill="none" strokeWidth="2" strokeDasharray="6 6" />
        </svg>

        {/* Dots on wave for aesthetics */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[25%] left-[20%] w-2 h-2 rounded-full bg-foreground opacity-30"></div>
          <div className="absolute top-[70%] left-[35%] w-1.5 h-1.5 rounded-full bg-foreground opacity-30"></div>
          <div className="absolute top-[30%] left-[75%] w-2.5 h-2.5 rounded-full bg-foreground opacity-30"></div>
          <div className="absolute top-[60%] right-[15%] w-2 h-2 rounded-full bg-foreground opacity-30"></div>
        </div>

        <div className="flex items-center justify-center gap-4 sm:gap-8 md:gap-16 relative z-10 w-full">
          {testimonials.map((t, idx) => {
            const diff = Math.abs(idx - activeIndex);
            const isActive = idx === activeIndex;
            
            let sizeClass = 'w-12 h-12 sm:w-16 sm:h-16';
            let opacityClass = 'opacity-40 grayscale-[50%]';
            let yOffset = '';
            let ringClass = 'ring-1 ring-border';

            if (isActive) {
               sizeClass = 'w-24 h-24 sm:w-36 sm:h-36';
               opacityClass = 'opacity-100 z-20 grayscale-0 shadow-xl shadow-primary/20';
               ringClass = 'ring-2 sm:ring-4 ring-primary ring-offset-4 ring-offset-background p-1';
               yOffset = 'scale-110 translate-y-2';
            } else if (diff === 1) {
               sizeClass = 'w-16 h-16 sm:w-20 sm:h-20';
               opacityClass = 'opacity-80';
               yOffset = idx < activeIndex ? 'translate-y-8 sm:translate-y-12' : '-translate-y-8 sm:-translate-y-12';
               ringClass = 'ring-2 ring-primary/40 p-0.5';
            } else if (diff === 2) {
               sizeClass = 'w-12 h-12 sm:w-16 sm:h-16';
               opacityClass = 'opacity-60';
               yOffset = idx < activeIndex ? '-translate-y-10 sm:-translate-y-16' : 'translate-y-10 sm:translate-y-16';
               ringClass = 'ring-1 ring-border';
            } else {
               sizeClass = 'w-10 h-10 sm:w-12 sm:h-12';
               opacityClass = 'opacity-30';
               yOffset = idx < activeIndex ? 'translate-y-4' : '-translate-y-4';
            }

            return (
              <button 
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`relative rounded-full transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] flex-shrink-0 cursor-pointer hover:opacity-100 ${sizeClass} ${opacityClass} ${yOffset} ${ringClass}`}
              >
                <img src={t.avatar} alt={t.name} className="w-full h-full rounded-full object-cover" />
              </button>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12 max-w-4xl mx-auto w-full animate-fade-in" style={{ animationDelay: '0.2s' }}>
        <button onClick={prev} className="hidden md:flex p-4 rounded-full border border-border bg-background hover:bg-secondary transition-colors text-foreground shadow-sm">
          <ChevronLeft className="w-6 h-6" />
        </button>
        
        <div className="flex-1 text-center px-4" key={activeIndex}>
          <p className="text-lg sm:text-xl font-medium text-muted-foreground leading-relaxed animate-fade-in">
            "{testimonials[activeIndex].content}"
          </p>
          {testimonials[activeIndex].link && testimonials[activeIndex].link !== '#' ? (
             <a href={testimonials[activeIndex].link} target="_blank" rel="noopener noreferrer" className="inline-block mt-4 text-primary hover:underline font-medium text-sm">
               View Live Build →
             </a>
          ) : null}
          <div className="mt-6 flex flex-col items-center justify-center animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <span className="font-semibold text-foreground text-lg">{testimonials[activeIndex].name}</span>
            <span className="text-sm text-primary mb-1 mt-1">{testimonials[activeIndex].serviceType}</span>
            <span className="text-xs text-muted-foreground">{testimonials[activeIndex].role}</span>
          </div>
        </div>

        <button onClick={next} className="hidden md:flex p-4 rounded-full border border-border bg-background hover:bg-secondary transition-colors text-foreground shadow-sm">
          <ChevronRight className="w-6 h-6" />
        </button>

        <div className="flex md:hidden items-center justify-center gap-8 mt-4">
          <button onClick={prev} className="p-3 rounded-full border border-border bg-background hover:bg-secondary shadow-sm">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button onClick={next} className="p-3 rounded-full border border-border bg-background hover:bg-secondary shadow-sm">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
