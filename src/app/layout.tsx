import { Toaster } from "sonner";
import "./globals.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Laura & Santos",
  description: "Bienvenido a nuestra página de boda",
  icons: {
    icon: "/img/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="antialiased">
        <Toaster position="top-right" richColors />
        {children}
      </body>
    </html>
  );
}
