import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import Head from 'next/head';


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Hannington Digital',
  description: 'Digital markeeting and web development',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
         <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body className={`${inter.className} container mx-auto w-full md:w-1/2 lg:w-1/2 pt-5 text-grey-400 shadow-lg shadow-zinc-800/5 `}>
        <ul className="mb-10 flex text-center justify-center w-fit	 mx-auto rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
          <Link href="/" className="relative block px-3 py-3 active:text-sky-600 transition hover:text-sky-600 dark:hover:text-teal-400">Home</Link>
          <Link href="/projects" className="relative block px-3 py-3 transition hover:text-sky-600 dark:hover:text-teal-400">Projects</Link>
          <Link href="/posts" className="relative block px-3 py-3 transition hover:text-sky-600 dark:hover:text-teal-400">Posts</Link>
          <Link href="/posts" className="relative block px-3 py-3 transition hover:text-sky-600 dark:hover:text-teal-400">Contact</Link>
          </ul>
        {children}
        </body>
    </html>
  )
}
