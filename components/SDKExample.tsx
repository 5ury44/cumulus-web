"use client";

import { motion } from "framer-motion";

export default function SDKExample() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="mt-16 max-w-3xl mx-auto"
    >
      <div className="border border-gray-800 bg-black">
        <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-800">
          <div className="w-2 h-2 rounded-full bg-gray-600" />
          <div className="w-2 h-2 rounded-full bg-gray-600" />
          <div className="w-2 h-2 rounded-full bg-gray-600" />
          <span className="ml-3 text-xs text-gray-500 font-mono">
            example.py
          </span>
        </div>
        <pre className="p-6 text-sm text-gray-300 font-mono overflow-x-auto">
          <code>{`# Create client
client = CumulusClient("http://api.cumulus.cloud")

# Run with budget and latency constraints
result = client.run(
    func=_remote_llm_generate,
    budget=0.10,
    latency="10ms",
    params=[prompt, config_dict, hf_id],
    requirements=["torch", "transformers", "accelerate"]
)`}</code>
        </pre>
      </div>
    </motion.div>
  );
}
