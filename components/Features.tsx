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
    description: "Share compute across workloads",
  },
  {
    icon: Brain,
    title: "Intelligent",
    description: "ML-driven scheduling",
  },
  {
    icon: TrendingUp,
    title: "90%+ Utilization",
    description: "Phase-aware execution",
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl sm:text-4xl font-light text-white mb-2">
            Features
          </h2>
          <p className="text-sm text-gray-500 max-w-xl mx-auto">
            Share, scale, optimize
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-800">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group p-8 border-b border-gray-800 hover:border-white transition-colors duration-300"
              >
                <Icon className="text-white mb-4" size={24} />
                <h3 className="text-lg font-light text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-500">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
