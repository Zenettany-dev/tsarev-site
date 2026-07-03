import "./globals.css";
import { Metadata } from "next";
import Preloader from "../components/Preloader";

export const metadata: Metadata = {
  title: 'ATRIAN ONLINE ',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body className="bg-[#050508] text-white selection:bg-green-600">
        <Preloader />
        {children}
      </body>
    </html>
  );
} 