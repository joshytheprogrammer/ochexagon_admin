import SessionProvider from "@components/login/SessionProvider";
import "@styles/globals.css";

export const metadata = {
  title: "OChexagon | Admin",
  description:
    "Admin Panel for O.C Hexagon website",
  openGraph: {
    title: "O.C. Hexagon Admin Panel",
    description: "Admin Panel for O.C Hexagon website",
    keywords:
      "OCHEXAGON, O.C HEXAGON, OC HEXAGON, chemical supply nigeria, chemical company Lagos, laboratory equipment, O.C HEXAGON Nigeria, Laboratory Items Supplier, Chemical Importer Lagos",
    images: "./assets/image.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="./assets/favicon.ico" />
      </head>

      <body>
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
}
