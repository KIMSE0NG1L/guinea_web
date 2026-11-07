import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
import "./globals.css";

// The game's own typeface (NEXON Maplestory), the same files the app bundles.
const maplestory = localFont({
  src: [
    { path: "./fonts/Maplestory-Light.ttf", weight: "300", style: "normal" },
    { path: "./fonts/Maplestory-Bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-maple",
  display: "swap",
});

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  // Vercel provides the production domain at build time.
  metadataBase: new URL(
    process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "http://localhost:3000",
  ),
  title: {
    default: "기니 키우기 — 기니피그 용사의 방치형 모험",
    template: "%s · 기니 키우기",
  },
  description: "건초만 먹던 기니가 황금 당근을 쫓아 세상 맛집 여행을 떠나요. 자동 전투, 요리, 동료와 함께하는 방치형 RPG.",
  icons: { icon: `${basePath}/game/app-icon-192.png`, apple: `${basePath}/game/app-icon-192.png` },
  openGraph: {
    title: "기니 키우기",
    description: "건초만 먹던 기니가 황금 당근을 쫓아 세상 맛집 여행을 떠나요.",
    images: [`${basePath}/game/hero-day.jpg`],
    locale: "ko_KR",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#2e392d",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ko" className={maplestory.variable}>
      {/* The 9-slice art used from CSS (border-image), resolved against the base path here. */}
      <body
        style={
          {
            "--panel-img": `url(${basePath}/game/panel-xl.png)`,
            "--btn-img": `url(${basePath}/game/btn-green.png)`,
          } as React.CSSProperties
        }
      >
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
