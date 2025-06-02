import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { RainbowProvider } from "@/providers/rainbow-provider";
import { Toaster } from "@/components/ui/sonner";

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Sistema de Reciclaje con NFTs",
  description: "Plataforma de reciclaje con recompensas en NFTs",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${jetbrainsMono.variable} font-mono antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <RainbowProvider>
            <div className="min-h-screen bg-background text-foreground">
              <Navbar />
              <main className="container mx-auto px-4 py-8">
                {children}
              </main>
            </div>
          </RainbowProvider>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
