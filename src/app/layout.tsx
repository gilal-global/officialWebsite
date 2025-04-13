import { Provider } from "@/components/ui/provider"
import type { Metadata } from "next"
import localFont from "next/font/local"
import NavBar from "@/components/navBar"
import { Noto_Sans_TC, Noto_Serif_TC } from "next/font/google"
import "./globals.css"
import Footer from "@/components/footer"
import { Box } from "@chakra-ui/react"

const notoSans = Noto_Sans_TC({
	subsets: ["latin"],
	weight: ["400", "700"],
	variable: "--font-noto-sans-tc",
	display: "swap",
})

const notoSerif = Noto_Serif_TC({
	subsets: ["latin"],
	weight: ["400", "700"],
	variable: "--font-noto-serif-tc",
	display: "swap",
})

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
})
const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
})

export const metadata: Metadata = {
	title: "堅美國際",
	description: "國際貿易與供應鏈整合顧問公司",
}

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={` ${notoSans.variable} ${notoSerif.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<Provider>
					<Box minH="100vh" bg="bg.page" color="text.main">
						<NavBar />
						{children}
						<Footer />
					</Box>
				</Provider>
			</body>
		</html>
	)
}
