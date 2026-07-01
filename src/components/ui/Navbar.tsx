"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, ChevronDown, Mountain, Compass, MapPin, Heart, MessageSquare, CheckCircle2, RefreshCw, Users, Wallet } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { name: "Home", href: "/", hasDropdown: false },
  {
    name: "Destinations",
    href: "#destinations",
    hasDropdown: true,
    dropdownItems: [
      { name: "Kumaon & Garhwal (Uttarakhand)", desc: "Nainital, Rishikesh, Mussoorie Valley stays", icon: MapPin },
      { name: "Kinnaur & Parvati (Himachal)", desc: "Kasol alpine forests & Manali heights", icon: Compass },
      { name: "High Passes & Glaciers", desc: "Auli ski routes & winter adventure lines", icon: Mountain },
    ]
  },
  {
    name: "Experiences",
    href: "#experiences",
    hasDropdown: true,
    dropdownItems: [
      { name: "Quiet Adventures", desc: "White-water rafting & high-altitude treks", icon: Mountain },
      { name: "Mindfulness & Silence", desc: "Riverside yoga & meditation retreats", icon: Heart },
    ]
  },
  { name: "Stays", href: "#stays", hasDropdown: false },
  { name: "About", href: "/about", hasDropdown: false },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<string | null>(null);
  
  // Modal Workflow State Locks
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    travellers: "2",
    budget: "luxury",
    message: ""
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen || isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen, isModalOpen]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const targetNumber = "918368834331";
    
    const textMessage = `*New Journey Application — TravNest*%0A%0A` +
      `*Name:* ${encodeURIComponent(formData.name)}%0A` +
      `*Phone:* ${encodeURIComponent(formData.phone)}%0A` +
      `*Email:* ${encodeURIComponent(formData.email)}%0A` +
      `*Travellers:* ${encodeURIComponent(formData.travellers)}%0A` +
      `*Budget:* ${encodeURIComponent(formData.budget)}%0A` +
      `*Message:* ${encodeURIComponent(formData.message)}`;

    const whatsappUrl = `https://api.whatsapp.com/send?phone=${targetNumber}&text=${textMessage}`;
    window.open(whatsappUrl, "_blank");
    setFormSubmitted(true);
  };

  return (
    <>
      {/* FIXED NAV ROW CONTAINER */}
      <header className="fixed left-0 right-0 top-3 md:top-4 z-50 w-full px-4 sm:px-6 md:px-8 pointer-events-none">
        <div
          className={cn(
            "mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 px-6 backdrop-blur-xl transition-all duration-500 pointer-events-auto",
            scrolled ? "bg-black/60 py-2.5 shadow-2xl" : "bg-black/20 py-4 shadow-sm"
          )}
        >
          {/* Logo tied strictly to base Home Page endpoint */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-white/5 shadow-inner transition-colors duration-300 group-hover:border-white/30">
              <img src="/logo.jpeg" alt="TravNest Logo" className="h-full w-full object-cover scale-105" />
            </div>
            <span className="font-display text-lg font-light tracking-widest text-white">
              TravNest
            </span>
          </Link>

          {/* Desktop Central Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {NAV_ITEMS.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={item.href}
                  className={cn(
                    "inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-medium tracking-wide text-white/70 transition-all duration-300 hover:text-white hover:bg-white/5",
                    activeDropdown === item.name && "text-white bg-white/5"
                  )}
                >
                  {item.name}
                  {item.hasDropdown && <ChevronDown className={cn("h-3 w-3 transition-transform opacity-60", activeDropdown === item.name && "rotate-180 opacity-100")} />}
                </a>

                {/* Dropdown Sheets */}
                <AnimatePresence>
                  {item.hasDropdown && activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 12, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.98 }}
                      transition={{ duration: 0.25 }}
                      className="absolute left-1/2 top-full mt-2 w-80 -translate-x-1/2 overflow-hidden rounded-2xl border border-white/10 bg-black/90 p-2 backdrop-blur-2xl shadow-2xl"
                    >
                      <div className="flex flex-col gap-0.5">
                        {item.dropdownItems?.map((subItem) => {
                          const Icon = subItem.icon;
                          return (
                            <a key={subItem.name} href="#destinations" onClick={() => setActiveDropdown(null)} className="flex items-start gap-3.5 rounded-xl p-3 text-left transition-all hover:bg-white/5 group/sub">
                              <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white/5 border border-white/10 text-white/70 group-hover/sub:text-white">
                                <Icon className="h-3.5 w-3.5" />
                              </div>
                              <div>
                                <h4 className="text-xs font-semibold text-white tracking-wide">{subItem.name}</h4>
                                <p className="mt-0.5 text-[11px] text-white/40 leading-relaxed">{subItem.desc}</p>
                              </div>
                            </a>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* Desktop Right Button Action: Opens WhatsApp Modal Framework */}
          <div className="hidden lg:block">
            <button
              onClick={() => setIsModalOpen(true)}
              className="group relative inline-flex items-center gap-1.5 overflow-hidden rounded-full bg-white px-5 py-2 text-[11px] font-medium uppercase tracking-wider text-black transition-transform duration-300 active:scale-95 cursor-pointer"
            >
              <span>Begin Journey</span>
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* Mobile Menu Icon Toggle */}
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white lg:hidden cursor-pointer">
            {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </header>

      {/* MOBILE FULL SCREEN SHEET INTERFACE OVERLAY */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-40 h-screen w-screen bg-black/95 backdrop-blur-2xl lg:hidden flex flex-col pt-28 px-6 pb-8 overflow-y-auto">
            <div className="flex flex-col gap-2">
              {NAV_ITEMS.map((item, index) => (
                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.05 }} key={item.name} className="border-b border-white/5 pb-2">
                  {item.hasDropdown ? (
                    <div>
                      <button onClick={() => setMobileDropdownOpen(mobileDropdownOpen === item.name ? null : item.name)} className="flex w-full items-center justify-between py-2 text-xl font-light tracking-wide text-white">
                        <span>{item.name}</span>
                        <ChevronDown className={cn("h-5 w-5 opacity-50 transition-transform", mobileDropdownOpen === item.name && "rotate-180")} />
                      </button>
                      <AnimatePresence>
                        {mobileDropdownOpen === item.name && (
                          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden pl-4 pr-2 flex flex-col gap-3 pt-2 pb-4">
                            {item.dropdownItems?.map((subItem) => (
                              <a key={subItem.name} href="#destinations" onClick={() => { setMobileMenuOpen(false); }} className="flex flex-col p-2 rounded-xl bg-white/5">
                                <span className="text-xs font-medium text-white/90">{subItem.name}</span>
                                <span className="text-[11px] text-white/40 mt-0.5">{subItem.desc}</span>
                              </a>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <a href={item.href} onClick={() => setMobileMenuOpen(false)} className="block py-2 text-xl font-light tracking-wide text-white">{item.name}</a>
                  )}
                </motion.div>
              ))}
            </div>

            <div className="mt-auto pt-8 flex flex-col items-center gap-6">
              <button onClick={() => { setMobileMenuOpen(false); setIsModalOpen(true); }} className="flex w-full items-center justify-between rounded-full bg-white px-6 py-4 text-xs font-semibold uppercase tracking-widest text-black cursor-pointer">
                <span>Begin Your Journey</span>
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CENTER POPUP DIALOG ROUTER TERMINAL */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/80 backdrop-blur-md" onClick={() => setIsModalOpen(false)} />
            
            <motion.div initial={{ opacity: 0, scale: 0.95, y: 15 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 15 }} className="relative w-full max-w-lg bg-zinc-950 border border-white/10 rounded-2xl p-6 shadow-2xl backdrop-blur-xl z-10">
              <div className="flex items-center justify-between border-b border-white/5 pb-4">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#00b4d8] font-bold">Terminal Connection</span>
                  <h3 className="font-display text-xl text-white mt-0.5">Begin Your Journey</h3>
                </div>
                <button onClick={() => setIsModalOpen(false)} className="h-8 w-8 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-white cursor-pointer"><X className="h-4 w-4" /></button>
              </div>

              <div className="mt-6">
                <AnimatePresence mode="wait">
                  {!formSubmitted ? (
                    <motion.form key="inputs" onSubmit={handleWhatsAppSubmit} className="space-y-4">
                      <div>
                        <label className="block text-[10px] uppercase tracking-wider text-white/40 mb-1">Your Name</label>
                        <input required type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Rahul Chaudhary" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white focus:border-[#00b4d8] focus:outline-none" />
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[10px] uppercase tracking-wider text-white/40 mb-1">Phone Number</label>
                          <input required type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="+91 83688 xxxxx" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white focus:border-[#00b4d8] focus:outline-none" />
                        </div>
                        <div>
                          <label className="block text-[10px] uppercase tracking-wider text-white/40 mb-1">Email Address</label>
                          <input required type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="rahul@domain.com" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white focus:border-[#00b4d8] focus:outline-none" />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[10px] uppercase tracking-wider text-white/40 mb-1 flex items-center gap-1"><Users className="h-3 w-3" /> Group Size</label>
                          <input required type="number" name="travellers" min="1" value={formData.travellers} onChange={handleInputChange} className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white focus:border-[#00b4d8] focus:outline-none" />
                        </div>
                        <div>
                          <label className="block text-[10px] uppercase tracking-wider text-white/40 mb-1 flex items-center gap-1"><Wallet className="h-3 w-3" /> Budget</label>
                          <select name="budget" value={formData.budget} onChange={handleInputChange} className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white focus:border-[#00b4d8] focus:outline-none appearance-none">
                            <option className="bg-zinc-950 text-white" value="luxury">Luxury Standard</option>
                            <option className="bg-zinc-950 text-white" value="elite">Elite Bespoke</option>
                          </select>
                        </div>
                      </div>
                      <div>
                        <label className="block text-[10px] uppercase tracking-wider text-white/40 mb-1">Destinations Preference & Message</label>
                        <textarea name="message" rows={2} value={formData.message} onChange={handleInputChange} placeholder="Mention preferred valleys (Auli, Kasol, Lansdowne) or structural timelines..." className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white focus:border-[#00b4d8] focus:outline-none resize-none" />
                      </div>
                      <button type="submit" className="w-full rounded-full bg-white py-3 text-xs font-semibold uppercase tracking-widest text-black hover:bg-zinc-200 transition-colors cursor-pointer mt-2">Open Operator Line</button>
                    </motion.form>
                  ) : (
                    <motion.div key="success" className="flex flex-col items-center text-center py-6">
                      <CheckCircle2 className="h-12 w-12 text-[#00b4d8] animate-pulse" />
                      <h4 className="font-display text-xl text-white mt-4">Redirection Staged</h4>
                      <p className="text-xs text-white/60 max-w-xs mt-2 leading-relaxed">Inquiry packaged into system strings and pushed down to your device browser window context.</p>
                      <div className="mt-6 flex items-center gap-3 w-full max-w-xs">
                        <button type="button" onClick={() => { setFormSubmitted(false); setIsModalOpen(false); }} className="w-full rounded-full bg-white py-3 text-xs font-semibold uppercase tracking-widest text-black cursor-pointer">Exit Terminal</button>
                        <button type="button" onClick={() => { setFormSubmitted(false); setFormData({ name: "", phone: "", email: "", travellers: "2", budget: "luxury", message: "" }); }} className="w-full inline-flex items-center justify-center gap-1 rounded-full border border-white/10 bg-white/5 py-3 text-xs font-semibold uppercase tracking-widest text-white cursor-pointer"><RefreshCw className="h-3 w-3" /> Refill</button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}