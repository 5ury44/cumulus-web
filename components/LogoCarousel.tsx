"use client";

import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";

const logos = [
  { name: "Georgia Tech", src: "/logos/georgia-tech.png" },
  { name: "Palantir", src: "/logos/palantir.png" },
  { name: "Blackstone", src: "/logos/blackstone.png" },
  { name: "UW Madison", src: "/logos/uw-madison.png" },
  { name: "airnaculus", src: "/logos/airnaculus.png" },
];

export default function LogoCarousel() {
  return (
    <section className="relative pt-0 pb-8 sm:pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden -mt-48 sm:-mt-56">
      <div className="max-w-5xl mx-auto">
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
                className="flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-300 mx-8"
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
          </Marquee>

          {/* Left fade gradient */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-black via-black/50 to-transparent pointer-events-none" />

          {/* Right fade gradient */}
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-black via-black/50 to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
