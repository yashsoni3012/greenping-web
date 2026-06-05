import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Greenping Solutions – Official WhatsApp Business Solution Provider",
  description:
    "Greenping Solutions is a Meta-verified WhatsApp Business API platform. Automate campaigns, manage templates, deploy chatbots, and grow your business with official WhatsApp Cloud API.",
  keywords: ["WhatsApp API", "WhatsApp Business", "WhatsApp Marketing", "Meta Verified", "Greenping"],
  openGraph: {
    title: "Greenping Solutions",
    description: "Ultimate Solution for WhatsApp Marketing – Meta Verified",
    url: "https://greenpingsolutions.com",
    siteName: "Greenping Solutions",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="noise-overlay antialiased">{children}</body>
    </html>
  );
}
