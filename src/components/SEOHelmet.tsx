import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHelmetProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

export function SEOHelmet({ 
  title, 
  description, 
  keywords = "web development, mobile apps, programming courses, Rwanda, technology, software development",
  image = "/placeholder.svg",
  url = window.location.href,
  type = "website"
}: SEOHelmetProps) {
  const fullTitle = title.includes('NeoScratch') ? title : `${title} | NeoScratch`;
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="NeoScratch" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="NeoScratch" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

      {/* Additional SEO */}
      <meta name="language" content="English" />
      <meta name="geo.region" content="RW" />
      <meta name="geo.placename" content="Kigali, Rwanda" />
      <meta name="theme-color" content="#2563eb" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "NeoScratch",
          "url": "https://neoscratch.com",
          "logo": "https://neoscratch.com/logo.png",
          "description": "Professional web development, mobile apps, and programming courses in Rwanda",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "RW",
            "addressLocality": "Kigali"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+250-788-123-456",
            "contactType": "customer service"
          },
          "sameAs": [
            "https://www.facebook.com/neoscratch",
            "https://www.linkedin.com/company/neoscratch",
            "https://twitter.com/neoscratch"
          ]
        })}
      </script>
    </Helmet>
  );
}