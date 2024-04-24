const pool = {
	id: 'eth_0x88e6a0c2ddd26feeb64f039a2c41296fcb3f5640',
	type: 'pool',
	attributes: {
		base_token_price_usd: '3631.76700885736',
		base_token_price_native_currency: '1.0',
		quote_token_price_usd: '1.00042198591561',
		quote_token_price_native_currency: '0.000275235895266288',
		base_token_price_quote_token: '3633.25',
		quote_token_price_base_token: '0.00027524',
		address: '0x88e6a0c2ddd26feeb64f039a2c41296fcb3f5640',
		name: 'WETH / USDC 0.05%',
		pool_created_at: '2021-12-29T12:35:14Z',
		fdv_usd: '10942688638',
		market_cap_usd: null,
		price_change_percentage: {
			m5: '0',
			h1: '-0.01',
			h6: '-1.6',
			h24: '-0.61',
		},
		transactions: {
			m5: {
				buys: 2,
				sells: 3,
				buyers: 2,
				sellers: 3,
			},
			m15: {
				buys: 35,
				sells: 30,
				buyers: 29,
				sellers: 25,
			},
			m30: {
				buys: 65,
				sells: 68,
				buyers: 52,
				sellers: 56,
			},
			h1: {
				buys: 103,
				sells: 141,
				buyers: 84,
				sellers: 108,
			},
			h24: {
				buys: 2860,
				sells: 3643,
				buyers: 1596,
				sellers: 2341,
			},
		},
		volume_usd: {
			m5: '254170.184585298',
			h1: '15912899.4286613',
			h6: '175404839.702648',
			h24: '558725469.218964',
		},
		reserve_in_usd: '204997035.6433',
	},
	relationships: {
		base_token: {
			data: {
				id: 'eth_0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
				type: 'token',
			},
		},
		quote_token: {
			data: {
				id: 'eth_0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
				type: 'token',
			},
		},
		dex: {
			data: {
				id: 'uniswap_v3',
				type: 'dex',
			},
		},
	},
}

function toWei(value, decimals) {
	return (value * 10 ** decimals).toString()
}

function fromWei(value, decimals) {
	return (value / 10 ** decimals).toString()
}

const liquidity = '23050248451123575882'

const fromWeiValue = fromWei(liquidity, 18)

console.log(fromWeiValue)
