"use client";

import { motion } from "framer-motion";
import { Users, Building2, TrendingUp } from "lucide-react";

const benefits = [
  {
    icon: Users,
    title: "Users",
    subtitle: "Pay per use",
    description:
      "Access individual hosts worldwide. Jobs run alongside others on shared GPUs, keeping costs low. Switch between GPUs seamlessly for the best prices.",
  },
  {
    icon: Building2,
    title: "Individual Hosts",
    subtitle: "Maximize utilization",
    description:
      "Multiple jobs run on your GPU at the same time. Share resources efficiently and achieve 90%+ utilization while earning revenue.",
  },
  {
    icon: TrendingUp,
    title: "Market",
    subtitle: "Liquid capacity",
    description:
      "Dynamic, demand-driven marketplace connecting hosts and consumers for optimal GPU allocation",
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
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-normal text-white mb-4 tracking-tight">
            Benefits
          </h2>
          <p className="text-base text-gray-400 max-w-xl mx-auto">For everyone</p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group relative p-10 border border-white/10 bg-black hover:bg-white/5 transition-colors duration-500"
              >
                <div className="tech-border absolute inset-0 pointer-events-none" />
                <Icon className="text-white mb-6" size={24} />
                <h3 className="text-lg font-light text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-xs text-gray-500 mb-4 uppercase tracking-wide">
                  {benefit.subtitle}
                </p>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
