import { Box } from "@chakra-ui/react"
import React from "react"

export default function MainContent({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<Box
			maxW={"1440px"}
			w={"100%"}
			mx={"auto"}
			background={"#0D1117"}
			px={{ base: 4, md: 8 }}
		>
			{children}
		</Box>
	)
}
