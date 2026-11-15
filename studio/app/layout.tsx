import type { Metadata, Viewport } from "next";
import "./globals.css";

const origin = "https://torrayz-studio.vercel.app";
export const metadata: Metadata = {
  metadataBase: new URL(origin),
  title: { default: "TORRAYZ / STUDIO | Creative Developer & Digital Builder", template: "%s | TORRAYZ / STUDIO" },
  description: "Portfolio Tri Puji Antoro (Torrayz). Selected work, creative coding, web development, UI experiments, and a live index of public GitHub projects.",
  applicationName: "TORRAYZ / STUDIO",
  keywords: ["Torrayz", "Tri Puji Antoro", "Creative Developer", "Portfolio", "React", "Next.js", "WebGL", "Supabase"],
  authors: [{ name: "Tri Puji Antoro", url: "https://github.com/Torrayz" }],
  robots: { index: true, follow: true },
  openGraph: { title: "TORRAYZ / STUDIO", description: "Engineered to create. An independent developer portfolio and digital playground.", type: "website", url: origin, siteName: "TORRAYZ / STUDIO" },
  twitter: { card: "summary_large_image", title: "TORRAYZ / STUDIO", description: "Creative Developer & Digital Builder" },
  icons: { icon: "/favicon.svg" }
};
export const viewport: Viewport = { themeColor: "#080e1b", width: "device-width", initialScale: 1 };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="id"><body>{children}</body></html>;
}