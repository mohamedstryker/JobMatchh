import './css/style.css';

import Header from '@/components/ui/header';
import Footer from '@/components/ui/footer';

export const metadata = {
  title: 'JobMatch',
  description: 'Welcome to JobMatch!'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='font-inter bg-gray-950 text-base text-gray-200 antialiased'>
      <div className='flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip'>
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  );
}
