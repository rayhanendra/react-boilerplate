import { Metadata } from 'next';
import ThemeRegistry from 'src/components/ThemeRegistry/ThemeRegistry';
import { Montserrat } from 'next/font/google';
import DefaultTemplate from '@/components/templates/DefaultTemplate';

const montserrat = Montserrat({
  weight: ['100', '300', '400', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Home',
  description: 'Welcome to Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={montserrat.className}>
      <head>
        <link
          href='https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap'
          rel='stylesheet'
        ></link>
      </head>
      <body>
        <ThemeRegistry>
          <DefaultTemplate>{children}</DefaultTemplate>
        </ThemeRegistry>
      </body>
    </html>
  );
}
