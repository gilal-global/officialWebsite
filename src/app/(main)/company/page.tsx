import CommonHeroSection from "@/components/heroSection/commonHeroSection"
import ContainerSection from "@/components/maincontent/containerSection"
import { FullWidthSection } from "@/components/maincontent/fullWidthSection"
import { Box, VStack, Text, Flex, Image, SimpleGrid } from "@chakra-ui/react"
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
						px={{ base: "12px", md: "24px" }}
						py={{ base: 8, md: 10 }}
					>
						<VStack spaceY={6}>
							<Box
								// border={"1px solid blue"}
								w={"100%"}
								m={"24px"}
								userSelect={"none"}
							>
								<Text
									fontSize={"4rem"}
									textAlign={"center"}
									fontFamily={"var(--font-noto-sans-tc)"}
								>
									公司介紹
								</Text>
							</Box>

							<SimpleGrid
								columns={{ base: 1, md: 2 }}
								spaceX={0}
								spaceY={0}
								border="2px solid #D6B673"
								m="24px"
								borderRadius="2xl"
								overflow={"hidden"}
							>
								{/* 左邊圖片 */}
								<Image
									src="/company-1.jpg"
									objectFit="cover"
									w="100%"
									h="100%"
									borderLeftRadius={{ md: "2xl" }}
									borderTopRadius={{ base: "2xl", md: "0" }}
								/>

								{/* 右邊文字區 */}
								<VStack
									spaceX={4}
									spaceY={4}
									px={6}
									py={6}
									justify="center"
									align="start"
									userSelect="none"
									bgGradient={"to-b"}
									gradientFrom={"#F7F5EF"}
									gradientTo={"#DCE3EA"}
									_dark={{
										bg: "#1A2938",
									}}
								>
									<Text
										fontSize="3rem"
										textAlign={{
											base: "center",
											md: "left",
										}}
										w="100%"
										fontFamily="var(--font-noto-sans-tc)"
									>
										專業背景
									</Text>

									{[
										"我們專注於國際供應鏈管理與全球商業策略，結合國際視野與創業精神，致力於為客戶提供靈活、實用且貼近市場需求的解決方案。",
										"擁有豐富的實務經驗與跨文化溝通能力，我們曾參與多項國際專案，涵蓋供應商篩選、合同談判及物流協調，能從實戰中為您找到最合適的合作方式。",
										"我們擅長以中英文雙語或其他語言協助企業消弭語言與文化的隔閡，讓每一場跨國合作都更加順利、自然，也更具效率。",
										"我們相信，每一段合作，都是一場共創價值的旅程。",
									].map((text, idx) => (
										<Text
											key={idx}
											fontSize={{
												base: "lg",
												md: "1.5rem",
											}}
											lineHeight={{
												base: "1.6",
												md: "1.5",
											}}
											p="1rem"
											fontFamily="var(--font-noto-serif-tc)"
											textAlign={{
												base: "left",
												md: "justify",
											}}
										>
											{text}
										</Text>
									))}
								</VStack>
							</SimpleGrid>

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
								<Flex
									direction={{ base: "column", md: "row" }}
									justify={"space-between"}
									gapX={"64px"}
								>
									<Image
										src="/company-2.jpg"
										w={"617px"}
										h={{ base: "2xs", md: "500px" }}
										bgAttachment={"fixed"}
										borderRightRadius={{ base: 0, md: 15 }}
										borderTopRadius={{ base: 15, md: 0 }}
										order={{ base: 1, md: 2 }}
									></Image>
									<VStack
										spaceY={4}
										px={6}
										py={6}
										order={{ base: 2, md: 1 }}
									>
										<Text
											fontSize={"3rem"}
											textAlign={{
												base: "center",
												md: "left",
											}}
											w={"100%"}
											fontFamily="var(--font-noto-sans-tc)"
											pt={"24px"}
											pl={"24px"}
										>
											使命與願景
										</Text>
										<Box
											fontSize={{
												base: "lg",
												md: "1.5rem",
											}}
											lineHeight={{
												base: "1.6",
												md: "1.5",
											}}
											p={{
												base: "1rem",
												md: "1.5rem",
											}}
											fontFamily="var(--font-noto-serif-tc)"
											textAlign={{
												base: "left",
												md: "justify",
											}}
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
								<Flex
									direction={{ base: "column", md: "row" }}
									justify={"space-between"}
									gapX={"64px"}
								>
									<Image
										borderLeftRadius={15}
										src="/company-3.jpg"
										w={"528px"}
									></Image>
									<VStack spaceY={4} px={6} py={6}>
										<Text
											fontSize={"3rem"}
											textAlign={{
												base: "center",
												md: "left",
											}}
											w={"100%"}
											fontFamily="var(--font-noto-sans-tc)"
										>
											核心價值
										</Text>
										<Box
											fontSize={{
												base: "lg",
												md: "1.5rem",
											}}
											lineHeight={{
												base: "1.6",
												md: "1.5",
											}}
											p={{
												base: "1rem",
												md: "1.5rem",
											}}
											fontFamily="var(--font-noto-serif-tc)"
											textAlign={{
												base: "left",
												md: "justify",
											}}
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
