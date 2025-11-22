"use client";

import { motion } from "framer-motion";
import {
  Clock,
  DollarSign,
  Zap,
  Network,
  TrendingUp,
  Brain,
} from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "Constraint-Driven",
    description: "Time or budget constraints, not hardware details",
  },
  {
    icon: Zap,
    title: "Elastic Scaling",
    description: "Automatically optimize allocation",
  },
  {
    icon: DollarSign,
    title: "Pay Per Use",
    description: "Only for compute consumed",
  },
  {
    icon: Network,
    title: "Shared GPUs",
    description:
      "Multiple jobs run on one GPU simultaneously. Share resources efficiently across workloads.",
  },
  {
    icon: Brain,
    title: "Intelligent",
    description: "ML-driven scheduling",
  },
  {
    icon: TrendingUp,
    title: "90%+ Utilization",
    description:
      "Run multiple jobs concurrently, maximizing efficiency and value",
  },
];

export default function Features() {
  return (
    <section
      id="features"
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
            Features
          </h2>
          <p className="text-base text-gray-400 max-w-xl mx-auto">
            Share, scale, optimize
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group relative p-12 border border-white/10 bg-black hover:bg-white/5 transition-colors duration-500"
              >
                <div className="tech-border absolute inset-0 pointer-events-none" />
                <Icon className="text-white mb-6" size={24} />
                <h3 className="text-lg font-light text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
