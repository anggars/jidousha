import type { Metadata } from "next";
import "./globals.css";
import { ProfileProvider } from "@/context/profile-context";
import { LanguageProvider } from "@/context/language-context";
import { ThemeProvider } from "next-themes";
import { Header } from "@/components/header";

export const metadata: Metadata = {
  title: "Jidousha Seibi",
  description: "Practice platform for the Tokutei Ginou SSW Jidousha Seibi (Automobile Repair & Maintenance) exam in Japan.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <LanguageProvider>
            <ProfileProvider>
              <Header />
              <main className="main-content-layout">
                {children}
              </main>
            </ProfileProvider>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
