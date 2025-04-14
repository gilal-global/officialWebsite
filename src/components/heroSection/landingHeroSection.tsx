import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react"
import NextLink from "next/link"
export default function LandingHeroSection() {
	return (
		<Box position="relative" w="100%" minH="600px" bg={"bg.hero"}>
			{/* 內容容器：控制寬度 */}
			<Box
				w="100%"
				maxW="1440px"
				mx="auto"
				position="relative"
				bgImage="url(/HeroLandWhite.jpg)"
				_dark={{
					bgImage: "url(/HeroLand.JPG)",
				}}
				bgSize="cover"
				bgPos="center"
				bgRepeat="no-repeat"
			>
				{/* 黑色遮罩層只套在 maxW 區域上 */}
				<Box
					position="absolute"
					inset={0}
					bg=""
					_dark={{
						bg: "rgba(0, 0, 0, 0.5)",
					}}
					zIndex={1}
				/>

				{/* 內容層 */}
				<Flex
					position="relative"
					zIndex={2}
					direction={{ base: "column", md: "row" }}
					px={{ base: 4, md: "108px" }}
					py={{ base: 6, md: "36px" }}
					minH="600px"
				>
					<Flex
						direction="column"
						gap={4}
						w={{ base: "100%", md: "50%" }}
						align={{ base: "center", md: "start" }}
					>
						<Heading
							fontSize="5xl"
							lineHeight="1.2"
							letterSpacing="tight"
							my={12}
							fontFamily="var(--font-noto-sans-tc)"
							userSelect={"none"}
							textAlign={{ base: "center", md: "start" }}
						>
							供應到人才:全面進化的顧問夥伴
						</Heading>
						<Text
							fontSize="2xl"
							fontFamily="var(--font-noto-serif-tc)"
							userSelect={"none"}
							textAlign={{ base: "center", md: "start" }}
						>
							我們整合供應鏈與人力資源兩大核心，提供一站式專業顧問服務，協助企業提升效率、強化競爭力，實現全面升級。
						</Text>
						<NextLink href="/contactUs">
							<Button
								size="md"
								bg="#E8A63D"
								_dark={{
									bg: "purple.800",
									_hover: {
										backgroundColor: "purple.700",
										transform: "translateY(-5px)",
									},
								}}
								my="24px"
								alignSelf="start"
								py="2rem"
								px="2rem"
								fontFamily="var(--font-noto-sans-tc)"
								fontSize="4xl"
								transition={"all 0.3s ease-in-out"}
								_hover={{
									backgroundColor: "#D48A1C",
									transform: "translateY(-5px)",
								}}
							>
								立即預約
							</Button>
						</NextLink>
					</Flex>
					<Flex w={{ base: 0, md: "50%" }} />
				</Flex>
			</Box>
		</Box>
	)
}
