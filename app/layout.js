import NextAuthProvider from './Provider'
import Navbar from './components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Note App',
  description: 'Note Allication',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextAuthProvider>
          <Navbar />
          <div className='w-80 sm:w-5/6 md:w-4/6 lg:w-2/4 mx-auto'>
            {children}
          </div>
          <Toaster position="bottom-right" toastOptions={{ duration: 5000, style: { background: '#b8e47f', color: '#000', }, }} />
        </NextAuthProvider>
      </body>
    </html>
  )
}
