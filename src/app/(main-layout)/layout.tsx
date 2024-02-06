import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { ChakraTheme } from "@providers/Chakra";
import { Header } from "@widgets/Header";
import { Auth } from "@widgets/Auth";
import { Footer } from "@widgets/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "To Do App",
  description: "My To DO App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <ChakraTheme>
                    <Auth/>
                    <Header/>
                    <div className={'page'}>
                        {children}
                    </div>
                    <Footer/>
                </ChakraTheme>
            </body>
        </html>
    );
}
