import "./globals.css";
import { ClerkProvider } from '@clerk/nextjs';

export const metadata = {
  title: "AskYurExpert",
  description: "A Mutual Fund Distributor PLatform",
};

const localization = {
  signIn: {
    start: {
      titleCombined: "Welcome to AskYurExpert",
      subtitleCombined: "Please sign in to continue",
    }
  }
}

export default function RootLayout({ children }) {
  return (
    <ClerkProvider localization={localization}>
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
    </ClerkProvider>
  );
}
