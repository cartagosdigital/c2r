import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "C2R Advocacia | O Jurídico das Techs",
  description:
    "Consultoria jurídica para empresas inovadoras. Parceira estratégica de startups, fintechs e negócios digitais. 100% digital, ágil e descomplicada.",
  keywords: "advocacia, startup, tech, LGPD, direito digital, consultoria jurídica, fintechs",
  openGraph: {
    title: "C2R Advocacia | O Jurídico das Techs",
    description: "Consultoria jurídica para empresas inovadoras. 100% digital e descomplicada.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${rubik.className} antialiased overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
