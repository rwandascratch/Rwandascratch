import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Code, Smartphone, Users, Lightbulb, ArrowRight, Star, Globe, Heart, Palette, Network, Database, Cloud, Megaphone, Monitor, ChevronLeft, ChevronRight } from 'lucide-react';
import { useCountUpAnimation } from '@/hooks/useCountUpAnimation';
import heroBackground from '@/assets/hero-bg.jpg';

const testimonials = [
  {
    name: 'Mr. Faustina',
    role: 'Owner, Private Business',
    serviceType: 'Business Management System',
    link: 'https://pixelmartrw.pages.dev',
    content: 'NeoScratch developed a comprehensive management system for my business. Managing products, branches, and employees has never been easier!',
    avatar: '/faustin.jpg',
  },
  {
    name: 'Open Future',
    role: 'Savings Group for Students, Apeki Tumba TSS',
    serviceType: 'Record Management System',
    link: 'https://openfuture.pages.dev',
    content: 'The digital savings management platform has transformed how we track monthly savings and manage our members. Simple and effective!',
    avatar: '/openfuture.png',
  },
  {
    name: 'Niyonsenga DieuMerci',
    role: 'Web Designer & Software Developer',
    serviceType: 'Personal Portfolio Website',
    link: 'https://dieumerci.pages.dev',
    content: 'NeoScratch built a professional portfolio that perfectly showcases my skills and experience. The design is clean and fully functional.',
    avatar: '/kate.jpeg',
  }
];

const Index = () => {
  // Counter animations for stats
  const projectsCount = useCountUpAnimation({ end: 6, suffix: '+' });
  const studentsCount = useCountUpAnimation({ end: 32, suffix: '+' });
  const clientsCount = useCountUpAnimation({ end: 20, suffix: '+' });
  const experienceCount = useCountUpAnimation({ end: 3, suffix: '+' });

  const [activeIndex, setActiveIndex] = useState(1);
  const next = () => setActiveIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <div className="min-h-screen">

      
    {/* Hero Section */}
    <section className="py-24 lg:py-36 relative overflow-hidden bg-background">
      <div className="absolute inset-0 hero-bg pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-foreground mb-6 animate-fade-in">
          Take Your Business <span className="block text-gradient">Digital & Beyond</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 animate-slide-up leading-relaxed">
          Welcome to NeoScratch — your partner in transforming ideas into smart, scalable, and cutting-edge tech solutions. From innovative software to professional design and digital marketing, we help businesses thrive.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <Button size="xl" className="bg-primary text-primary-foreground hover:bg-primary-dark rounded-full px-8 shadow-sm hover:shadow-md transition-all" asChild>
            <Link to="/request-website">
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button variant="outline" size="xl" className="rounded-full px-8 border-border hover:bg-secondary transition-all" asChild>
            <Link to="/about">Learn More</Link>
          </Button>
        </div>
      </div>
    </section>


      {/* Features Section */}
      <section className="py-20" data-aos="fade-up" data-aos-duration="1000">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 
              className="text-3xl lg:text-4xl font-bold mb-4"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              What We Do
            </h2>
            <p 
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Comprehensive tech solutions to drive digital transformation in Rwanda and beyond.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              { icon: Globe, title: 'Web Development', desc: 'Build modern, responsive websites and web apps.' },
              { icon: Smartphone, title: 'Mobile Apps', desc: 'Create cross-platform mobile solutions ' },
              { icon: Code, title: 'Programming Education', desc: 'Teach coding through hands-on bootcamps.' },
              { icon: Palette, title: 'Graphic Design', desc: 'Design stunning UI/UX and branding assets.' },
              { icon: Network, title: 'Networking Solutions', desc: 'Implement secure, scalable network systems.' },
              { icon: Database, title: 'Software Installations', desc: 'Deploy and configure software for businesses.' },
              { icon: Lightbulb, title: 'Tech Consulting', desc: 'Provide strategic guidance for tech projects.' },
              { icon: Cloud, title: 'Cloud Integration', desc: 'Integrate cloud solutions for efficiency.' },
              { icon: Megaphone, title: 'Digital Marketing', desc: 'Boost online presence with SEO and campaigns.' },
              { icon: Monitor, title: 'Computer Skills Training', desc: 'Teach essential digital literacy skills.' },
            ].map((service, index) => (
              <div
                key={service.title}
                className="text-center p-6 rounded-2xl bg-gradient-card hover-lift"
                data-aos="flip-left"
                data-aos-delay={index * 100}
                data-aos-duration="800"
              >
                <div className="bg-gradient-primary p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-muted-foreground">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-secondary/30" data-aos="fade-up" data-aos-duration="1000">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div 
              ref={projectsCount.elementRef}
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <div className="text-4xl font-bold text-primary mb-2">{projectsCount.count}</div>
              <p className="text-muted-foreground">Projects Completed</p>
            </div>
            <div 
              ref={studentsCount.elementRef}
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <div className="text-4xl font-bold text-primary mb-2">{studentsCount.count}</div>
              <p className="text-muted-foreground">Students Trained</p>
            </div>
            <div 
              ref={clientsCount.elementRef}
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <div className="text-4xl font-bold text-primary mb-2">{clientsCount.count}</div>
              <p className="text-muted-foreground">Happy Clients</p>
            </div>
            <div 
              ref={experienceCount.elementRef}
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              <div className="text-4xl font-bold text-primary mb-2">{experienceCount.count}</div>
              <p className="text-muted-foreground">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Wavy Section */}
      <section className="py-24 bg-background border-t border-border/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full flex flex-col justify-center gap-12 lg:gap-20">
          <div className="text-center animate-fade-in">
            <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold tracking-tight mb-4">What Our Customers Say</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Real stories from real people! See how our services have transformed their experiences.
            </p>
          </div>

          <div className="relative h-64 sm:h-80 flex items-center justify-center w-full animate-slide-up" style={{ animationDelay: '0.1s' }}>
            {/* Base Wavy Path */}
            <svg className="absolute w-full h-full opacity-10 pointer-events-none stroke-foreground" preserveAspectRatio="none" viewBox="0 0 1000 200">
              <path d="M-50,100 C150,200 250,0 500,100 C750,200 850,0 1050,100" fill="none" strokeWidth="2" strokeDasharray="6 6" />
            </svg>

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
      </section>

      {/* CTA Section */}
      <section 
        className="py-24 relative overflow-hidden bg-background"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 
            className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight mb-6"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Ready to Start Your Project?
          </h2>
          <p 
            className="text-xl text-muted-foreground mb-8"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Contact us at neoscratch@gmail.com or +250 792 734 752 to bring your tech vision to life with NeoScratch’s expanded services.
          </p>
          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <Button variant="outline" size="lg" className="bg-white text-primary hover:bg-white/90" asChild>
              <Link to="/request-website">Get Started</Link>
            </Button>
            <Button variant="glass" size="lg" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;