import dotenv from 'dotenv'
dotenv.config()

let BASE_TICKER_FROM_ARGV = null
let STARTING_BALANCE_FROM_ARGV = null
let NETWORK_FROM_ARGV = null
let NETWORK_TYPE_FROM_ARGV = null
let EXCHANGE_NAME_FROM_ARGV = null

process.argv.forEach((argument) => {
	if (argument.includes('BASE_TICKER')) {
		BASE_TICKER_FROM_ARGV = argument.split('=')[1]
	}
	if (argument.includes('STARTING_BALANCE')) {
		STARTING_BALANCE_FROM_ARGV = argument.split('=')[1]
	}
	if (argument.includes('NETWORK')) {
		NETWORK_FROM_ARGV = argument.split('=')[1]
	}
	if (argument.includes('NETWORK_TYPE')) {
		NETWORK_TYPE_FROM_ARGV = argument.split('=')[1]
	}
	if (argument.includes('EXCHANGE_NAME')) {
		EXCHANGE_NAME_FROM_ARGV = argument.split('=')[1]
	}
})

const { BSC_RPC_URL } = process.env
const BASE_TICKER = BASE_TICKER_FROM_ARGV || process.env.BASE_TICKER
const STARTING_BALANCE =
	STARTING_BALANCE_FROM_ARGV || process.env.STARTING_BALANCE
const NETWORK = NETWORK_FROM_ARGV || process.env.NETWORK
const EXCHANGE_NAME = EXCHANGE_NAME_FROM_ARGV || process.env.EXCHANGE_NAME
const NETWORK_TYPE = EXCHANGE_NAME_FROM_ARGV || process.env.NETWORK_TYPE

export const config = {
	BASE_TICKER,
	STARTING_BALANCE,
	NETWORK,
	EXCHANGE_NAME,
	BSC_RPC_URL,
}
