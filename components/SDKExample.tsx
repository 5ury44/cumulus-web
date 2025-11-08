"use client";

import { motion } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function SDKExample() {
  const codeString = `# Create client
client = CumulusClient("http://api.cumuluslabs.io")

# Run training with budget and time constraints
result = client.run(
    func=finetune_llama2_7b,
    budget="5.00",        # max spend per GPU/hour
    optimization="time",  # optimize for time or price
    params=[model_config, dataset_path, num_epochs],
    requirements=["torch", "transformers", "accelerate", "datasets"]
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
