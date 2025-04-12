import { Box, Flex, Grid, Heading, Text, Image, Center } from "@chakra-ui/react"

type ServiceCardBoxProps = {
	title: string
	color: string
	image: string
	items: string[]
}

export const ServiceCard = ({
	title,
	color,
	image,
	items,
}: ServiceCardBoxProps) => (
	<Flex
		bgColor="#1F2630"
		border="3px solid #3A3979"
		borderRadius="40px"
		minH="500px"
		minW="500px"
		direction="column"
		align="center"
	>
		<Center p="12px">
			<Center w="150px" h="150px" bgColor={color} borderRadius="full">
				<Image src={image} w="108px" h="108px" />
			</Center>
		</Center>
		<Box my="12px">
			<Text fontSize="3xl" fontFamily="var(--font-noto-sans-tc)">
				{" "}
				{title}
			</Text>
		</Box>
		<Box my="12px">
			{items.map((item, index) => (
				<li
					key={index}
					style={{
						margin: "12px",
						fontSize: "1.25rem",
						fontFamily: "var(--font-noto-serif-tc)",
					}}
				>
					{item}
				</li>
			))}
		</Box>
	</Flex>
)
