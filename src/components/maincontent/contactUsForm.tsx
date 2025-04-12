"use client"

import {
	Box,
	Fieldset,
	Field,
	Input,
	FieldRoot,
	HStack,
	NativeSelect,
	Textarea,
	Button,
} from "@chakra-ui/react"

import { COUNTRIES } from "@/app/contactUs/countries"
import { useState } from "react"

const contactUsForm = () => {
	const [firstName, setFirstName] = useState("")
	const [lastName, setLastName] = useState("")
	const [email, setEmail] = useState("")
	const [country, setCountry] = useState("")
	const [details, setDetails] = useState("")
	const [subject, setSubject] = useState("")

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
	}

	return (
		<Box
			as={"form"}
			onSubmit={handleSubmit}
			minH={"300px"}
			border={"3px solid #3C3AB4"}
			bgColor={"#18202C"}
			maxW={"2xl"}
			w={"100%"}
			mx={"auto"}
			borderRadius={"2xl"}
			boxShadow="0px 4px 4px 3px rgba(255, 255, 255, 0.21)"
			p={8}
		>
			<Fieldset.Root size="lg" w="100%" display="block">
				<Fieldset.Content w="100%">
					<HStack gap={4} w="100%">
						<Field.Root>
							<Field.Label fontSize="2xl" my={2}>
								名稱
							</Field.Label>
							<Input
								value={firstName}
								onChange={(e) => setFirstName(e.target.value)}
								px={4}
								placeholder="First Name"
								variant="outline"
								border="2px solid"
								borderColor="whiteAlpha.200"
								bg="whiteAlpha.100"
							/>
						</Field.Root>

						<Field.Root>
							<Field.Label fontSize="2xl" my={2}>
								姓氏
							</Field.Label>
							<Input
								value={lastName}
								onChange={(e) => setLastName(e.target.value)}
								px={4}
								placeholder="Last Name"
								variant="outline"
								border="2px solid"
								borderColor="whiteAlpha.200"
								bg="whiteAlpha.100"
							/>
						</Field.Root>
					</HStack>
					<HStack gap={4} w="100%">
						<Field.Root>
							<Field.Label fontSize="2xl" my={2}>
								信箱
							</Field.Label>
							<Input
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								px={4}
								placeholder="Email"
								variant="outline"
								border="2px solid"
								borderColor="whiteAlpha.200"
								bg="whiteAlpha.100"
							/>
						</Field.Root>

						<Field.Root>
							<Field.Label fontSize="2xl" my={2}>
								國家
							</Field.Label>

							<NativeSelect.Root
								w="100%"
								bg="whiteAlpha.100"
								border="2px solid"
								borderColor="whiteAlpha.200"
								borderRadius="md"
							>
								<NativeSelect.Field
									px={4}
									fontSize="md"
									color="white"
									_focus={{
										outline: "none",
										borderColor: "blue.300",
									}}
								>
									{COUNTRIES.map((country) => (
										<option
											key={country.value}
											value={country.value}
										>
											{country.title}
										</option>
									))}
								</NativeSelect.Field>
								<NativeSelect.Indicator />
							</NativeSelect.Root>
						</Field.Root>
					</HStack>

					<HStack gap={4} w="100%">
						<Field.Root>
							<Field.Label fontSize="2xl" my={2}>
								主旨
							</Field.Label>
							<Input
								value={subject}
								onChange={(e) => setEmail(e.target.value)}
								px={4}
								placeholder="Subject"
								variant="outline"
								border="2px solid"
								borderColor="whiteAlpha.200"
								bg="whiteAlpha.100"
							/>
						</Field.Root>
						<Field.Root></Field.Root>
					</HStack>

					<HStack gap={4} w="100%">
						<Field.Root>
							<Field.Label fontSize="2xl" my={2}>
								訊息
							</Field.Label>
							<Textarea
								value={details}
								onChange={(e) => setEmail(e.target.value)}
								px={4}
								placeholder="Details"
								variant="outline"
								border="2px solid"
								borderColor="whiteAlpha.200"
								bg="whiteAlpha.100"
								minH={"200px"}
							/>
						</Field.Root>
					</HStack>
					<HStack justify={"center"} mt={4}>
						<Button
							bg={"#3C3AB4"}
							border={"2px solid #3C3AB4"}
							fontSize={"2xl"}
							size={"lg"}
							p={4}
						>
							送出
						</Button>
					</HStack>
				</Fieldset.Content>
			</Fieldset.Root>
		</Box>
	)
}

export default contactUsForm
