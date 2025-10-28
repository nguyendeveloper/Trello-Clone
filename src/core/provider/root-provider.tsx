"use client";

import type { ReactNode } from "react";

import ThemeProvider from "@/core/provider/theme-provider";

interface Props {
  children: ReactNode;
}

export default function RootProvider({ children }: Props) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
}
