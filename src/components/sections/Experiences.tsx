"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { Mountain, Compass, Waves, Snowflake, Eye } from "lucide-react";

// Native TypeScript Particle Generator replacing the 'maath' package completely
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

function FluidParticleField() {
  const ref = useRef<any>(null);
  // Safe matrix generation populated natively under TypeScript typing constraints
  const [sphere] = useState(() => generateSphericalPoints(1000, 1.2));

  useFrame((_state: any, delta: number) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 14;
      ref.current.rotation.y -= delta / 20;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#0b2545"
          size={0.006}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.4}
        />
      </Points>
    </group>
  );
}

const EXPERIENCES = [
  { id: 1, name: "Luxury Camping", desc: "Dome suites under the wild sky.", icon: Compass }, 
  { id: 2, name: "River Rafting", desc: "White-water runs on the Ganges.", icon: Waves }, 
  { id: 3, name: "Helicopter Tours", desc: "Dawns above high valley lines.", icon: Mountain }, 
  { id: 4, name: "Snow Treks", desc: "Curated routes across winter horizons.", icon: Snowflake }, 
];

export function Experiences() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="experiences" className="relative w-full min-h-screen bg-[#fcfbfa] text-zinc-900 py-24 px-4 sm:px-6 lg:px-8 overflow-hidden select-none z-10">
      
      {mounted && (
        <div className="absolute inset-0 z-0 pointer-events-none opacity-60">
          <Canvas camera={{ position: [0, 0, 1] }}>
            <FluidParticleField />
          </Canvas>
        </div>
      )}

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="max-w-xl mb-20">
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#134074] font-bold">
            Experiences
          </p>
          <h2 className="font-display text-3xl font-light text-zinc-950 mt-3 sm:text-4xl md:text-5xl tracking-tight">
            Adventures, quietly engineered.
          </h2>
          <p className="mt-4 text-xs leading-relaxed text-zinc-600 sm:text-sm">
            From helicopter dawns above Auli to riverside yoga in Rishikesh — each experience is led by a guide who has walked it a hundred times.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {EXPERIENCES.map((exp) => {
            const Icon = exp.icon;
            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                onMouseEnter={() => setHoveredCard(exp.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className="group relative flex flex-col justify-between rounded-2xl border border-zinc-200/60 bg-white/70 p-6 sm:p-8 shadow-sm backdrop-blur-md transition-all duration-500 hover:shadow-xl hover:border-zinc-300 hover:bg-white/90"
              >
                <div>
                  <div className="flex items-center justify-between w-full">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#134074]/5 text-[#134074] group-hover:bg-[#134074] group-hover:text-white transition-all duration-300">
                      <Icon className="h-5 w-5" />
                    </div>
                    
                    <div className="flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[10px] uppercase tracking-widest text-[#134074] font-semibold">
                      <Eye className="h-3.5 w-3.5" />
                      <span>Explore Route</span>
                    </div>
                  </div>

                  <h3 className="font-display text-2xl font-light text-zinc-950 mt-8 tracking-tight">
                    {exp.name}
                  </h3>
                  <p className="mt-2 text-xs text-zinc-500 leading-relaxed sm:text-sm">
                    {exp.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-zinc-100 flex items-center justify-between text-[11px] font-medium tracking-wide text-zinc-400 group-hover:text-zinc-800 transition-colors">
                  <span className="uppercase tracking-widest">Vetted Safety Rating</span>
                  <span className="font-mono text-zinc-900 font-semibold bg-zinc-100 px-2.5 py-1 rounded-md">9.8 / 10</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}