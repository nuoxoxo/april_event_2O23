/*
import fs from 'node:fs'
fs.readFile('p1.in', 'utf8', (err: Error, data: string) => {
    if (err) {
        console.log(err)
        return
    }
    console.log(data)
})
*/

import * as fs from 'fs';

const lines = fs.readFileSync('p1.in', 'utf-8')
console.log(lines)
