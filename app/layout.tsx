import type { Metadata } from "next";
import { Quintessential, Open_Sans } from "next/font/google";
import "./globals.css";

const quintessential = Quintessential({
    variable: "--font-quintessential",
    weight: "400",
});

const open_sans = Open_Sans({
    variable: "--font-open-sans",
    weight: "400",
});
export const metadata: Metadata = {
    title: "Aiko De Sallier Du pin",
    description: "Fashion creator",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={` ${quintessential.variable} ${open_sans.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
