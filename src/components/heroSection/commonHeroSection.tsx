import { Box, Flex, Heading, Text } from "@chakra-ui/react"

type CommonHeroSectionProps = {
	Title?: string
	SubTitle?: string
}

export default ({ Title, SubTitle }: CommonHeroSectionProps) => (
	<Box position="relative" w="100%" minH="500px">
		{/* 內容容器：控制寬度 */}
		<Box
			w="100%"
			mx="auto"
			position="relative"
			bgImage="url(/light-trails-buildings.jpg)"
			bgSize="cover"
			bgPos="center"
			bgRepeat="no-repeat"
		>
			{/* 黑色遮罩層只套在 maxW 區域上 */}
			<Box
				position="absolute"
				inset={0}
				_dark={{
					bg: "rgba(0, 0, 0, 0.6)",
				}}
				bg="rgba(255,255,255,0.6)"
				zIndex={1}
			/>

			{/* 內容層 */}
			<Flex
				position="relative"
				zIndex={2}
				direction={{ base: "column", md: "row" }}
				px={{ base: 4, md: "108px" }}
				py="36px"
				minH="500px"
			>
				<Flex
					direction="column"
					gap={16}
					w={{ base: "100%", md: "100%" }}
					px={{ base: "160px", md: "160px" }}
				>
					<Box
						maxW={{ base: "100%", xl: "1280px", "2xl": "1280px" }}
						mx={{ base: "0", xl: "auto", "2xl": "auto" }}
					>
						<Heading
							fontSize="5xl"
							lineHeight="1.2"
							letterSpacing="tight"
							my={12}
							fontFamily="var(--font-noto-sans-tc)"
							userSelect={"none"}
							textShadow="0px 0px 10px rgba(0, 0, 0, 0.5)"
						>
							{Title}
						</Heading>
					</Box>

					<Box
						maxW={{ base: "100%", xl: "1280px", "2xl": "1280px" }}
						mx={{ base: "0", xl: "0", "2xl": "auto" }}
					>
						<Text
							fontSize="2xl"
							fontFamily="var(--font-noto-serif-tc)"
							textAlign={"center"}
							userSelect={"none"}
							textShadow="0px 0px 10px rgba(0, 0, 0, 0.5)"
						>
							{SubTitle}
						</Text>
					</Box>
				</Flex>
			</Flex>
		</Box>
	</Box>
)
