"use client";

import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";

export default function Providers({children, defaultTheme}: {children: ReactNode, defaultTheme: string}) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      {children}
    </ThemeProvider>
  );
}