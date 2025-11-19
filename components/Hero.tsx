"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import LogoCarousel from "./LogoCarousel";

export default function Hero() {
  return (
    <section className="relative flex flex-col justify-between min-h-screen overflow-hidden pt-12 sm:pt-16 px-4 sm:px-6 lg:px-8">
      <div className="flex-grow flex items-center justify-center relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-light tracking-tight mb-4">
              <span className="text-white">Cumulus</span>
            </h1>

            {/* Tagline */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="text-xl sm:text-2xl lg:text-3xl font-light text-gray-400 mb-6"
            >
              The Most Liquid GPU Cloud
            </motion.h2>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-base sm:text-lg text-gray-500 max-w-xl mx-auto"
            >
              GPUs that adapt to your workload, not the other way around.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="pt-4"
            >
              <motion.a
                href="#cta"
                className="group inline-flex items-center gap-2 px-8 py-3 border border-white text-white font-light text-sm transition-all duration-300 hover:bg-white hover:text-black"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Get Started
                <ArrowRight size={16} />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Logos at the bottom */}
      <div className="w-full relative z-10 pb-8 sm:pb-12">
        <LogoCarousel />
      </div>
    </section>
  );
}
