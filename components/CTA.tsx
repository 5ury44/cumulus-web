"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section
      id="cta"
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          {/* Headline */}
          <div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white mb-6">
              Get Started
            </h2>
            <p className="text-sm text-gray-500 max-w-xl mx-auto mb-8">
              Join our network of individual hosts and consumers. Get access to
              the most liquid GPU cloud.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.a
              href="mailto:onboard@cumuluslabs.io?subject=Interested in Hosting GPUs"
              className="group inline-flex items-center gap-2 px-8 py-3 border border-white text-white font-light text-sm transition-all duration-300 hover:bg-white hover:text-black"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Contact to Host
              <ArrowRight size={16} />
            </motion.a>
            <motion.a
              href="mailto:onboard@cumuluslabs.io?subject=Interested in GPU Compute Access"
              className="group inline-flex items-center gap-2 px-8 py-3 border border-white text-white font-light text-sm transition-all duration-300 hover:bg-white hover:text-black"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Contact to Be Onboarded
              <ArrowRight size={16} />
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-20 pt-8 border-t border-gray-800 text-center"
      >
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Cumulus. The Most Liquid GPU Cloud.
        </p>
      </motion.footer>
    </section>
  );
}
