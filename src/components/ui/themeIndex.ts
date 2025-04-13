import { createSystem, defaultConfig } from "@chakra-ui/react"
import { themeConfig } from "@/components/ui/themeConfig" // 就是你定義的 defineConfig

const system = createSystem(defaultConfig, themeConfig)

export default system
