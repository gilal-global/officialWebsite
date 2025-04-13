"use client"

import { ChakraProvider } from "@chakra-ui/react"
import systemTheme from "@/components/ui/themeIndex"
import { ColorModeProvider, type ColorModeProviderProps } from "./color-mode"

export function Provider(props: ColorModeProviderProps) {
	return (
		<ChakraProvider value={systemTheme}>
			<ColorModeProvider {...props} />
		</ChakraProvider>
	)
}
