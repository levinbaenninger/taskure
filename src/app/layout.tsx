import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

import { TRPCReactProvider } from "~/trpc/react";

export const metadata: Metadata = {
  title: "Taskure",
  description:
    "Taskure: Effortlessly manage and organize your tasks with Taskure. Create boards, collaborate seamlessly, and stay productive with our intuitive task management app designed for individuals and teams. Simplify your workflow with Taskure today!",
  icons: [{ url: "/taskure.svg", href: "/taskure.svg" }],
  openGraph: {
    images: ["/taskure.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
    </html>
  );
}
