import localFont from "next/font/local";

export const recursive = localFont({
  src: [
    {
      path: "./recursive/Recursive.woff2",
      weight: "300...800",
      style: "normal",
    },
  ],
  variable: "--font-recursive",
  display: "swap",
  preload: true,
});
