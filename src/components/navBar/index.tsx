import NextLink from "next/link"
import { Box, Flex, Link } from "@chakra-ui/react"

export default function NavBar() {
	return (
		<Box width={"100%"} background={"#0E1628"} h={"6rem"}>
			<Flex gap={"4"} h={"100%"}>
				<Box
					display={"flex"}
					width={"25%"}
					alignItems={"center"}
					px={"2rem"}
					fontSize={"4xl"}
					fontFamily="var(--font-noto-sans-tc)"
				>
					<Link href="/" title="回首頁" as={NextLink}>
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
						_hover={{
							color: "yellow.200",
							transform: "translateY(-5px)",
						}}
						href="/company"
					>
						公司介紹
					</Link>
					<Link
						as={NextLink}
						transition={"all 0.3s ease-in-out"}
						_hover={{
							color: "yellow.200",
							transform: "translateY(-5px)",
						}}
						href="/services"
					>
						服務介紹
					</Link>
					<Link
						as={NextLink}
						transition={"all 0.3s ease-in-out"}
						_hover={{
							color: "yellow.200",
							transform: "translateY(-5px)",
						}}
						href="/contactUs"
					>
						聯絡我們
					</Link>
				</Flex>
			</Flex>
		</Box>
	)
}
