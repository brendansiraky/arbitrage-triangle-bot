interface PriceChangePercentage {
	m5: string
	h1: string
	h6: string
	h24: string
}

interface Transactions {
	m5: {
		buys: number
		sells: number
		buyers: number
		sellers: number
	}
	m15: {
		buys: number
		sells: number
		buyers: number
		sellers: number
	}
	m30: {
		buys: number
		sells: number
		buyers: number
		sellers: number
	}
	h1: {
		buys: number
		sells: number
		buyers: number
		sellers: number
	}
	h24: {
		buys: number
		sells: number
		buyers: number
		sellers: number
	}
}

interface VolumeUSD {
	m5: string
	h1: string
	h6: string
	h24: string
}

interface PoolAttributes {
	base_token_price_usd: string
	base_token_price_native_currency: string
	quote_token_price_usd: string
	quote_token_price_native_currency: string
	base_token_price_quote_token: string
	quote_token_price_base_token: string
	address: string
	name: string
	pool_created_at: string
	fdv_usd: string
	market_cap_usd: string | null
	price_change_percentage: PriceChangePercentage
	transactions: Transactions
	volume_usd: VolumeUSD
	reserve_in_usd: string
}

interface TokenData {
	id: string
	type: string
}

interface Relationship {
	data: TokenData
}

interface PoolRelationships {
	base_token: Relationship
	quote_token: Relationship
	dex: Relationship
}

export interface Pool {
	id: string
	type: string
	attributes: PoolAttributes
	relationships: PoolRelationships
}

export async function fetchPool(
	network: string,
	exchange: string,
	page: number
): Promise<Pool[]> {
	try {
		const url = `https://api.geckoterminal.com/api/v2/networks/${network}/dexes/${exchange}/pools?page=${page}`
		const response = await fetch(url)

		if (!response.ok) {
			throw new Error(`Failed to fetch pools. Status: ${response.status}`)
		}

		const responseData = (await response.json()) as { data: Pool[] }
		return responseData.data
	} catch (error) {
		console.error('Error fetching pools:', error)
		throw error
	}
}
