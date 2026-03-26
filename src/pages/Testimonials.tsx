import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Jean Claude Niyonzima',
    role: 'CEO, TechStart Rwanda',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
    text: 'NeoScratch delivered an exceptional e-commerce platform that transformed our business. Their expertise and dedication are unmatched.',
    rating: 5,
  },
  {
    name: 'Marie Uwimana',
    role: 'Founder, EduConnect',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
    text: 'The mobile app they built for us has revolutionized how we connect students with educational resources. Highly recommended!',
    rating: 5,
  },
  {
    name: 'Patrick Habimana',
    role: 'Director, Innovation Hub',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
    text: 'Their programming training program has empowered countless young Rwandans with valuable tech skills.',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <div className="min-h-screen">
      <section className="hero-bg py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">Testimonials</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto animate-slide-up">
            Hear what our clients and partners say about working with NeoScratch.
          </p>
        </div>
      </section>
      
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.name} className="bg-gradient-card p-6 rounded-2xl shadow-lg hover-lift animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <Quote className="h-8 w-8 text-primary mb-4" />
                <p className="text-muted-foreground mb-6">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mt-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}