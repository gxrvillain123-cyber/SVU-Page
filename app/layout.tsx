import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Swami Vivekananda University, Barrackpore",
  description:
    "Responsive admissions and campus life website for Swami Vivekananda University, Barrackpore.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
