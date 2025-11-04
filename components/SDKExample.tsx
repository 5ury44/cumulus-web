"use client";

import { motion } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function SDKExample() {
  const codeString = `# Create client
client = CumulusClient("http://api.cumuluslabs.io")

# Run with budget and latency constraints
result = client.run(
    func=_remote_llm_generate,
    budget="$0.10",  # max spend per job
    latency="100ms", # latency target
    params=[prompt, config_dict, hf_id],
    requirements=["torch", "transformers", "accelerate"]
)`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="mt-16 max-w-3xl mx-auto"
    >
      <div className="border border-gray-800 bg-black rounded-lg overflow-hidden">
        <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-800">
          <div className="w-2 h-2 rounded-full bg-gray-600" />
          <div className="w-2 h-2 rounded-full bg-gray-600" />
          <div className="w-2 h-2 rounded-full bg-gray-600" />
          <span className="ml-3 text-xs text-gray-500 font-mono">
            example.py
          </span>
        </div>
        <SyntaxHighlighter
          language="python"
          style={vscDarkPlus}
          customStyle={{
            margin: 0,
            padding: "1.5rem",
            background: "#000000",
            fontSize: "0.875rem",
          }}
          showLineNumbers={false}
        >
          {codeString}
        </SyntaxHighlighter>
      </div>
    </motion.div>
  );
}
