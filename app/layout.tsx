import type { Metadata } from "next";
import "@fontsource/assistant/400.css";
import "@fontsource/assistant/500.css";
import "@fontsource/assistant/600.css";
import "@fontsource/assistant/700.css";
import "@fontsource/assistant/800.css";
import "@fontsource/secular-one/400.css";
import "./globals.css";

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  title: "D&V Detailing | דיטיילינג נייד עד הבית",
  description: "דיטיילינג מקצועי שמגיע עד הבית ברחובות ואזור המרכז: ניקוי פנימי עמוק, דיטיילינג חיצוני וציפוי קרמי.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: `${BASE_PATH}/favicon.svg`,
    shortcut: `${BASE_PATH}/favicon.svg`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
