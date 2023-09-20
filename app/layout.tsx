import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Provider } from './_trpc/provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Authentia',
  description: 'Authentia is a platform for creators to authenticate their work.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className='bg-[#141414] '>
				<Provider>{children}</Provider>
			</body>
		</html>
	)
}
