import { Box } from "@chakra-ui/react"

export default function ContainerSection({
	children,
	background = "bg.page",
}: {
	children: React.ReactNode
	background?: string
}) {
	return (
		<Box
			maxW={"1440px"}
			w={"100%"}
			mx={"auto"}
			bg={background}
			px={{ base: 4, md: 8 }}
		>
			{children}
		</Box>
	)
}
