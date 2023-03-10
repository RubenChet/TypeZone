
async function makeWordsList(langue, nbWords) {
	console.log('bonjour la langue est : '+langue)
	const json_file = require("./languages/"+langue+".json")
	const arr = []
	let min = 0
	let max = json_file.length - 1
	for (let i = 0; i < nbWords; i++) {
		let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min
		if (json_file[randomNumber]) {
			arr.push(json_file[randomNumber]) // mot aléatoire
		} else {
			console.log("error word undefined :" + randomNumber + " = asked in json")
			i--
		}
	}
	return arr
}

async function makeColors(arr) {
	const newArr = []
	for (let index = 0; index < arr.length; index++) {
		let row = []
		for (let idx = 0; idx < arr[index].length; idx++) {
			row.push("#646669")
		}
		newArr.push(row)
	}
	return newArr
}

module.exports = { makeWordsList, makeColors }
