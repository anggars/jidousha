import type { Metadata } from "next";
import "./globals.css";
import { ProfileProvider } from "@/context/profile-context";
import { LanguageProvider } from "@/context/language-context";
import { Header } from "@/components/header";

export const metadata: Metadata = {
  title: "Jidousha Seibi",
  description: "Platform for practicing Japan's Tokutei Ginou SSW Jidousha Seibi (Automobile Maintenance & Repair) exam questions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>
        <LanguageProvider>
          <ProfileProvider>
            <Header />
            <main className="main-content-layout">
              {children}
            </main>
          </ProfileProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
