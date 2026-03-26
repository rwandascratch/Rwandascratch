import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from '@/data/projects';
import { Button } from '@/components/ui/button';

export function HomeProjects() {
  const recentProjects = projects.slice(0, 3);

  return (
    <section className="py-24 bg-background transition-colors duration-500 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block matches reference image */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8 relative z-10">
          <div className="max-w-2xl">
            <span className="inline-block px-5 py-2 rounded-full border border-border text-[11px] font-black uppercase tracking-[0.25em] mb-6 bg-secondary text-primary">
              Portfolio
            </span>
            <h2 className="text-4xl md:text-7xl font-bold text-foreground mb-6 tracking-tight leading-[0.9]">
              Our Latest Work
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">
              Our tailored solutions empower your online presence, ensuring growth and success in the digital landscape.
            </p>
          </div>
          <Button asChild className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-10 py-7 h-auto flex items-center gap-3 group transition-all duration-300 shadow-xl border border-border/10">
            <Link to="/projects">
              <span className="font-bold text-lg tracking-tight">See more</span> 
              <ArrowUpRight className="w-6 h-6 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </Button>
        </div>

        {/* Projects Grid with Integrated Notch Logic */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {recentProjects.map((project, idx) => (
            <Link key={project.title} to="/projects" className="group block relative">
              
              {/* THE IMAGE CONTAINER (The "Full" Card) */}
              <div 
                className="relative w-full aspect-[1/1] sm:aspect-[4/5] rounded-[60px] overflow-hidden bg-secondary shadow-lg transform transition-all duration-700 group-hover:shadow-2xl flex items-center justify-center border border-border/10"
                style={{
                   maskImage: 'radial-gradient(circle at bottom right, transparent 72px, black 73px)',
                   WebkitMaskImage: 'radial-gradient(circle at bottom right, transparent 72px, black 73px)'
                }}
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110" 
                />
                
                {/* Information Overlay */}
                <div className="absolute inset-x-10 bottom-28 z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                   <h3 className="text-3xl font-bold text-white mb-2 drop-shadow-lg leading-tight">{project.title}</h3>
                   <p className="text-white/70 text-[11px] font-black uppercase tracking-[0.3em]">{project.client}</p>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>
              
              {/* THE BUTTON POCKET (The "Full with Button" Integrated Corner) */}
              <div className="absolute bottom-0 right-0 w-24 h-24 z-30 flex items-center justify-center">
                
                {/* Inverse curves that blend into the card naturally to make it 100% "Full" appearance */}
                <div className="absolute top-[-23px] right-0 w-6 h-6 overflow-hidden">
                    <div className="absolute inset-0 bg-background" />
                    <div className="absolute inset-0 bg-secondary group-hover:bg-black/80 rounded-br-full transition-colors duration-700 border-r border-b border-border/5" />
                </div>
                <div className="absolute bottom-0 left-[-23px] w-6 h-6 overflow-hidden">
                    <div className="absolute inset-0 bg-background" />
                    <div className="absolute inset-0 bg-secondary group-hover:bg-black/80 rounded-br-full transition-colors duration-700 border-r border-b border-border/5" />
                </div>

                {/* The Circular Action Button */}
                <div className="w-20 h-20 bg-foreground text-background rounded-full flex items-center justify-center shadow-2xl transition-all duration-500 transform group-hover:scale-105 group-hover:bg-primary group-hover:text-white border-[10px] border-background relative z-10">
                  <ArrowUpRight className="w-8 h-8 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>

            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
