const fs = require('fs')
const line = fs.readFileSync('subject.in', 'utf-8')
//console.log(line)

function f1(l)
{
	//let regex = /([A-Z]|-)\1/g
	let regex = /(\d)\1/g

	let result = l.match(regex)

	console.log(result)

	let s = ""

	for (let i = 0; i < result.length; i++)
		s += result[i][0];

	return s
}

console.log(f1(line))
