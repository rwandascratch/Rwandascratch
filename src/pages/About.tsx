import React from 'react';
import { Target, Eye, Heart, Users, Award, Quote, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import aboutBg from '@/assets/about-bg.jpg';

const values = [
  {
    icon: Target,
    title: 'Innovation',
    description: 'We create cutting-edge software and design solutions to address real-world challenges in Rwanda and beyond.',
  },
  {
    icon: Users,
    title: 'Community',
    description: 'Fostering collaboration and empowering Rwanda’s tech ecosystem through education and partnerships.',
  },
  {
    icon: Heart,
    title: 'Impact',
    description: 'Our work drives positive change by delivering accessible and impactful tech solutions.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'We deliver high-quality software, designs, and networking services with precision and care.',
  },
];

const aboutData = {
  story: `
    <strong>NeoScratch</strong> is a Rwanda-based <strong>software development and open-source technology company</strong> focused on building <strong>modern, scalable, and affordable digital solutions</strong> for businesses, startups, and institutions across Rwanda and Africa.
    <br/><br/>
    We design and develop <strong>inventory and stock management systems</strong>, business dashboards, custom web and mobile applications, and open-source tools that help organizations <strong>reduce operational errors, improve efficiency, gain real-time insights, and grow sustainably</strong>.
    <br/><br/>
    NeoScratch combines <strong>modern technologies</strong> with a deep understanding of local business needs, delivering practical systems that solve real-world challenges in African markets.
  `,
  mission: `
    To empower businesses in Rwanda and across Africa with <strong>reliable, affordable, and intelligent software solutions</strong> that drive productivity, transparency, and data-driven growth.
  `,
  vision: `
    To become a <strong>leading African software and open-source technology company</strong>, building world-class digital products from Rwanda for global impact.
  `,
};

// Updated testimonials with service type and project link
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
  },
  // {
  //   name: 'Jiridasee',
  //   role: 'Owner, Mixed Shop',
  //   serviceType: 'SmartStock Management System',
  //   link: '/projects/jiridasee-smartstock',
  //   content: 'SmartStock helps us manage different products and inventory seamlessly. It’s perfect for our mixed shop needs. Highly recommended!',
  //   avatar: 'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=400&h=400&fit=crop&crop=face',
  // },
];


export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="py-20 lg:py-32 relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(37, 99, 235, 0.9) 0%, rgba(29, 78, 216, 0.8) 50%, rgba(30, 41, 59, 0.9) 100%), url(${aboutBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
        data-aos="zoom-in"
        data-aos-duration="1200"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1
            className="text-4xl lg:text-6xl font-bold text-white mb-6"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            About NeoScratch
          </h1>
          <p
            className="text-xl text-white/90 max-w-3xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            We're a youth-led tech company transforming Rwanda and Africa through software development, graphic design, and networking solutions.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Our Story</h2>
              <div
                className="text-lg text-muted-foreground mb-8"
                dangerouslySetInnerHTML={{ __html: aboutData.story }}
              />
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">Get In Touch</Link>
              </Button>
            </div>
            <div className="animate-scale-in">
              <img
                src="/theodev.png"
                alt="Team collaboration"
                className="rounded-2xl shadow-2xl hover-lift"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-gradient-card p-8 rounded-2xl shadow-lg hover-lift animate-fade-in">
              <div className="flex items-center mb-6">
                <Target className="h-8 w-8 text-primary mr-3" />
                <h3 className="text-2xl font-bold">Our Mission</h3>
              </div>
              <div
                className="text-lg text-muted-foreground"
                dangerouslySetInnerHTML={{ __html: aboutData.mission }}
              />
            </div>
            <div className="bg-gradient-card p-8 rounded-2xl shadow-lg hover-lift animate-fade-in">
              <div className="flex items-center mb-6">
                <Eye className="h-8 w-8 text-primary mr-3" />
                <h3 className="text-2xl font-bold">Our Vision</h3>
              </div>
              <div
                className="text-lg text-muted-foreground"
                dangerouslySetInnerHTML={{ __html: aboutData.vision }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide everything we do at NeoScratch.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="text-center p-6 rounded-2xl bg-gradient-card hover-lift animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-gradient-primary p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section (replaced Team) */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real feedback from businesses we've helped grow through custom digital solutions.
            </p>
          </div>

          {/* Auto-scrolling carousel with pause on hover */}
          <div className="overflow-hidden">
            <div className="flex animate-scroll hover:pause-scroll gap-8">
              {/* Duplicated for seamless infinite scroll */}
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <div
                  key={index}
                  className="flex-none w-96 bg-gradient-card p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow"
                >
                  <Quote className="h-10 w-10 text-primary/20 mb-6" />
                  <p className="text-lg text-muted-foreground mb-8 italic">"{testimonial.content}"</p>

                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      <p className="text-sm text-primary font-medium">{testimonial.serviceType}</p>
                    </div>
                  </div>

                  {testimonial.link && (
                    <Button variant="link" className="p-0 h-auto" asChild>
                      <Link to={testimonial.link} className="flex items-center gap-2 text-primary">
                        View Project <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  )}
                </div>
              ))}
            </div>
          </div>

          <style >{`
            @keyframes scroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-scroll {
              display: flex;
              width: max-content;
              animation: scroll 40s linear infinite;
            }
            .hover\\:pause-scroll:hover {
              animation-play-state: paused;
            }
          `}</style>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Leadership</h2>
          </div>
          <div className="max-w-4xl mx-auto bg-gradient-card p-8 lg:p-12 rounded-2xl shadow-lg border border-primary/10">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="w-48 h-48 lg:w-64 lg:h-64 flex-shrink-0">
                <img
                  src="/theodev.png"
                  alt="Théogène Iradukunda"
                  className="w-full h-full rounded-2xl object-cover shadow-xl"
                />
              </div>
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold mb-2">Théogène Iradukunda</h3>
                <p className="text-primary font-semibold text-lg mb-6">Founder & CEO</p>
                <div className="text-lg text-muted-foreground space-y-4">
                  <p>
                    <strong>Théogène Iradukunda</strong> is the <strong>Founder and CEO of NeoScratch</strong>,
                    a software engineer and technology entrepreneur passionate about
                    <strong>open-source innovation and digital transformation in Africa</strong>.
                  </p>
                  <p>
                    He leads NeoScratch’s vision, product development, and technical strategy, with
                    hands-on experience in building <strong>inventory management systems, business analytics platforms,
                      and scalable digital tools</strong>. Under his leadership, NeoScratch has helped multiple
                    businesses improve <strong>stock control, operational efficiency, and financial visibility</strong>
                    through smart software solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Work With Us?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's build something amazing together
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/request-website">Start a Project</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/join-us">Join Our Team</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}