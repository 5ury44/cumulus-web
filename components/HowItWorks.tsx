"use client";

import { motion } from "framer-motion";
import { Code, Zap, Cpu, CreditCard } from "lucide-react";
import SDKExample from "./SDKExample";
import JobDetailsGraphs from "./JobDetailsGraphs";

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
    description:
      "Multiple jobs run together on shared GPUs. Scale across individual hosts, switch for best prices",
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

        {/* SDK + Console */}
        <div className="mb-20">
          <div className="space-y-12">
            <div className="max-w-3xl mx-auto">
              <SDKExample />
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="text-sm text-gray-500 max-w-2xl mx-auto mt-6 text-center leading-relaxed"
              >
                Set your constraints (budget, latency, requirements) and launch
                the job. As soon as it starts running, we orchestrate the
                optimal mix of GPUs and stream live utilization, cost, and
                worker metrics back into your console so you can watch progress
                in real time.
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="max-w-5xl mx-auto"
            >
              <JobDetailsGraphs
                variant="embedded"
                title="Cumulus Console"
                subtitle="Monitoring jobs with real-time telemetry"
              />
            </motion.div>
          </div>
        </div>

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
      </div>
    </section>
  );
}
