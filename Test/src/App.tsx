/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, 
  X, 
  Instagram, 
  Facebook, 
  Twitter, 
  MapPin, 
  Clock, 
  Phone, 
  Mail,
  BookOpen,
  Users,
  Calendar,
  ChevronRight,
  ArrowRight
} from 'lucide-react';
import { cn } from './lib/utils';

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Our Story', href: '#story' },
    { name: 'Collections', href: '#collections' },
    { name: 'Events', href: '#events' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
      scrolled ? "bg-eggshell/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img 
            src="/aksLogo.png" 
            alt="Akshara Books Logo" 
            className="h-[44px] w-auto object-contain"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-charcoal/80 hover:text-gold font-medium transition-colors text-sm uppercase tracking-widest"
            >
              {link.name}
            </a>
          ))}
          <button className="bg-gold hover:bg-gold-dark text-white px-6 py-2 rounded-sm transition-all text-sm font-semibold tracking-wide">
            VISIT US
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-charcoal p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-eggshell border-t border-charcoal/5 shadow-xl md:hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-charcoal text-lg font-serif border-b border-charcoal/5 pb-2"
                >
                  {link.name}
                </a>
              ))}
              <button className="bg-gold text-white py-3 rounded-sm font-semibold mt-2">
                VISIT US
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col md:flex-row pt-20 overflow-hidden">
      {/* Left Content */}
      <div className="flex-1 flex items-center px-6 md:px-12 lg:px-24 py-12 md:py-0 bg-eggshell">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-xl"
        >
          <span className="text-gold font-semibold tracking-[0.2em] uppercase text-xs mb-4 block">
            ESTABLISHED 1997
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-charcoal leading-[1.1] mb-8 text-balance">
            Where Stories Find Their <span className="italic text-gold">Readers</span>
          </h1>
          <p className="text-charcoal/70 text-lg md:text-xl mb-10 leading-relaxed font-sans max-w-md">
            A heritage sanctuary for bibliophiles in the heart of Hyderabad. Discover curated collections and timeless wisdom.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-charcoal text-eggshell px-8 py-4 rounded-sm flex items-center gap-2 hover:bg-charcoal/90 transition-all group">
              Explore Collections
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border border-charcoal/20 text-charcoal px-8 py-4 rounded-sm hover:border-gold hover:text-gold transition-all">
              Our Story
            </button>
          </div>
        </motion.div>
      </div>

      {/* Right Image */}
      <div className="flex-1 relative min-h-[400px] md:min-h-screen">
        <motion.div 
          initial={{ opacity: 0, scale: 1.1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80&w=2000" 
            alt="Cozy bookstore interior" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-charcoal/10" />
        </motion.div>
        
        {/* Decorative Element */}
        <div className="absolute bottom-0 left-0 bg-gold p-8 hidden lg:block">
          <p className="text-white font-serif italic text-xl max-w-[200px]">
            "A book is a gift you can open again and again."
          </p>
        </div>
      </div>
    </section>
  );
};

