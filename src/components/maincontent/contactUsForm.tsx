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
	Stack,
} from "@chakra-ui/react"

import { COUNTRIES } from "@/app/(main)/contactUs/countries"
import { useEffect, useState } from "react"
import { SiAxios } from "react-icons/si"
import axios from "axios"

const ContactUsForm = () => {
	const [firstName, setFirstName] = useState("")
	const [lastName, setLastName] = useState("")
	const [email, setEmail] = useState("")
	const [country, setCountry] = useState("")
	const [details, setDetails] = useState("")
	const [subject, setSubject] = useState("")

	useEffect(() => {
		axios.get("http://localhost:3133/api/user-location").then((res) => {
			if (res.status === 200) {
				console.log("Taiwan")
				setCountry("Taiwan")
			} else {
				setCountry("Taiwan")
			}
		})
	}, [])

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		const fullName = `${firstName} ${lastName}`
		const payload = {
			fullName,
			email,
			country,
			subject,
			details,
		}

		alert(
			Object.entries(payload)
				.map(([key, value]) => `${key}: ${value}`)
				.join("\n")
		)
		try {
			const res = await axios.post(
				"http://localhost:3133/api/send-email",
				payload
			)
			if (res.status === 200) {
				alert("Email sent successfully")
			}
		} catch (err) {
			if (err instanceof Error) {
				alert(err.message)
			}
		}
	}

	return (
		<Box
			as={"form"}
			onSubmit={handleSubmit}
			minH={"300px"}
			border={"3px solid #E2DED6"}
			bg={"#F4F1EA"}
			_dark={{ bg: "#18202C", border: "3px solid #3C3AB4" }}
			maxW={"2xl"}
			w={"100%"}
			mx={"auto"}
			borderRadius={"2xl"}
			boxShadow="0px 4px 4px 3px rgba(255, 255, 255, 0.21)"
			p={8}
		>
			<Fieldset.Root size="lg" w="100%" display="block">
				<Fieldset.Content w="100%">
					<Stack
						gap={4}
						w="100%"
						direction={{ base: "column", md: "row" }}
					>
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
								borderBottom={"2px solid"}
								borderColor="gray.400"
								_dark={{
									borderColor: "whiteAlpha.200",
									bg: "whiteAlpha.100",
								}}
								bg="gray.50"
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
								borderBottom={"2px solid"}
								borderColor="gray.400"
								_dark={{
									borderColor: "whiteAlpha.200",
									bg: "whiteAlpha.100",
								}}
								bg="gray.50"
							/>
						</Field.Root>
					</Stack>
					<Stack
						gap={4}
						w="100%"
						direction={{ base: "column", md: "row" }}
					>
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
								borderBottom={"2px solid"}
								borderColor="gray.400"
								_dark={{
									borderColor: "whiteAlpha.200",
									bg: "whiteAlpha.100",
								}}
								bg="gray.50"
							/>
						</Field.Root>

						<Field.Root>
							<Field.Label fontSize="2xl" my={2}>
								國家
							</Field.Label>

							<NativeSelect.Root
								w="100%"
								borderBottom={"2px solid"}
								borderColor="gray.400"
								_dark={{
									borderColor: "whiteAlpha.200",
									bg: "whiteAlpha.100",
								}}
								bg="gray.50"
								borderRadius="md"
							>
								<NativeSelect.Field
									px={4}
									fontSize="md"
									color={"black.400"}
									onChange={(e) => setCountry(e.target.value)}
									value={country}
									_focus={{
										outline: "none",
										borderColor: "blue.300",
									}}
								>
									{COUNTRIES.map((country) => (
										<option
											key={country.value}
											value={country.title}
										>
											{country.title}
										</option>
									))}
								</NativeSelect.Field>
								<NativeSelect.Indicator />
							</NativeSelect.Root>
						</Field.Root>
					</Stack>

					<Stack gap={4} w="100%">
						<Field.Root>
							<Field.Label fontSize="2xl" my={2}>
								主旨
							</Field.Label>
							<Input
								value={subject}
								onChange={(e) => setSubject(e.target.value)}
								px={4}
								placeholder="Subject"
								variant="outline"
								borderBottom={"2px solid"}
								borderColor="gray.400"
								_dark={{
									borderColor: "whiteAlpha.200",
									bg: "whiteAlpha.100",
								}}
								bg="gray.50"
							/>
						</Field.Root>
						<Field.Root></Field.Root>
					</Stack>

					<Stack gap={4} w="100%">
						<Field.Root>
							<Field.Label fontSize="2xl" my={2}>
								訊息
							</Field.Label>
							<Textarea
								value={details}
								onChange={(e) => setDetails(e.target.value)}
								px={4}
								placeholder="Details"
								variant="outline"
								borderBottom={"2px solid"}
								borderColor="gray.400"
								_dark={{
									borderColor: "whiteAlpha.200",
									bg: "whiteAlpha.100",
								}}
								bg="gray.50"
								minH={{ base: "100px", md: "200px" }}
							/>
						</Field.Root>
					</Stack>
					<Stack justify={"center"} mt={4} mx={"auto"}>
						<Button
							w="auto"
							bg={"#E1C16E"}
							_dark={{
								bg: "#3C3AB4",
								borderColor: "#3C3AB4",
								_hover: {
									bg: "#3432a1",
									transform: "scale(1.05)",
								},
							}}
							fontSize={"2xl"}
							size={"lg"}
							p={4}
							_hover={{
								bg: "#D0B057",
								transform: "scale(1.05)",
							}}
							boxShadow="md"
							minW={"100px"}
							type="submit"
						>
							送出
						</Button>
					</Stack>
				</Fieldset.Content>
			</Fieldset.Root>
		</Box>
	)
}

export default ContactUsForm
