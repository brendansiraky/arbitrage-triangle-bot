import { fetchPool, Pool } from './fetchPool' // Import the original fetchPools function

export async function fetchAllPools(
	network: string,
	exchange: string
): Promise<Pool[]> {
	const allPools: Pool[] = []
	let currentPage = 1

	while (currentPage <= 10) {
		// Assuming 10 pages maximum which is outlined in the geckoterminal docs
		try {
			const pagePools = await fetchPool(network, exchange, currentPage)
			allPools.push(...pagePools)
		} catch (error) {
			console.error(
				`Error fetching pools from page ${currentPage}:`,
				error
			)
		}

		currentPage++
	}

	return allPools
}
