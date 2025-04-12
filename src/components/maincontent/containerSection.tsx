import { Box } from "@chakra-ui/react"

export default function ContainerSection({
	children,
	background = "#0D1117",
}: {
	children: React.ReactNode
	background?: string
}) {
	return (
		<Box
			maxW={"1440px"}
			w={"100%"}
			mx={"auto"}
			background={background}
			px={{ base: 4, md: 8 }}
		>
			{children}
		</Box>
	)
}
