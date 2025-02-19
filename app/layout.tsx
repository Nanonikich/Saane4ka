import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'
import CartProvider from './components/Providers'
import ShoppingCartModel from './components/ShoppingCartModel'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<CartProvider>
					<Navbar />
					<ShoppingCartModel />
					{children}
				</CartProvider>
			</body>
		</html>
	)
}
