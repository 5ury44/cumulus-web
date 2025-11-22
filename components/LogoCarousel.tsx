"use client";

import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";

const logos = [
  { name: "Georgia Tech", src: "/logos/georgia-tech.png" },
  { name: "Palantir", src: "/logos/palantir.png" },
  { name: "Blackstone", src: "/logos/blackstone.png" },
  { name: "UW Madison", src: "/logos/uw-madison.png" },
];

export default function LogoCarousel() {
  return (
    <section className="relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-sm text-gray-500 uppercase tracking-wide font-mono">
            Founded by alumni from
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative overflow-hidden">
          <Marquee
            gradient={false}
            speed={40}
            pauseOnHover
            autoFill
            className="flex items-center"
          >
            {logos.map((logo, index) => (
              <div
                key={`${logo.name}-${index}`}
                className="flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity duration-300 mx-6 sm:mx-12"
              >
                <div className="relative h-8 sm:h-12 w-28 sm:w-40 flex items-center justify-center">
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className={`object-contain max-h-full max-w-full ${logo.name === "Palantir" ? "filter invert" : ""
                      }`}
                  />
                </div>
              </div>
            ))}
          </Marquee>

          {/* Left fade gradient */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-black via-black/80 to-transparent pointer-events-none" />

          {/* Right fade gradient */}
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-black via-black/80 to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
