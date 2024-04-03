export function parseAddressCase(address: string) {
	const rest = address.slice(2).toUpperCase()
	return `0x${rest}`
}
