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
              <div className="flex flex-col min-h-dvh">
                <Header />
                <main className="flex-1 flex flex-col w-full h-full">
                  {children}
                </main>
                <footer className="w-full py-6 text-center text-sm font-semibold text-muted-foreground border-t border-border bg-background mt-auto">
                  Built by <a href="https://aritsu.vercel.app" target="_blank" rel="noreferrer" className="text-primary hover:underline transition-all hover:opacity-80">アリツ</a>
                </footer>
              </div>
            </ProfileProvider>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
