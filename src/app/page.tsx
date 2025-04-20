import Footer from "@/components/footer"
import LandingHeroSection from "@/components/heroSection/landingHeroSection"
import LandingNavBar from "@/components/landingNavBar"
import { CardBox } from "@/components/maincontent/cardbox"
import ContainerSection from "@/components/maincontent/containerSection"
import { FullWidthSection } from "@/components/maincontent/fullWidthSection"
import {
	Box,
	Flex,
	Icon,
	Image,
	VStack,
	Text,
	StackSeparator,
	Stack,
	Heading,
} from "@chakra-ui/react"
import { wrap } from "module"

const cardData = [
	{
		title: "初創公司",
		description:
			"加速供應鏈啟動，解決兼顧團隊效率與成本的痛點，節省時間與成本。",
		bgColor: "purple.200",
		icon: "/work-from-home.png",
	},
	{
		title: "中小企業",
		description:
			"外部資源不足？我們協助媒合可靠供應商與物流夥伴，滿足外包需求。",
		bgColor: "green.200",
		icon: "/office.png",
	},
	{
		title: "國際公司",
		description:
			"協助快速進入亞洲市場，降低文化與語言障礙風險，優化在地佈局。",
		bgColor: "blue.200",
		icon: "/partnership.png",
	},
]

export default function Home() {
	return (
		<>
			<Box maxW={"100%"} mx={"auto"} w={"100%"}>
				<LandingNavBar />
				<Box>
					<Heading
						fontSize="5xl"
						lineHeight="1.2"
						letterSpacing="tight"
						my={12}
						fontFamily="var(--font-noto-sans-tc)"
						userSelect={"none"}
						textAlign={{ base: "center", md: "center" }}
					>
						供應到人才:全面進化的顧問夥伴
					</Heading>
					<Text
						fontSize="2xl"
						fontFamily="var(--font-noto-serif-tc)"
						userSelect={"none"}
						textAlign={{ base: "center", md: "center" }}
					>
						我們整合供應鏈與人力資源兩大核心，提供一站式專業顧問服務，協助企業提升效率、強化競爭力，實現全面升級。
					</Text>

					<Box
						w="100%"
						maxW="1440px"
						mx="auto"
						bgImage="url(/HeroLandWhite.jpg)"
						_dark={{
							bgImage: "url(/HeroLand.JPG)",
						}}
						bgSize="cover"
						bgPos="center"
						bgRepeat="no-repeat"
					/>

					<Image
						src="HeroLandWhite.jpg"
						w="100%"
						maxW="1440px"
						mx="auto"
						my={12}
						h={"2xl"}
						userSelect={"none"}
						draggable="false"
						alt="HeroImg"
					></Image>
				</Box>
				<ContainerSection>
					<Box w={"100%"} bg={"#DADADA"}>
						<Flex
							gap={"10vw"}
							justify={"center"}
							wrap={"wrap"}
							py={12}
						>
							{cardData.map((card, index) => (
								<CardBox key={index} {...card}>
									{card.description}
								</CardBox>
							))}
						</Flex>
					</Box>
				</ContainerSection>
				<ContainerSection>
					<Box px={{ base: 4, md: 8 }} py={{ base: 8, md: 12 }}>
						<Stack
							direction={{ base: "column" }}
							gap={{ base: 8, md: 16 }}
							separator={
								<StackSeparator
									borderColor={"border.divider"}
								/>
							}
						>
							<Flex
								w={"100%"}
								minH={"300px"}
								direction={{ base: "column", md: "row" }}
								p={{ base: 0, md: 16 }}
								gap={{ base: 0, md: 8 }}
							>
								<Image
									src="/Ship1.jpg"
									w={{ base: "100%", md: "500px" }}
									borderRadius={30}
									h={{ base: "300px", md: "auto" }}
									draggable="false"
									objectFit={"cover"}
								></Image>
								<Flex
									direction={{ base: "column", md: "column" }}
									gap={{ base: 0, md: 8 }}
									flex={1}
									justifyContent={"center"}
								>
									<Text
										fontSize={{ base: "2xl", md: "3xl" }}
										p={6}
										fontFamily={"var(--font-noto-serif-tc)"}
									>
										使命：以專業的供應鏈管理解決方案，幫助客戶快速啟動並優化運營，實現高效交付與成本控制。
									</Text>
									<Text
										fontSize={{ base: "2xl", md: "3xl" }}
										p={6}
										fontFamily={"var(--font-noto-serif-tc)"}
									>
										願景：成為國際市場領先的供應鏈管理與項目協調服務品牌，特別是在亞洲市場建立卓越聲譽。
									</Text>
								</Flex>
							</Flex>
							<Flex
								w={"100%"}
								minH={"300px"}
								direction={{ base: "column", md: "row" }}
								p={{ base: 0, md: 16 }}
								gap={{ base: 0, md: 8 }}
							>
								<Image
									src="/light-trails-buildings.jpg"
									w={{ base: "100%", md: "500px" }}
									borderRadius={30}
									h={{ base: "300px", md: "auto" }}
									draggable="false"
									objectFit={"cover"}
									order={{ base: 0, md: 1 }}
								></Image>
								<Flex
									direction={"column"}
									gap={"24px"}
									flex={1}
									justifyContent={"center"}
									order={{ base: 1, md: 0 }}
								>
									<Text
										fontSize={{ base: "2xl", md: "3xl" }}
										p={6}
										fontFamily={"var(--font-noto-serif-tc)"}
									>
										協助客戶篩選可靠供應商並建立多樣化網絡以降低風險，通過談判策略和公平合同爭取最佳條件並簡化管理，從訂單到交付全程跟踪進度並解決問題以確保按時完成，同時提供質量檢測、物流管理和售後支持等增值服務提升滿意度。{" "}
									</Text>
								</Flex>
							</Flex>
							<Flex
								w={"100%"}
								minH={"300px"}
								direction={{ base: "column", md: "row" }}
								p={{ base: 0, md: 16 }}
								gap={{ base: 0, md: 8 }}
							>
								<Image
									src="/landcard3.jpg"
									w={{ base: "100%", md: "500px" }}
									borderRadius={30}
									h={{ base: "300px", md: "auto" }}
									draggable="false"
									objectFit={"cover"}
								></Image>
								<Flex
									direction={"column"}
									gap={{ base: 0, md: 8 }}
									flex={1}
									justifyContent={"center"}
								>
									<Text
										fontSize={{ base: "2xl", md: "3xl" }}
										p={6}
										fontFamily={"var(--font-noto-serif-tc)"}
									>
										1.雙語與跨文化支持：幫助國際企業克服語言及文化障礙
									</Text>
									<Text
										fontSize={{ base: "2xl", md: "3xl" }}
										p={6}
										fontFamily={"var(--font-noto-serif-tc)"}
									>
										2.高性價比的定制化服務：適合中小企業與初創公司，靈活滿足客戶需求
									</Text>
									<Text
										fontSize={{ base: "2xl", md: "3xl" }}
										p={6}
										fontFamily={"var(--font-noto-serif-tc)"}
									>
										3.增值服務全面：涵蓋質檢、物流協調、售後支持，提供全流程解決方案
									</Text>
									<Text
										fontSize={{ base: "2xl", md: "3xl" }}
										p={6}
										fontFamily={"var(--font-noto-serif-tc)"}
									>
										4.專注亞洲市場：為希望進入中國、越南等亞洲市場的企業提供深入支持
									</Text>
								</Flex>
							</Flex>
						</Stack>
					</Box>
				</ContainerSection>

				<Footer />
			</Box>
		</>
	)
}
