import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../index.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { ThemeProvider } from "../shared/ThemeProvider";
import { LanguageProvider } from "../context/LanguageContext";

export const metadata: Metadata = {
  title: "OBLIQA IT Solutions",
  description: "Obliqa provides top-tier web development, digital marketing, and design solutions tailored for your business needs.",
  keywords: ["web development", "digital agency", "SEO", "marketing"],
  openGraph: {
    title: "Obliqa - Digital Agency",
    description: "Empowering your business with scalable web development and innovative digital solutions.",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png", sizes: "any" },
    ],
    shortcut: "/favicon.png",
    apple: { url: "/favicon.png", type: "image/png" },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="antialiased font-sans bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <LanguageProvider>
            <Header />
            {children}
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
