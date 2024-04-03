import { parseAddressCase } from '../helpers/parseAddressCase'

type TokenList = {
	name: string
	timestamp: string
	version: {
		major: number
		minor: number
		patch: number
	}
	logoURI: string
	keywords: string[]
	tokens: {
		name: string
		symbol: string
		address: string
		chainId: number
		decimals: number
		logoURI: string
	}[]
}

export type TokenLookup = { [key: string]: TokenList['tokens'][number] }

const TOKENLIST_CONFIG = {
	pancakeswap: 'https://tokens.pancakeswap.finance/coingecko.json',
	uniswap: 'https://tokens.coingecko.com/uniswap/all.json',
}

export async function fetchTokenLookup(
	exchange: keyof typeof TOKENLIST_CONFIG
) {
	try {
		const endpoint = TOKENLIST_CONFIG[exchange]
		if (!endpoint) {
			throw new Error(
				'No endpoint found when trying to fetch the token list.'
			)
		}

		const tokenListResponse = await fetch(endpoint)
		const tokenListResult = (await tokenListResponse.json()) as TokenList
		const tokenLookup = mapTokenListToLookup(tokenListResult)
		return tokenLookup
	} catch (error) {
		console.error('Error fetching token list:', error)
		throw error
	}
}

function mapTokenListToLookup(tokenList: TokenList): TokenLookup {
	return tokenList.tokens.reduce((acc, cur) => {
		const address = parseAddressCase(cur.address)
		acc[address] = {
			...cur,
			address,
		}
		return acc
	}, {} as TokenLookup)
}
