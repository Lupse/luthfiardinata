import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "700", "800"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Luthfi Ardinata",
  description: "Introduction Website for Luthfi Ardinata",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="8QcYiPfjPQjCCjRSsznV35KirBUKOX5zWH9ccu4GKF4" />
      </head>
      <body
        className={`${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
