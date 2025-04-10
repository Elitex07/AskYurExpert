import "./globals.css";

export const metadata = {
  title: "AskYurExpert",
  description: "A Mutual Fund Distributor PLatform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
