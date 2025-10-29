import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cumulus - The Most Liquid GPU Cloud",
  description:
    "Share compute, scale instantly. GPUs that adapt to your workload, not the other way around.",
  keywords:
    "GPU compute, elastic GPU, GPU marketplace, AI compute, machine learning infrastructure, GPU sharing",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
