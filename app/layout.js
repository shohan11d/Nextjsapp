import Logo from './_components/Logo';
import Navigation from './_components/Navigation';
import { Josefin_Sans } from 'next/font/google';
const josfin = Josefin_Sans({ subsets: ['latin'], display: 'swap' });
console.log(josfin);
import './_styles/globals.css';
import Header from '@/starter/components/Header';
export const metadata = {
   title: {
      template: '%s The Wild Oasis',
      default: 'Welcome / The Wild Oasis',
   },
};

export default function RootLayout({ children }) {
   return (
      <html lang="en">
         <body className="bg-primary-950 text-primary-100 antialiased min-h-screen flex flex-col relative">
            <Header />
            <div className="flex-1  px-8 py-12">
               <main className="max-w-4xl lg:max-w-7xl  mx-auto ">
                  {children}
               </main>
            </div>
         </body>
      </html>
   );
}
