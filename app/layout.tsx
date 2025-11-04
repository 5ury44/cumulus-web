import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cumulus - The Most Liquid GPU Cloud",
  description:
    "Share compute, scale instantly. GPUs that adapt to your workload, not the other way around.",
  keywords:
    "GPU compute, elastic GPU, GPU marketplace, AI compute, machine learning infrastructure, GPU sharing",
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-3XR61KN7TB"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-3XR61KN7TB');
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
