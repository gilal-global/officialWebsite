import { Box, Text, Heading, Icon, Image, Flex } from "@chakra-ui/react"
import { ReactNode } from "react"

type CardBoxProps = {
	title: string
	children: ReactNode
	icon: string // 接收 Chakra icon component
	bgColor?: string // 可自訂背景色
}

export const CardBox = ({
	title,
	children,
	icon,
	bgColor = "gray.100",
}: CardBoxProps) => {
	return (
		<Box
			bg={bgColor}
			px={6}
			py={2}
			borderRadius="2xl"
			boxShadow="md"
			w="100%"
			maxW="300px"
			minH="350px"
			transition={"all 0.3s ease-in-out"}
			_hover={{
				boxShadow: "xl",
				transform: "translateY(-5px)",
			}}
		>
			<Flex justify="start" gap={3} align={"center"} py={6}>
				<Image src={icon} w="55px" h="55px" mb={2} />
				<Heading
					as="h3"
					fontSize="3xl"
					mb={2}
					color={"black"}
					fontWeight={"800"}
					fontFamily="var(--font-noto-sans-tc)"
					userSelect={"none"}
				>
					{title}
				</Heading>
			</Flex>
			<Text
				mt={4}
				fontSize="2xl"
				color={"black"}
				textAlign={"justify"}
				fontFamily="var(--font-noto-serif-tc)"
				userSelect={"none"}
			>
				{children}
			</Text>
		</Box>
	)
}
