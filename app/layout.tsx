import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "本地门店高级官网模板系统",
  description: "面向中国大陆本地门店的高级视觉官网与预约系统 demo。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="dark">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
