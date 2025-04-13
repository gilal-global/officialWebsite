"use client"
import NextLink from "next/link"
import { Box, Flex, Link, Image } from "@chakra-ui/react"
import { ColorModeButton, useColorModeValue } from "@/components/ui/color-mode"
import { useEffect, useState } from "react"

export default function NavBar() {
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		setMounted(true)
	}, [])

	const logoBgImage = useColorModeValue("/LogoNoBg.png", "/LogoBlackNoBg.png")

	if (!mounted) return null // ❗ 等待 client-side render，再載入圖片
	return (
		<Box width={"100%"} bg={"bg.nav"} h={"6rem"}>
			<Flex gap={"4"} h={"100%"}>
				<Box
					display={"flex"}
					width={"25%"}
					alignItems={"center"}
					px={"2rem"}
					fontSize={"4xl"}
					fontFamily="var(--font-noto-sans-tc)"
				>
					<Image
						src={logoBgImage}
						alt="logo"
						w={"100px"}
						h={"100px"}
						mr={"1rem"}
					/>
					<Link
						href="/"
						title="回首頁"
						as={NextLink}
						fontFamily={"var(--font-noto-sans-tc)"}
					>
						堅美國際
					</Link>
				</Box>

				<Flex
					gap="20"
					w={"75%"}
					justifyContent={"end"}
					alignItems={"center"}
					px={"5rem"}
					fontSize={"2xl"}
					fontFamily="var(--font-noto-serif-tc)"
				>
					<Link
						as={NextLink}
						transition={"all 0.3s ease-in-out"}
						_dark={{
							_hover: {
								color: "yellow.200",
								transform: "translateY(-5px)",
							},
						}}
						_hover={{
							color: "#5B8EAE",
							transform: "translateY(-5px)",
						}}
						href="/company"
					>
						公司介紹
					</Link>
					<Link
						as={NextLink}
						transition={"all 0.3s ease-in-out"}
						_dark={{
							_hover: {
								color: "yellow.200",
								transform: "translateY(-5px)",
							},
						}}
						_hover={{
							color: "#5B8EAE",
							transform: "translateY(-5px)",
						}}
						href="/services"
					>
						服務介紹
					</Link>
					<Link
						as={NextLink}
						transition={"all 0.3s ease-in-out"}
						_dark={{
							_hover: {
								color: "yellow.200",
								transform: "translateY(-5px)",
							},
						}}
						_hover={{
							color: "#5B8EAE",
							transform: "translateY(-5px)",
						}}
						href="/contactUs"
					>
						聯絡我們
					</Link>

					<ColorModeButton></ColorModeButton>
				</Flex>
			</Flex>
		</Box>
	)
}
