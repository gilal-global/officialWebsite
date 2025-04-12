// src/fonts.ts
import { Noto_Sans_TC, Noto_Serif_TC } from "next/font/google"

export const notoSans = Noto_Sans_TC({
	subsets: ["latin"],
	weight: ["400", "700"],
})

export const notoSerif = Noto_Serif_TC({
	subsets: ["latin"],
	weight: ["400", "700"],
})
