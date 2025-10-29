"use client";

import { motion } from "framer-motion";
import { Code, Zap, Cpu, CreditCard } from "lucide-react";
import SDKExample from "./SDKExample";

const steps = [
  {
    number: "01",
    icon: Code,
    title: "Submit",
    description: "Define workload with constraints",
  },
  {
    number: "02",
    icon: Zap,
    title: "Profile",
    description: "System analyzes and optimizes",
  },
  {
    number: "03",
    icon: Cpu,
    title: "Allocate",
    description: "Elastic scaling across GPUs",
  },
  {
    number: "04",
    icon: CreditCard,
    title: "Pay",
    description: "Only for compute used",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
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
            How It Works
          </h2>
          <p className="text-sm text-gray-500 max-w-xl mx-auto">
            Simple, intelligent process
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-800">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="relative group"
                >
                  <div className="p-8 border-b border-gray-800 hover:border-white transition-colors duration-300">
                    <div className="flex items-start gap-4 mb-4">
                      <span className="text-sm text-gray-500 font-light">
                        {step.number}
                      </span>
                      <Icon className="text-white" size={20} />
                    </div>
                    <h3 className="text-lg font-light text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-500">{step.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* SDK Example */}
        <SDKExample />
      </div>
    </section>
  );
}
