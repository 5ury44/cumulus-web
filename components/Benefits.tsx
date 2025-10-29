"use client";

import { motion } from "framer-motion";
import { Users, Building2, TrendingUp } from "lucide-react";

const benefits = [
  {
    icon: Users,
    title: "Users",
    subtitle: "Pay per use",
    description: "Only for compute consumed",
  },
  {
    icon: Building2,
    title: "Providers",
    subtitle: "Maximize utilization",
    description: "90%+ GPU efficiency",
  },
  {
    icon: TrendingUp,
    title: "Market",
    subtitle: "Liquid capacity",
    description: "Dynamic, demand-driven",
  },
];

export default function Benefits() {
  return (
    <section
      id="benefits"
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-light text-white mb-2">
            Benefits
          </h2>
          <p className="text-sm text-gray-500 max-w-xl mx-auto">For everyone</p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-px bg-gray-800">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group"
              >
                <div className="p-8 border-b border-gray-800 hover:border-white transition-colors duration-300">
                  <Icon className="text-white mb-4" size={24} />
                  <h3 className="text-lg font-light text-white mb-1">
                    {benefit.title}
                  </h3>
                  <p className="text-xs text-gray-500 mb-3 uppercase tracking-wide">
                    {benefit.subtitle}
                  </p>
                  <p className="text-sm text-gray-500">{benefit.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
