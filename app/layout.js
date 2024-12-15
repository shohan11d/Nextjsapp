import Logo from './_components/Logo';
import Navigation from './_components/Navigation';
import { Josefin_Sans } from 'next/font/google';
const josfin = Josefin_Sans({ subsets: ['latin'], display: 'swap' });
console.log(josfin);
import './_styles/globals.css';
export const metadata = {
   title: {
      template: '%s The Wild Oasis',
      default: 'Welcome / The Wild Oasis',
   },
};

export default function RootLayout({ children }) {
   return (
      <html lang="en">
         <body className="bg-primary-950 text-primary-100">
            <header>
               <Logo />
            </header>
            <Navigation />
            <main>{children}</main>
            <footer>Copyright by the Wild Oassis</footer>
         </body>
      </html>
   );
}
