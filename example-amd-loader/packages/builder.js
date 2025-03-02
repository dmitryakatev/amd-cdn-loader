var webpack = require('webpack')
var config = require('./webpack.config')

const manifest = {
	package1: [],
	package2: ['package1'],
}

for (const key in manifest) {
	webpack(config({
		name: key,
		deps: manifest[key],
	}), () => {
		console.log(key + ' done!')
	})
}
