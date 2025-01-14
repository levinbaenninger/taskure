import "~/styles/globals.css";

import { type Metadata } from "next";

import { ThemeProvider } from "~/components/theme-provider";
import { recursive } from "~/fonts";
import { TRPCReactProvider } from "~/trpc/react";

export const metadata: Metadata = {
  title: "Taskure",
  description:
    "Taskure: Effortlessly manage and organize your tasks with Taskure. Create boards, collaborate seamlessly, and stay productive with our intuitive task management app designed for individuals and teams. Simplify your workflow with Taskure today!",
  icons: [{ url: "/taskure.svg", href: "/taskure.svg" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${recursive.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <TRPCReactProvider>
            <div className="container mx-auto">{children}</div>
          </TRPCReactProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
