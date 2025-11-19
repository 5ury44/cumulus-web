"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code, Zap, Cpu, CreditCard } from "lucide-react";
import SDKExample from "./SDKExample";
import JobDetailsGraphs from "./JobDetailsGraphs";

const steps = [
  {
    number: "01",
    icon: Code,
    title: "Submit",
    description: "Define workload with constraints",
    visual: "sdk",
  },
  {
    number: "02",
    icon: Zap,
    title: "Profile",
    description: "System analyzes and optimizes",
    visual: "sdk",
  },
  {
    number: "03",
    icon: Cpu,
    title: "Allocate",
    description:
      "Multiple jobs run together on shared GPUs. Scale across individual hosts, switch for best prices",
    visual: "graph",
  },
  {
    number: "04",
    icon: CreditCard,
    title: "Pay",
    description: "Only for compute used",
    visual: "graph",
  },
];

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section
      id="how-it-works"
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
            How It Works
          </h2>
          <p className="text-base text-gray-400 max-w-xl mx-auto">
            Simple, intelligent process
          </p>
        </motion.div>

        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-start">
          {/* Sticky Visuals (Desktop) */}
          <div className="hidden lg:block sticky top-32 col-span-7">
            <div className="relative h-[500px] w-full bg-black/20 border border-white/10 rounded-lg overflow-hidden backdrop-blur-sm">
              <div className="tech-border absolute inset-0 pointer-events-none z-20" />
              <AnimatePresence mode="wait">
                {steps[activeStep].visual === "sdk" ? (
                  <motion.div
                    key="sdk"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 p-6 flex items-center justify-center"
                  >
                    <div className="w-full">
                      <SDKExample />
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="graph"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 p-6 flex items-center justify-center"
                  >
                    <div className="w-full">
                      <JobDetailsGraphs
                        variant="embedded"
                        title="Cumulus Console"
                        subtitle="Real-time telemetry"
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Scrollable Steps */}
          <div className="space-y-32 lg:py-12 col-span-5">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ margin: "-20% 0px -20% 0px" }}
                  onViewportEnter={() => setActiveStep(index)}
                  transition={{ duration: 0.5 }}
                  className={`relative p-10 border transition-all duration-500 rounded-lg ${activeStep === index
                    ? "border-white/30 bg-white/5"
                    : "border-white/5 bg-transparent opacity-50"
                    }`}
                >
                  {/* Mobile Visual (only shown on mobile) */}
                  <div className="lg:hidden mb-6">
                    {step.visual === "sdk" ? (
                      <SDKExample />
                    ) : (
                      <JobDetailsGraphs
                        variant="embedded"
                        title="Console"
                        subtitle="Telemetry"
                      />
                    )}
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="text-sm text-gray-500 font-mono mt-1">
                      {step.number}
                    </span>
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <Icon className="text-white" size={24} />
                        <h3 className="text-xl font-light text-white">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-gray-400 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
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
