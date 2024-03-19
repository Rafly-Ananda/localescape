import "@/styles/globals.css";
import { TRPCReactProvider } from "@/trpc/react";
import localFont from "next/font/local";
import Navbar from "@/app/_components/Navbar";
import Footer from "@/app/_components/Footer";

const causten = localFont({
  src: "../../public/fonts/causten.otf",
  display: "swap",
});

export const metadata = {
  title: "Local Escape",
  description: "Local Escape",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="light">
      <body className={`${causten.className} bg-[#3b4b71]`}>
        <Navbar />
        <TRPCReactProvider>{children}</TRPCReactProvider>
        <Footer />
      </body>
    </html>
  );
}
