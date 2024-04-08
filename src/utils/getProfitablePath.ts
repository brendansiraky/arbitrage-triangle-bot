// import { TOKENS } from '../constants/addresses'
// import { parseAddressCase } from '../helpers/parseAddressCase'
// import { getTokenLookup } from './getTokenLookup'
// // import { makeGraph } from './makeGraph'

// // import { findCycles } from './findCycles'
// // import { getTokenLookup } from './tokenLookup'

// export async function getProfitablePath(startingBalance: number) {
// 	const tokenLookup = await getTokenLookup()

// 	if (!startingBalance) throw new Error('Need to supply a starting balance')
// 	const nodes = await makeGraph()

// 	const startingNode = nodes[parseAddressCase(TOKENS.bsc.mainnet.WBNB)]
// 	if (!startingNode) {
// 		console.error(
// 			`Could not initialise findCycles with our startingNode address`
// 		)
// 	} else {
// 		const cycles = findCycles(startingNode, startingBalance)

// 		const mappedPath = cycles
// 			.map(({ cycle, finalLiquidity }) => {
// 				return {
// 					finalLiquidity,
// 					cycleNodes: cycle.nodes.map(
// 						(n) => tokenLookup[n.address].symbol
// 					),
// 					cycleEdges: cycle.edges.map((n) => n.pairAddress),
// 					tokenPath: cycle.nodes.map(
// 						(n) => tokenLookup[n.address].address
// 					),
// 				}
// 			})
// 			.sort((a, b) => a.finalLiquidity - b.finalLiquidity)

// 		const filteredPath = mappedPath.filter(
// 			(path) => path.finalLiquidity > startingBalance
// 		)

// 		return filteredPath[filteredPath.length - 1]
// 	}
// }
