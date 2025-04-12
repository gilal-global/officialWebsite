// FullWidthSection.tsx
import { Box } from "@chakra-ui/react"

export const FullWidthSection = ({
	children,
	background = "#0D1117",
}: {
	children: React.ReactNode
	background?: string
}) => (
	<Box w="100%" bg={background} overflowX="hidden">
		{children}
	</Box>
)
