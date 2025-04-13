import { defineConfig } from "@chakra-ui/react"

export const themeConfig = defineConfig({
	cssVarsPrefix: "ck",
	globalCss: {
		"html, body": {
			color: "text.main", // ✅ 預設字色
			bg: "bg.page", // ✅ 預設背景
			fontFamily: "Arial, Helvetica, sans-serif",
			lineHeight: "1.6",
		},
	},
	theme: {
		semanticTokens: {
			colors: {
				"text.main": {
					value: {
						base: "#171717", // 淺色模式的字色
						_dark: "#ededed", // 深色模式的字色
					},
				},
				"bg.page": {
					value: {
						base: "#F6F7F9", // 淺色背景
						_dark: "#0D1117", // 深色背景
					},
				},
				"bg.nav": {
					value: {
						base: "#DDE8EF", // 淺色背景
						_dark: "#0E1628", // 深色背景
					},
				},
				"text.nav": {
					value: {
						base: "#171717", // 淺色模式的字色
						_dark: "#ededed", // 深色模式的字色
					},
				},
				"bg.hero": {
					value: {
						base: "#dedede", // 淺色背景
						_dark: "#060a0e", // 深色背景
					},
				},
				"bg.card": {
					value: {
						base: "#EAF4F9",
						_dark: "#1E2632D9",
					},
				},
				"border.divider": {
					value: {
						base: "#B0B0B0",
					},
				},
				"bg.footer": {
					value: {
						base: "#DDE8EF",
						_dark: "#0E1628",
					},
				},
			},
		},
	},
})
