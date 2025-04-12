import LandingHeroSection from "@/components/heroSection/landingHeroSection"
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
			<Box maxW={"100%"} mx={"auto"} w={"100%"} background={"#0D1117"}>
				<LandingHeroSection></LandingHeroSection>
				<FullWidthSection>
					<Box w={"100%"} background={"#1E2632D9"}>
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
				</FullWidthSection>
				<ContainerSection>
					<Box px={{ base: 4, md: 8 }} py={16}>
						<VStack gap={20} separator={<StackSeparator />}>
							<Box
								w={"100%"}
								minH={"300px"}
								display={"flex"}
								gap={"84px"}
								p={16}
							>
								<Image
									src="/ship1.png"
									w={"500px"}
									h={"500px"}
									borderRadius={30}
								></Image>
								<Flex
									direction={"column"}
									gap={"24px"}
									flex={1}
									justifyContent={"center"}
								>
									<Text
										fontSize={"3xl"}
										p={6}
										fontFamily={"var(--font-noto-serif-tc)"}
									>
										使命：以專業的供應鏈管理解決方案，幫助客戶快速啟動並優化運營，實現高效交付與成本控制。
									</Text>
									<Text
										fontSize={"3xl"}
										p={6}
										fontFamily={"var(--font-noto-serif-tc)"}
									>
										願景：成為國際市場領先的供應鏈管理與項目協調服務品牌，特別是在亞洲市場建立卓越聲譽。
									</Text>
								</Flex>
							</Box>
							<Box
								w={"100%"}
								minH={"300px"}
								display={"flex"}
								gap={"84px"}
								p={16}
							>
								<Flex
									direction={"column"}
									gap={"24px"}
									flex={1}
									justifyContent={"center"}
								>
									<Text
										fontSize={"3xl"}
										p={6}
										fontFamily={"var(--font-noto-serif-tc)"}
									>
										協助客戶篩選可靠供應商並建立多樣化網絡以降低風險，通過談判策略和公平合同爭取最佳條件並簡化管理，從訂單到交付全程跟踪進度並解決問題以確保按時完成，同時提供質量檢測、物流管理和售後支持等增值服務提升滿意度。{" "}
									</Text>
								</Flex>
								<Image
									src="/light-trails-buildings.jpg"
									w={"500px"}
									h={"500px"}
									borderRadius={30}
								></Image>
							</Box>
							<Box
								w={"100%"}
								minH={"300px"}
								display={"flex"}
								gap={"84px"}
								p={16}
							>
								<Image
									src="/landcard3.jpeg"
									backgroundSize={"cover"}
									backgroundPosition={"center"}
									w={"500px"}
									h={"600px"}
									borderRadius={30}
								></Image>
								<Flex
									direction={"column"}
									gap={"24px"}
									flex={1}
									justifyContent={"center"}
								>
									<Text
										fontSize={"3xl"}
										p={6}
										fontFamily={"var(--font-noto-serif-tc)"}
									>
										1.雙語與跨文化支持：幫助國際企業克服語言及文化障礙
									</Text>
									<Text
										fontSize={"3xl"}
										p={6}
										fontFamily={"var(--font-noto-serif-tc)"}
									>
										2.高性價比的定制化服務：適合中小企業與初創公司，靈活滿足客戶需求
									</Text>
									<Text
										fontSize={"3xl"}
										p={6}
										fontFamily={"var(--font-noto-serif-tc)"}
									>
										3.增值服務全面：涵蓋質檢、物流協調、售後支持，提供全流程解決方案
									</Text>
									<Text
										fontSize={"3xl"}
										p={6}
										fontFamily={"var(--font-noto-serif-tc)"}
									>
										4.專注亞洲市場：為希望進入中國、越南等亞洲市場的企業提供深入支持
									</Text>
								</Flex>
							</Box>
						</VStack>
					</Box>
				</ContainerSection>
			</Box>
		</>
	)
}
