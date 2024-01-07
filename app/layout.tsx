import "../styles/globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "BM-Elektrobau",
  openGraph: {
    title: "BM-Elektrobau",
    images: [
      {
        url: "https://demo.useliftoff.com/opengraph-image",
      },
    ],
  },
  metadataBase: new URL("https://demo.useliftoff.com"),
  themeColor: "#FFF",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="scroll-smooth antialiased [font-feature-settings:'ss01']">
        {children}
      </body>
    </html>
  );
}
