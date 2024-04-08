import { fetchAllPools } from './api/fetchAllPools'

// Example usage:
const network = 'eth'
const exchange = 'uniswap_v3'

fetchAllPools(network, exchange)
	.then((allPools) => {
		console.log('Fetched all pools:', allPools.length)
		// Process the fetched pools here
	})
	.catch((error) => {
		// Handle errors here
	})
