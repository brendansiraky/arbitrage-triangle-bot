import { fetchTokenLookup, TokenLookup } from '../api/fetchTokenLookup'
import { saveToFile } from '../helpers/saveToFile'
import { config } from '../config'

let tokenLookup: TokenLookup | null = null

try {
	tokenLookup =
		require(`../tokens/lookup/${config.EXCHANGE_NAME}.json`) as TokenLookup
} catch (error) {
	console.log(
		`Error importing the token list with exchange name of ${config.EXCHANGE_NAME}`
	)
}

export async function getTokenLookup() {
	if (!tokenLookup) {
		// TODO - Fix this hard coded value
		tokenLookup = await fetchTokenLookup('pancakeswap')
		saveToFile(
			`${__dirname}/../tokens/lookup/${config.EXCHANGE_NAME}.json`,
			JSON.stringify(tokenLookup, null, 2)
		)
		return tokenLookup
	}

	return tokenLookup
}
