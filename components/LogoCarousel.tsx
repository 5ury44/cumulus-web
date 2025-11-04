"use client";

import { motion } from "framer-motion";

const logos = [
  { name: "Georgia Tech", src: "/logos/georgia-tech.png" },
  { name: "Palantir", src: "/logos/palantir.png" },
  { name: "Blackstone", src: "/logos/blackstone.png" },
  { name: "UW Madison", src: "/logos/uw-madison.png" },
  { name: "airnaculus", src: "/logos/airnaculus.png" },
];

export default function LogoCarousel() {
  return (
    <section className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-sm text-gray-500 uppercase tracking-wide">
            Founded by alumni from
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
          <div className="flex animate-scroll gap-16 items-center">
            {/* Duplicate logos for seamless loop */}
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={`${logo.name}-${index}`}
                className="flex-shrink-0 flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-300"
              >
                <div className="relative h-16 w-48 flex items-center justify-center">
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className={`object-contain max-h-full max-w-full ${
                      logo.name === "Palantir" ? "filter invert" : ""
                    }`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
