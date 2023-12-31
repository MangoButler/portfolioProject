import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from './components/Navbar';
import { Provider } from './components/Provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    template: '%s | James Buttman',
    default: 'Portfolio',
  },
  description:
    'Welcome to the personal portfolio of James Buttman. Find a collection of personal projects he has been working on.',
  generator: 'Next.js',
  applicationName: 'Simple Portfolio',
  referrer: 'origin-when-cross-origin',
  keywords: ['James Buttman', 'Portfolio'],
  icons: {
    icon: '/icon.png',
    apple: '/apple-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={`${inter.className} bg-white text-black dark:bg-[#090908] dark:text-white h-full selection:bg-gray-50 dark:selection:bg-gray-800`}
      >
        <Provider>
          <Navbar />
          <main className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
}
