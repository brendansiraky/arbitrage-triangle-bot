import { config } from '../config'

const _TOKENS = {
	bsc: {
		mainnet: {
			WBNB: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
			CAKE: '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82',
			BUSD: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
		},
	},
}

export const TOKENS = _TOKENS[config.NETWORK][config]
