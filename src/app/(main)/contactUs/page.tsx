import CommonHeroSection from "@/components/heroSection/commonHeroSection"
import ContainerSection from "@/components/maincontent/containerSection"
import ContactUsForm from "@/components/maincontent/contactUsForm"
import { FullWidthSection } from "@/components/maincontent/fullWidthSection"
import { Box, Heading, HStack, VStack, Text } from "@chakra-ui/react"
import React from "react"

const contactUs = () => {
	return (
		<Box maxW={"100%"} mx={"auto"} w={"100%"}>
			<FullWidthSection>
				<CommonHeroSection
					Title="精準支援每一個商業階段"
					SubTitle="無論您是剛起步的品牌，還是準備拓展全球的企業，我們都能以專業與彈性，成為您值得信賴的夥伴。"
				></CommonHeroSection>
			</FullWidthSection>
			<ContainerSection>
				<VStack py={12} px={6} justify={"center"} gap={6}>
					<Box p={4}>
						<Heading
							fontSize={"5xl"}
							fontFamily={"var(--font-noto-sans-tc)"}
						>
							聯絡我們
						</Heading>
					</Box>
					<Box p={6} maxW={"2xl"}>
						<Text
							fontSize={"2xl"}
							textAlign={"justify"}
							fontFamily={"var(--font-noto-serif-tc)"}
						>
							我們提供靈活多元的合作模式，根據您的需求量身打造最適合的國際商務解決方案。
							<br></br>
							<br></br>
							無論您是初創企業、製造商，或欲開拓海外市場的品牌，我們都能是您最可靠的合作夥伴。
							<br></br>
							<br></br>
							📩 歡迎聯繫我們，討論您的國際化計畫！<br></br> ✉️
							info@gilail.com | 📞 +886-911-388-897
						</Text>
					</Box>
					<ContactUsForm></ContactUsForm>
				</VStack>
			</ContainerSection>
		</Box>
	)
}

export default contactUs