const Story = () => {
  return (
    <section id="story" className="py-24 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <img 
            src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80&w=1200" 
            alt="Vintage books" 
            className="rounded-sm shadow-2xl"
            referrerPolicy="no-referrer"
          />
          <div className="absolute -bottom-6 -right-6 bg-eggshell border border-gold/20 p-6 shadow-lg hidden sm:block">
            <p className="text-gold font-serif text-4xl font-bold">30+</p>
            <p className="text-charcoal/60 text-xs uppercase tracking-widest">Years of Passion</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-4xl md:text-5xl font-serif text-charcoal mb-6">Our Story</h2>
          <div className="w-20 h-1 bg-gold mb-8" />
          <p className="text-charcoal/80 text-lg leading-relaxed mb-6">
            Founded in 1997, Akshara Books began as a small dream in the vibrant neighborhood of Banjara Hills. Over the last three decades, we have grown into a landmark for literature in Hyderabad.
          </p>
          <p className="text-charcoal/80 text-lg leading-relaxed mb-8">
            Our mission has always been simple: to provide a sanctuary where stories find their readers. We believe that a bookstore is more than just a shop; it's a community hub, a place for intellectual exchange, and a quiet corner for reflection.
          </p>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="font-serif text-xl text-charcoal mb-2">Heritage</h4>
              <p className="text-charcoal/60 text-sm">Preserving the art of reading since the late 90s.</p>
            </div>
            <div>
              <h4 className="font-serif text-xl text-charcoal mb-2">Community</h4>
              <p className="text-charcoal/60 text-sm">A home for local authors and global thinkers.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Collections = () => {
  const categories = [
    {
      title: "Fiction",
      description: "From literary classics to contemporary masterpieces.",
      image: "https://images.unsplash.com/photo-1474932430478-367dbb6832c1?auto=format&fit=crop&q=80&w=800",
      icon: <BookOpen className="text-gold" size={24} />
    },
    {
      title: "Non-Fiction",
      description: "Biographies, history, and thought-provoking essays.",
      image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=800",
      icon: <Users className="text-gold" size={24} />
    },
    {
      title: "Children's",
      description: "Igniting imagination in the next generation of readers.",
      image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=800",
      icon: <Calendar className="text-gold" size={24} />
    },
    {
      title: "Telugu Literature",
      description: "A curated selection of regional heritage and modern prose.",
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=800",
      icon: <BookOpen className="text-gold" size={24} />
    }
  ];

  return (
    <section id="collections" className="py-24 px-6 md:px-12 lg:px-24 bg-eggshell">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-charcoal mb-4">Curated Collections</h2>
          <p className="text-charcoal/60 max-w-2xl mx-auto">Explore our diverse range of titles, hand-picked for the discerning reader.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-charcoal/5"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={cat.image} 
                  alt={cat.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6">
                <div className="mb-4">{cat.icon}</div>
                <h3 className="text-xl font-serif text-charcoal mb-2">{cat.title}</h3>
                <p className="text-charcoal/60 text-sm leading-relaxed mb-4">{cat.description}</p>
                <button className="text-gold font-semibold text-xs uppercase tracking-widest flex items-center gap-1 group-hover:gap-2 transition-all">
                  Browse <ChevronRight size={14} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Events = () => {
  return (
    <section id="events" className="py-24 px-6 md:px-12 lg:px-24 bg-charcoal text-eggshell overflow-hidden relative">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-gold font-semibold tracking-[0.2em] uppercase text-xs mb-4 block">
              LITERARY LEGACY
            </span>
            <h2 className="text-4xl md:text-5xl font-serif mb-8">Author Events</h2>
            <p className="text-eggshell/70 text-lg leading-relaxed mb-8">
              Akshara has been a proud host to some of the most iconic voices in literature. From intimate book signings to grand literary discussions, our events are a celebration of the written word.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center shrink-0">
                  <span className="text-gold font-serif text-xl">RB</span>
                </div>
                <div>
                  <h4 className="font-serif text-xl">Ruskin Bond</h4>
                  <p className="text-eggshell/50 text-sm italic">"A memorable evening of mountain stories and nostalgia."</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center shrink-0">
                  <span className="text-gold font-serif text-xl">ST</span>
                </div>
                <div>
                  <h4 className="font-serif text-xl">Shashi Tharoor</h4>
                  <p className="text-eggshell/50 text-sm italic">"Engaging discussions on history, politics, and prose."</p>
                </div>
              </div>
            </div>

            <button className="mt-12 bg-gold hover:bg-gold-dark text-white px-8 py-4 rounded-sm transition-all font-semibold">
              View Upcoming Events
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4">
              <img src="https://images.unsplash.com/photo-1513001900722-370f803f498d?auto=format&fit=crop&q=80&w=600" alt="Event 1" className="rounded-sm grayscale hover:grayscale-0 transition-all duration-500" referrerPolicy="no-referrer" />
              <img src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&q=80&w=600" alt="Event 2" className="rounded-sm grayscale hover:grayscale-0 transition-all duration-500" referrerPolicy="no-referrer" />
            </div>
            <div className="space-y-4 pt-8">
              <img src="https://images.unsplash.com/photo-1491843351663-7304c982d9d1?auto=format&fit=crop&q=80&w=600" alt="Event 3" className="rounded-sm grayscale hover:grayscale-0 transition-all duration-500" referrerPolicy="no-referrer" />
              <img src="https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&q=80&w=600" alt="Event 4" className="rounded-sm grayscale hover:grayscale-0 transition-all duration-500" referrerPolicy="no-referrer" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer id="contact" className="bg-charcoal text-eggshell pt-20 pb-10 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-6">
              <img 
                src="/logo.png" 
                alt="Akshara Books Logo" 
                className="h-[60px] w-auto object-contain rounded-sm p-1"
                referrerPolicy="no-referrer"
              />
            </div>
            <p className="text-eggshell/60 max-w-sm mb-8 leading-relaxed">
              A heritage independent bookstore in Hyderabad, dedicated to the love of reading and the power of stories since 1997.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-eggshell/10 flex items-center justify-center hover:bg-gold hover:border-gold transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-eggshell/10 flex items-center justify-center hover:bg-gold hover:border-gold transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-eggshell/10 flex items-center justify-center hover:bg-gold hover:border-gold transition-all">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-xl mb-6">Visit Us</h4>
            <ul className="space-y-4 text-eggshell/60">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-gold shrink-0 mt-1" />
                <span>Road No. 12, Banjara Hills,<br />Hyderabad, Telangana 500034</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock size={18} className="text-gold shrink-0" />
                <span>Mon - Sun: 10:30 AM - 8:30 PM</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-gold shrink-0" />
                <span>+91 40 2331 2578</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-gold shrink-0" />
                <span>hello@aksharabooks.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-xl mb-6">Quick Links</h4>
            <ul className="space-y-4 text-eggshell/60">
              <li><a href="#story" className="hover:text-gold transition-colors">Our Story</a></li>
              <li><a href="#collections" className="hover:text-gold transition-colors">Collections</a></li>
              <li><a href="#events" className="hover:text-gold transition-colors">Author Events</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Gift Vouchers</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Membership</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-eggshell/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-eggshell/40">
          <p>© {new Date().getFullYear()} Akshara Books. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-eggshell/60">Privacy Policy</a>
            <a href="#" className="hover:text-eggshell/60">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="relative">
      <Navbar />
      <main>
        <Hero />
        <Story />
        <Collections />
        <Events />
      </main>
      <Footer />
    </div>
  );
}
