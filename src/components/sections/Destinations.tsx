"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Maximize2, ArrowUpRight, CheckCircle2, Users, Wallet, RefreshCw } from "lucide-react";

const VALLEYS = [
  { id: "nainital", name: "Nainital", meta: "Kumaon Valley · Lake Country", image: "/dest-nainital.jpg" },
  { id: "auli", name: "Auli", meta: "2,800 m · Peak Snow Lines", image: "/dest-auli.jpg" },
  { id: "mussoorie", name: "Mussoorie", meta: "1,880 m · Sunset Ridges", image: "/dest-mussoorie.jpg" },
  { id: "rishikesh", name: "Rishikesh", meta: "372 m · Sacred River Stays", image: "/dest-rishikesh.jpg" },
  { id: "kasol", name: "Kasol", meta: "1,640 m · Pine Forest Trails", image: "/dest-kasol.jpg" },
  { id: "manali", name: "Manali", meta: "2,050 m · Alpine Valley Heights", image: "/dest-manali.jpg" }
];

export function Destinations() {
  const [activeMedia, setActiveMedia] = useState<string | null>(null);
  const [bookingDestination, setBookingDestination] = useState<string | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Core Form State Configuration Mapping
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    travellers: "2",
    budget: "luxury",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const targetNumber = "918368834331";
    
    // Construct polished editorial string layout for the WhatsApp payload text channel
    const textMessage = `*New Journey Reservation — TravNest*%0A%0A` +
      `*Destination:* ${encodeURIComponent(bookingDestination || "General Inquiry")}%0A` +
      `*Name:* ${encodeURIComponent(formData.name)}%0A` +
      `*Phone:* ${encodeURIComponent(formData.phone)}%0A` +
      `*Email:* ${encodeURIComponent(formData.email)}%0A` +
      `*Travellers:* ${encodeURIComponent(formData.travellers)}%0A` +
      `*Budget Tiers:* ${encodeURIComponent(formData.budget)}%0A` +
      `*Message:* ${encodeURIComponent(formData.message)}`;

    const whatsappUrl = `https://api.whatsapp.com/send?phone=${targetNumber}&text=${textMessage}`;
    
    // Open dynamic secure WhatsApp chat link hook
    window.open(whatsappUrl, "_blank");
    setFormSubmitted(true);
  };

  const handleRefillForm = () => {
    // Reset state inputs while keeping modal focus mounted
    setFormData({
      name: "",
      phone: "",
      email: "",
      travellers: "2",
      budget: "luxury",
      message: ""
    });
    setFormSubmitted(false);
  };

  const handleCloseModal = () => {
    setFormSubmitted(false);
    setBookingDestination(null);
  };

  return (
    <section id="destinations" className="relative bg-background py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        
        {/* Editorial Layout Header */}
        <div className="max-w-xl mb-16">
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#00b4d8] font-semibold">
            Destinations 
          </p>
          <h2 className="font-display text-3xl font-light text-white mt-3 sm:text-4xl md:text-5xl">
            Six valleys, one season. 
          </h2>
          <p className="mt-4 text-xs leading-relaxed text-white/50 sm:text-sm">
            Curated for slowness. Each destination is a small collection of stays, walks and rituals—designed to be read like a chapter. 
          </p>
        </div>

        {/* Premium Symmetrical Responsive Grid System */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {VALLEYS.map((valley, index) => (
            <motion.div
              key={valley.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="group relative h-[380px] sm:h-[420px] w-full overflow-hidden rounded-2xl border border-white/5 bg-white/5 shadow-2xl"
            >
              {/* Asset Image Layer */}
              <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10 transition-opacity duration-300 group-hover:opacity-80" />
                <img
                  src={valley.image}
                  alt={valley.name}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>

              {/* Action Trigger Taps Top Right Grid */}
              <div className="absolute top-4 right-4 z-20 flex gap-2">
                <button
                  onClick={() => setActiveMedia(valley.image)}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-black/40 text-white backdrop-blur-md transition-all hover:bg-white hover:text-black cursor-pointer"
                  title="Expand Immersive View"
                >
                  <Maximize2 className="h-4 w-4" />
                </button>
              </div>

              {/* Card Meta Text Layout Bottom Frame */}
              <div className="absolute bottom-0 left-0 right-0 z-20 p-6 flex flex-col justify-end">
                <p className="text-[10px] uppercase tracking-widest text-[#00b4d8] font-semibold">
                  {valley.meta}
                </p>
                <h3 className="font-display text-2xl font-light text-white mt-1">
                  {valley.name}
                </h3>

                <button
                  onClick={() => setBookingDestination(valley.name)}
                  className="mt-4 inline-flex items-center justify-between w-full rounded-full border border-white/10 bg-white/5 px-5 py-3 text-xs font-medium tracking-wide text-white transition-all duration-300 hover:bg-white hover:text-black hover:border-white cursor-pointer group-hover:border-[#00b4d8]/40"
                >
                  <span>Book Destination</span>
                  <ArrowUpRight className="h-4 w-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* LIGHTBOX DRAWER LAYER: Immersive Fullscreen Image Expand Modal */}
      <AnimatePresence>
        {activeMedia && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-xl"
            onClick={() => setActiveMedia(null)}
          >
            <button className="absolute top-6 right-6 text-white/70 hover:text-white cursor-pointer">
              <X className="h-6 w-6" />
            </button>
            <motion.img
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              src={activeMedia}
              className="max-h-[85vh] max-w-full rounded-xl object-contain shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* CENTER BOOKING DIALOG CONTAINER MATRIX */}
      <AnimatePresence>
        {bookingDestination && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            
            {/* Dark Mask Lock Backdrop Layer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
              onClick={handleCloseModal}
            />

            {/* Symmetrical Screen Center Modular Dialog Sheet */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5, bounce: 0.15 }}
              className="relative w-full max-w-lg bg-zinc-950 border border-white/10 rounded-2xl p-6 shadow-2xl backdrop-blur-xl max-h-[90vh] flex flex-col justify-between overflow-y-auto z-10"
            >
              {/* Modal Top Header Bar */}
              <div className="flex items-center justify-between border-b border-white/5 pb-4">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#00b4d8] font-semibold">Reserve Space</span>
                  <h3 className="font-display text-xl text-white mt-0.5">{bookingDestination} Valley Application</h3>
                </div>
                <button
                  onClick={handleCloseModal}
                  className="h-8 w-8 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* Functional Workflow Matrix Branching */}
              <div className="mt-6 my-auto">
                <AnimatePresence mode="wait">
                  {!formSubmitted ? (
                    <motion.form 
                      key="active-inputs"
                      onSubmit={handleWhatsAppSubmit} 
                      className="space-y-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <div>
                        <label className="block text-[10px] uppercase tracking-wider text-white/40 mb-1.5">Full Name</label>
                        <input required type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Rahul Chaudhary" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white focus:border-[#00b4d8] focus:outline-none transition-colors" />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[10px] uppercase tracking-wider text-white/40 mb-1.5">Phone Number</label>
                          <input required type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="+91 83688 xxxxx" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white focus:border-[#00b4d8] focus:outline-none transition-colors" />
                        </div>
                        <div>
                          <label className="block text-[10px] uppercase tracking-wider text-white/40 mb-1.5">Email Address</label>
                          <input required type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="rahul@domain.com" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white focus:border-[#00b4d8] focus:outline-none transition-colors" />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[10px] uppercase tracking-wider text-white/40 mb-1.5 flex items-center gap-1.5"><Users className="h-3 w-3" /> Travellers</label>
                          <input required type="number" name="travellers" min="1" value={formData.travellers} onChange={handleInputChange} placeholder="2" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white focus:border-[#00b4d8] focus:outline-none transition-colors" />
                        </div>
                        <div>
                          <label className="block text-[10px] uppercase tracking-wider text-white/40 mb-1.5 flex items-center gap-1.5"><Wallet className="h-3 w-3" /> Budget (INR)</label>
                          <select name="budget" value={formData.budget} onChange={handleInputChange} className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white focus:border-[#00b4d8] focus:outline-none transition-colors appearance-none">
                            <option className="bg-zinc-950 text-white" value="mid">15k - 30k</option>
                            <option className="bg-zinc-950 text-white" value="luxury">30k - 50k</option>
                            <option className="bg-zinc-950 text-white" value="elite">Elite Curated (50k+)</option>
                            <option className="bg-zinc-950 text-white" value="elite">Custom (Min - 10k)</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-[10px] uppercase tracking-wider text-white/40 mb-1.5">Custom Message / Pace Preference</label>
                        <textarea name="message" rows={2} value={formData.message} onChange={handleInputChange} placeholder="Tell us about the pace and rhythm you want..." className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white focus:border-[#00b4d8] focus:outline-none transition-colors resize-none" />
                      </div>

                      <button type="submit" className="w-full rounded-full bg-white py-3.5 text-xs font-semibold uppercase tracking-widest text-black transition-transform duration-300 hover:bg-zinc-200 active:scale-98 mt-2 cursor-pointer">
                        Connect to WhatsApp Operator
                      </button>
                    </motion.form>
                  ) : (
                    <motion.div
                      key="success-screen"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="flex flex-col items-center text-center py-6"
                    >
                      <CheckCircle2 className="h-12 w-12 text-[#00b4d8] animate-pulse" />
                      <h4 className="font-display text-xl text-white mt-4">Redirection Staged</h4>
                      <p className="text-xs text-white/60 max-w-xs mt-2 leading-relaxed">
                        Your custom profile variables are compiled into secure secure text logs and pushed down to your active browser window tab.
                      </p>
                      
                      {/* Sub-Action Navigation Choice Container */}
                      <div className="mt-8 flex flex-col sm:flex-row items-center gap-3 w-full max-w-xs">
                        <button
                          type="button"
                          onClick={handleCloseModal}
                          className="w-full rounded-full bg-white py-3 text-xs font-semibold uppercase tracking-widest text-black transition-all hover:bg-zinc-200 active:scale-95 cursor-pointer"
                        >
                          Exit Window
                        </button>
                        <button
                          type="button"
                          onClick={handleRefillForm}
                          className="w-full inline-flex items-center justify-center gap-1.5 rounded-full border border-white/10 bg-white/5 py-3 text-xs font-semibold uppercase tracking-widest text-white transition-all hover:bg-white/10 active:scale-95 cursor-pointer"
                        >
                          <RefreshCw className="h-3 w-3" />
                          <span>Refill Details</span>
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Modal Operational Footer Note */}
              <div className="border-t border-white/5 pt-4 mt-6 text-[9px] uppercase tracking-[0.25em] text-white/30 text-center">
                TravNest · Secure Routing Terminal Matrix
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}