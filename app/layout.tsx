import type { Metadata } from "next";
import { Inter, Merriweather, Fira_Code } from "next/font/google";
import StyledComponentsRegistry from "@/components/StyledComponentsRegistry";
import { ThemeProvider } from "@/components/ThemeProvider";
import GlobalStyles from "@/components/GlobalStyles";
import Header from "@/components/Header";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const merriweather = Merriweather({
  variable: "--font-merriweather",
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fibres of my Being",
  description: "Threads woven through science, life, and poetry",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.variable} ${merriweather.variable} ${firaCode.variable}`}>
        <StyledComponentsRegistry>
          <ThemeProvider>
            <GlobalStyles />
            <Header />
            {children}
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
