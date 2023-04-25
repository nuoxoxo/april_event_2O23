import * as fs from 'fs';

const line = fs.readFileSync('p1.in', 'utf-8')
console.log(line)

let res: string = ''
let i: number = 0
let A = 'A'.charCodeAt(0)
let Z = 'Z'.charCodeAt(0)

while (i < line.length) {
    let c = line[i]
    let code = c.charCodeAt(0)
    if (((code <= Z && code >= A) || c == '-') &&
        i < line.length - 1 && c == line[i + 1]) {
        res += c
        i += 2
    } else {
        ++i
    }
}

console.log(res)

