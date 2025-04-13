import CommonHeroSection from "@/components/heroSection/commonHeroSection"
import ContainerSection from "@/components/maincontent/containerSection"
import { FullWidthSection } from "@/components/maincontent/fullWidthSection"
import { Box, VStack, Text, Flex, Image } from "@chakra-ui/react"
import { VscAccount } from "react-icons/vsc"

export default function Company() {
	return (
		<>
			<Box maxW={"100%"} mx={"auto"} w={"100%"}>
				<FullWidthSection>
					<CommonHeroSection
						Title="Empowering Global Supply Chains with Excellence"
						SubTitle="我們致力於協助企業拓展全球市場，從產品開發、品牌導入、到供應鏈優化，提供一站式國際商業解決方案。"
					></CommonHeroSection>
				</FullWidthSection>
				<ContainerSection>
					<Box
						maxW={"1440px"}
						mx={"auto"}
						w={"100%"}
						// border={"1px solid red"}
						px={{ base: "12px", md: "24px" }}
						py={{ base: "64px", md: "80px" }}
					>
						<VStack spaceY={6}>
							<Box
								// border={"1px solid blue"}
								w={"100%"}
								p={"12px"}
								mx={"24px"}
							>
								<Text fontSize={"4rem"} textAlign={"center"}>
									公司介紹
								</Text>
							</Box>
							<Box
								border={"2px solid #D6B673"}
								m={"24px"}
								bgGradient={"to-b"}
								gradientFrom={"#F7F5EF"}
								gradientTo={"#DCE3EA"}
								_dark={{
									bg: "#1A2938",
								}}
								borderRadius={"2xl"}
							>
								<Flex justify={"space-between"} gapX={"64px"}>
									<Image
										borderLeftRadius={15}
										src="/company-1.jpg"
										w={"528px"}
									></Image>
									<VStack spaceY={4} px={6} py={6}>
										<Text
											fontSize={"3rem"}
											textAlign={"left"}
											w={"100%"}
											fontFamily="var(--font-noto-sans-tc)"
										>
											專業背景
										</Text>
										<Text
											fontSize={"1.5rem"}
											p={"24px"}
											fontFamily="var(--font-noto-serif-tc)"
										>
											學歷：畢業於澳洲 Monash
											University，擁有創業碩士學位（Master
											of
											Entrepreneurship），專注於國際供應鏈管理與全球商業策略。擁有全球視野與創業導向思維，兼具策略規劃能力與豐富的實務操作經驗，能靈活應對多變的國際商業環境。
											<br></br>
											<br></br>
											專業經驗：曾參與多個國際項目，專注於供應商篩選、合同談判及物流協調，積累了豐富的跨文化實踐經驗。
											<br></br>
											<br></br>
											專長：雙語能力（中英文），能高效解決語言障礙，幫助客戶跨越文化差異。
										</Text>
									</VStack>
								</Flex>
							</Box>
							<Box
								border={"2px solid #D6B673"}
								m={"24px"}
								bgGradient={"to-b"}
								gradientFrom={"#F7F5EF"}
								gradientTo={"#DCE3EA"}
								_dark={{
									bg: "#1A2938",
								}}
								borderRadius={"2xl"}
							>
								<Flex justify={"space-between"} gapX={"64px"}>
									<VStack spaceY={4} px={6} py={6}>
										<Text
											fontSize={"3rem"}
											textAlign={"left"}
											w={"100%"}
											pt={"24px"}
											pl={"24px"}
											fontFamily="var(--font-noto-sans-tc)"
										>
											使命與願景
										</Text>
										<Box
											fontSize={"1.5rem"}
											p={"24px"}
											fontFamily="var(--font-noto-serif-tc)"
										>
											<li
												style={{ marginBottom: "24px" }}
											>
												使命：以專業的供應鏈管理解決方案，幫助客戶快速啟動並優化運營，實現高效交付與成本控制。
											</li>
											<li>
												願景：成為國際市場領先的供應鏈管理與項目協調服務品牌，特別是在亞洲市場建立卓越聲譽。
											</li>
										</Box>
									</VStack>
									<Image
										src="/company-2.jpg"
										w={"617px"}
										h={"500px"}
										bgAttachment={"fixed"}
										borderRightRadius={15}
									></Image>
								</Flex>
							</Box>
							<Box
								border={"2px solid #D6B673"}
								m={"24px"}
								bgGradient={"to-b"}
								gradientFrom={"#F7F5EF"}
								gradientTo={"#DCE3EA"}
								_dark={{
									bg: "#1A2938",
								}}
								borderRadius={"2xl"}
							>
								<Flex justify={"space-between"} gapX={"64px"}>
									<Image
										borderLeftRadius={15}
										src="/company-3.jpg"
										w={"528px"}
									></Image>
									<VStack spaceY={4} px={6} py={6}>
										<Text
											fontSize={"3rem"}
											textAlign={"left"}
											w={"100%"}
											fontFamily="var(--font-noto-sans-tc)"
										>
											核心價值
										</Text>
										<Box
											fontSize={"1.5rem"}
											p={"24px"}
											fontFamily="var(--font-noto-serif-tc)"
										>
											<li
												style={{ marginBottom: "24px" }}
											>
												專業與高效：依託標準化流程和專業技術，為客戶提供高效且可靠的解決方案
											</li>
											<li
												style={{ marginBottom: "24px" }}
											>
												靈活與定制化：根據客戶的具體需求提供量身定制的服務，解決不同規模企業的實際問題。
											</li>
											<li>
												跨文化支持：突破以亞洲為主要供應端的傳統觀點，強調多國間的雙向合作與理解，促進更具彈性與平衡的國際供應鏈夥伴關係。
											</li>
										</Box>
									</VStack>
								</Flex>
							</Box>
						</VStack>
					</Box>
				</ContainerSection>
			</Box>
		</>
	)
}
