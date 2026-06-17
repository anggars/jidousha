import type { Metadata } from "next";
import "./globals.css";
import { ProfileProvider } from "@/context/profile-context";
import { LanguageProvider } from "@/context/language-context";
import { Header } from "@/components/header";

export const metadata: Metadata = {
  title: "Latihan Soal SSW Jidousha Seibi",
  description: "Platform latihan soal ujian Tokutei Ginou SSW Jidousha Seibi (Perbaikan & Pemeliharaan Otomotif) Jepang.",
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
