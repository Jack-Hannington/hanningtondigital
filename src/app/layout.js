import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Hannington Digital',
  description: 'Digital markeeting and web development',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} container mx-auto w-full md:w-1/2 lg:w-1/2 pt-40 text-slate-700`}>
        <nav className="flex flex-row justify-between mb-6">
          <Link href="/">Home</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/posts">Posts</Link>
          </nav>
        {children}
        </body>
    </html>
  )
}
