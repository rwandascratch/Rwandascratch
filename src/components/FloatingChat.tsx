import React, { useState } from 'react';
import { MessageCircle, Twitter, Instagram, Linkedin, Github, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence, Variants } from 'framer-motion';

const socialLinks = [
  { name: 'WhatsApp', href: 'https://wa.me/250792734752', icon: MessageCircle, color: 'text-green-500', bg: 'bg-white hover:bg-green-50' },
  { name: 'Twitter', href: 'https://www.x.com/theo_dev_rw', icon: Twitter, color: 'text-blue-400', bg: 'bg-white hover:bg-blue-50' },
  { name: 'Instagram', href: 'https://www.instagram.com/neoscratch/', icon: Instagram, color: 'text-pink-500', bg: 'bg-white hover:bg-pink-50' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/theogene-iradukunda-88b07a381/', icon: Linkedin, color: 'text-blue-700', bg: 'bg-white hover:bg-blue-50' },
  { name: 'GitHub', href: 'https://github.com/theodevrwanda', icon: Github, color: 'text-gray-800 dark:text-gray-200', bg: 'bg-white hover:bg-gray-50' },
];

export function FloatingChat() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  // Animation variants for the container (staggering children)
  const containerVariants: Variants = {
    hidden: {
      opacity: 0,
      transition: { staggerChildren: 0.05, staggerDirection: -1 }
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  // Animation for individual icons
  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      scale: 0,
      x: 0,
      y: 0
    },
    visible: (i: number) => {
      // Calculate radial position
      const radius = 90;
      const totalAngle = 100; // range of arc
      const startAngle = 180; // Start from left
      // We want range from roughly 180 (left) to 270 (top), or slightly wider
      // Let's go from 190 to 260
      const angleStep = totalAngle / (socialLinks.length - 1); // Spread over 90 deg
      const angle = (270 - (i * angleStep)) * (Math.PI / 180); // Convert to radians

      const tx = Math.cos(angle) * radius;
      const ty = Math.sin(angle) * radius;

      return {
        opacity: 1,
        scale: 1,
        x: tx,
        y: ty,
        transition: {
          type: "spring",
          stiffness: 300,
          damping: 20
        }
      };
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center justify-center pointer-events-none">
      {/* 3D Perspective Container */}
      <div className="relative w-14 h-14 pointer-events-auto perspective-1000">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="absolute inset-0 flex items-center justify-center"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  custom={index}
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.2,
                    zIndex: 100,
                    rotate: [0, -10, 10, 0],
                    transition: { duration: 0.3 }
                  }}
                  whileTap={{ scale: 0.9 }}
                  className={cn(
                    "absolute flex items-center justify-center w-12 h-12 rounded-full shadow-lg border border-border/20",
                    social.bg
                  )}
                  style={{
                    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)'
                  }}
                  title={social.name}
                >
                  <social.icon className={cn("h-6 w-6", social.color)} />
                </motion.a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Floating Button */}
        <motion.button
          onClick={toggleOpen}
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          animate={{
            rotate: isOpen ? 45 : 0,
            backgroundColor: isOpen ? "hsl(var(--destructive))" : "hsl(var(--primary))"
          }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
          className={cn(
            "relative flex items-center justify-center w-14 h-14 rounded-full shadow-xl z-50 text-white"
          )}
        >
          <motion.div
            initial={false}
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
          </motion.div>
        </motion.button>
      </div>
    </div>
  );
}