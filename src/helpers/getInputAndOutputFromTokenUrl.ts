import { TOKENS } from '../constants/addresses'
import { parseAddressCase } from '../helpers/parseAddressCase'

export function getInputAndOutputFromTokenUrl(url: string) {
	const inputSubString = 'inputCurrency='
	const outputSubString = 'outputCurrency='
	const indexOfInputCurrency = url.indexOf(inputSubString)
	const indexOfOutputCurrency = url.indexOf(outputSubString)

	type MaybeInputOutputValue = keyof typeof TOKENS

	const inputValue = url.slice(
		indexOfInputCurrency + inputSubString.length,
		indexOfOutputCurrency - 1
	) as MaybeInputOutputValue

	const outputValue = url.slice(
		indexOfOutputCurrency + outputSubString.length
	) as MaybeInputOutputValue

	// The value of and outputCurrency= often comes as just the symbol and not the token address.
	// We are covering this case, and converting it into the correct contract address via the lookup.
	// Also adding it for inputCurrency= just incase but it's most of the time just outputCurrency=

	// const inputCurrency = TOKENS[inputValue]
	// 	? parseAddressCase(lookup[inputValue])
	// 	: parseAddressCase(inputValue)

	// const outputCurrency = lookup[outputValue]
	// 	? parseAddressCase(lookup[outputValue])
	// 	: parseAddressCase(outputValue)

	// return parseInt(inputCurrency, 16) < parseInt(outputCurrency, 16)
	// 	? [inputCurrency, outputCurrency]
	// 	: [outputCurrency, inputCurrency]
}
