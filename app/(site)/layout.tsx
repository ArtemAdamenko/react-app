import Head from 'next/head';
import { Inter } from "next/font/google";
import "./globals.css";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&display=swap" rel="stylesheet" />
      </Head>
      <body className={inter.className}>
              <nav className={styles.nav}>
                  <ul>
                      <li>Courses</li>
                      <li>Contacts</li>
                      <li>About</li>
                  </ul>
              </nav>
                {children}
      </body>
    </html>
  );
}
