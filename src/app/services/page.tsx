import React from "react"
import NextLink from "next/link"
import {
	Box,
	Grid,
	Flex,
	Heading,
	Center,
	Button,
	Link,
} from "@chakra-ui/react"
import { servicesData } from "@/app/services/ServicesData"
import CommonHeroSection from "@/components/heroSection/commonHeroSection"
import { FullWidthSection } from "@/components/maincontent/fullWidthSection"
import { ServiceCard } from "@/components/maincontent/serviceCardBox"
export default function Services() {
	return (
		<Box maxW={"100%"} mx={"auto"} w={"100%"}>
			<FullWidthSection>
				<CommonHeroSection
					Title="專業創造價值：誠信建立長遠合作"
					SubTitle="以創新與效率為核心，結合多國市場經驗與AI科技應用，讓您的產品與品牌在國際市場中脫穎而出"
				></CommonHeroSection>
			</FullWidthSection>

			<FullWidthSection>
				<Box
					bgImage="url(/service-2.jpg)"
					_dark={{
						bgImage: "url(/service-1.jpg)",
					}}
					bgSize="cover"
					bgPos="center"
					bgRepeat="no-repeat"
					w="100%"
					mx="auto"
					position="relative"
				>
					<Box
						position="absolute"
						display={"none"}
						inset={0}
						// bg="rgba(255,255,255,0.3)"
						_dark={{
							bg: "rgba(0, 0, 0, 0.6)",
							display: "block",
						}}
						zIndex={1}
					/>
					<Flex
						position="relative"
						zIndex={2}
						direction="column"
						maxW="1440px"
						mx="auto"
						px={{ base: 8, md: 20 }}
					>
						<Center minH="200px">
							<Heading
								as="h2"
								fontSize="4rem"
								m={0}
								fontFamily={"var(--font-noto-sans-tc)"}
								userSelect={"none"}
							>
								服務內容
							</Heading>
						</Center>

						<Grid
							templateColumns={{
								base: "1fr",
								md: "repeat(2, 1fr)",
							}}
							gap={{ base: 8, md: 16 }}
							justifyContent="center"
							p={{ md: 10 }}
							minH="500px"
						>
							{servicesData.map((s, i) => (
								<ServiceCard key={i} {...s} />
							))}
						</Grid>

						<Flex justify="center" my={8}>
							<NextLink href="/contactUs" passHref>
								<Button
									height="60px"
									minW="200px"
									bg="blue.400"
									color="white"
									px={8}
									py={6}
									borderRadius="full"
									fontSize="1.5rem"
									_hover={{
										bg: "blue.500",
										transform: "scale(1.05)",
									}}
									boxShadow="md"
								>
									立即預約
								</Button>
							</NextLink>
						</Flex>
					</Flex>
				</Box>
			</FullWidthSection>
		</Box>
	)
}
