"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { SendHorizontal, MessageSquare, MapPin, Mail, Phone } from "lucide-react";

// Native TypeScript Particle Generator for the full-screen light canvas base
function generateSphericalPoints(count: number, radius: number): Float32Array {
  const points = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const u = Math.random();
    const v = Math.random();
    const theta = u * 2.0 * Math.PI;
    const phi = Math.acos(2.0 * v - 1.0);
    const r = radius * Math.cbrt(Math.random());

    points[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    points[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    points[i * 3 + 2] = r * Math.cos(phi);
  }
  return points;
}

function LightParticleField() {
  const ref = useRef<any>(null);
  const [sphere] = useState(() => generateSphericalPoints(600, 1.4));

  useFrame((_state, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta * 0.015;
      ref.current.rotation.y += delta * 0.025;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#0b2545" // Luxury deep brand blue particles
          size={0.006}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.15}
        />
      </Points>
    </group>
  );
}

export default function ContactFlatPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });
  const [isRedirecting, setIsRedirecting] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsRedirecting(true);

    const targetNumber = "918368834331"; 
    
    const textMessage = `*New Journey Inquiry — TravNest*%0A%0A` +
      `*Name:* ${encodeURIComponent(formData.name)}%0A` +
      `*Phone:* ${encodeURIComponent(formData.phone)}%0A` +
      `*Email:* ${encodeURIComponent(formData.email)}%0A` +
      `*Message:* ${encodeURIComponent(formData.message)}`;

    const whatsappUrl = `https://api.whatsapp.com/send?phone=${targetNumber}&text=${textMessage}`;

    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
      setIsRedirecting(false);
      setFormData({ name: "", phone: "", email: "", message: "" });
    }, 600);
  };

  return (
    <section id = "contact" className="relative w-full min-h-screen bg-[#fdfcfb] text-zinc-900 py-24 px-4 sm:px-6 lg:px-8 overflow-hidden flex items-center select-none z-10">
      
      {/* LAYER 1: Full-Bleed Three.js Interactive Environment */}
      {mounted && (
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Canvas camera={{ position: [0, 0, 1] }}>
            <LightParticleField />
          </Canvas>
        </div>
      )}

      {/* LAYER 2: Flat Layout Grid resting directly on the canvas background */}
      <div className="relative z-10 w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* LEFT ASPECT: Editorial Content Hierarchy (5 columns) */}
        <div className="lg:col-span-5 space-y-12">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="relative flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full border border-zinc-200 bg-white">
                <img 
                  src="/logo.jpeg" 
                  alt="TravNest Logo" 
                  className="h-full w-full object-cover"
                />
              </div>
              <span className="font-display text-lg font-light tracking-widest text-zinc-950">
                TravNest
              </span>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-display text-3xl font-light text-zinc-950 tracking-tight leading-[1.15] sm:text-4xl">
                Designed slowly, for travellers <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0b2545] to-[#00b4d8] font-normal italic">who notice.</span>
              </h3>
              <p className="text-xs sm:text-sm leading-relaxed text-zinc-600/90 max-w-md">
                TravNest is a premium Himalayan hospitality collection engineered for slowness. We curate deeply intentional journeys, luxury stays, and carbon-positive routes across Uttarakhand and Himachal Pradesh.
              </p>
            </div>
          </div>

          {/* Clean minimal metadata markers */}
          <div className="space-y-4 text-xs tracking-wide text-zinc-500 font-medium max-w-xs">
            <div className="flex items-center gap-3">
              <MapPin className="h-4 w-4 text-[#00b4d8] shrink-0" />
              <span>Basecamp: Dehradun & Manali Hubs, India</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-[#00b4d8] shrink-0" />
              <span>concierge@travnest.com</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-[#00b4d8] shrink-0" />
              <span>+91 83688 34331</span>
            </div>
          </div>
        </div>

        {/* RIGHT ASPECT: Integrated WhatsApp Communication Form (7 columns) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="mb-4">
            <span className="text-[9px] uppercase tracking-widest text-[#00b4d8] font-bold flex items-center gap-1.5">
              <MessageSquare className="h-3 w-3 animate-pulse" /> Direct Operator Line
            </span>
            <h4 className="font-display text-xl font-light text-zinc-950 mt-1">Start a conversation.</h4>
          </div>

          <form onSubmit={handleWhatsAppSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-[10px] uppercase tracking-wider text-zinc-500 font-semibold mb-1.5">Your Name</label>
                <input required type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Rahul Chaudhary" className="w-full border-b border-zinc-300 bg-transparent px-1 py-2.5 text-sm text-zinc-900 focus:border-[#00b4d8] focus:outline-none transition-colors" />
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-wider text-zinc-500 font-semibold mb-1.5">Phone Contact</label>
                <input required type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="+91 98765 xxxxx" className="w-full border-b border-zinc-300 bg-transparent px-1 py-2.5 text-sm text-zinc-900 focus:border-[#00b4d8] focus:outline-none transition-colors" />
              </div>
            </div>

            <div>
              <label className="block text-[10px] uppercase tracking-wider text-zinc-500 font-semibold mb-1.5">Email Address</label>
              <input required type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="rahul@gmail.com" className="w-full border-b border-zinc-300 bg-transparent px-1 py-2.5 text-sm text-zinc-900 focus:border-[#00b4d8] focus:outline-none transition-colors" />
            </div>

            <div>
              <label className="block text-[10px] uppercase tracking-wider text-zinc-500 font-semibold mb-1.5">Journey Scope / Message</label>
              <textarea required rows={4} name="message" value={formData.message} onChange={handleInputChange} placeholder="Describe your preferred travel dates, pace, or specific valley requests..." className="w-full border-b border-zinc-300 bg-transparent px-1 py-2.5 text-sm text-zinc-900 focus:border-[#00b4d8] focus:outline-none transition-colors resize-none" />
            </div>

            <button type="submit" disabled={isRedirecting} className="w-full group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-[#0b2545] py-4 text-xs font-semibold uppercase tracking-widest text-white transition-all duration-300 hover:bg-[#134074] active:scale-98 disabled:opacity-50 cursor-pointer mt-4">
              <AnimatePresence mode="wait">
                {!isRedirecting ? (
                  <motion.div key="text" className="flex items-center gap-2">
                    <span>Submit on WhatsApp</span>
                    <SendHorizontal className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </motion.div>
                ) : (
                  <motion.span key="loader" className="animate-pulse text-zinc-300">
                    Opening Chat ...
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}