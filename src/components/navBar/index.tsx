"use client"
import NextLink from "next/link"
import {
	Box,
	Flex,
	Link,
	Image,
	HStack,
	useDisclosure,
	IconButton,
	VStack,
} from "@chakra-ui/react"
import { ColorModeButton, useColorModeValue } from "@/components/ui/color-mode"
import { useEffect, useState } from "react"
import { LuMenu, LuX } from "react-icons/lu"

export default function NavBar() {
	const [mounted, setMounted] = useState(false)
	const { open, onOpen, onClose, onToggle } = useDisclosure()

	useEffect(() => {
		setMounted(true)
	}, [])

	const logoBgImage = useColorModeValue("/LogoNoBg.png", "/LogoBlackNoBg.png")
	const navLinks = [
		{ name: "公司介紹", href: "/company" },
		{ name: "服務介紹", href: "/services" },
		{ name: "聯絡我們", href: "/contactUs" },
	]

	if (!mounted) return null // ❗ 等待 client-side render，再載入圖片
	return (
		<Box width={"100%"} bg={"bg.nav"} h={"6rem"}>
			<Flex gap={"4"} h={"100%"}>
				<Box
					display={"flex"}
					width={"100%"}
					alignItems={"center"}
					px={{ base: 4, md: "2rem" }}
					fontSize={{ base: "2xl", md: "4xl" }}
					fontFamily="var(--font-noto-sans-tc)"
				>
					<HStack align={"center"}>
						<Link
							href="/"
							title="回首頁"
							as={NextLink}
							fontFamily={"var(--font-noto-sans-tc)"}
						>
							<Image
								src={logoBgImage}
								alt="logo"
								w={"px"}
								h={"100px"}
								mr={{ base: 0, md: "1rem" }}
								mt={{ base: "5px", md: "10px" }}
								ml={{ base: "2px", md: "7px" }}
							/>
							堅美國際
						</Link>
					</HStack>
				</Box>

				{/* 手機Nav */}
				<Flex
					alignItems={"center"}
					px={4}
					display={{ base: "inline-flex", md: "none" }}
				>
					<IconButton size={"2xl"} onClick={onToggle}>
						{open ? <LuX /> : <LuMenu />}
					</IconButton>
					<ColorModeButton />
				</Flex>

				{/* 電腦Nav */}
				<HStack
					id="md-nav"
					display={{ base: "none", md: "flex" }}
					px={"5rem"}
					fontSize={"2xl"}
					fontFamily="var(--font-noto-serif-tc)"
					w={"100%"}
					justifyContent={"end"}
					alignItems={"center"}
					gap="20"
				>
					{navLinks.map((link, index) => (
						<Link
							key={index}
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
							href={link.href}
						>
							{link.name}
						</Link>
					))}
					<ColorModeButton />
				</HStack>

				{open && (
					<VStack
						pos="absolute"
						top="6rem"
						left={0}
						w="100%"
						bg="bg.nav"
						zIndex={99}
						py={4}
						display={{ base: "flex", md: "none" }}
						fontSize="2xl"
						fontFamily="var(--font-noto-serif-tc)"
					>
						{navLinks.map((link) => (
							<Link
								key={link.href}
								as={NextLink}
								href={link.href}
								transition="all 0.3s ease-in-out"
								_hover={{
									color: "#5B8EAE",
								}}
							>
								{link.name}
							</Link>
						))}
					</VStack>
				)}
			</Flex>
		</Box>
	)
}
