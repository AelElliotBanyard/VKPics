import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "VKPics",
  description: "Pics for VK",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <div className="background">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
