import fs from 'fs'

export function saveToFile(path: string, data: string) {
	try {
		fs.writeFileSync(path, data)
		console.log('successfully saved file to storage')
	} catch (error) {
		console.error('Failed to save file to storage')
	}
}
