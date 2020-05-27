import { readLines } from 'https://deno.land/std/io/bufio.ts'

const file = Deno.openSync('data.csv')
const lines = readLines(file)

let x = 0.0
let y = 0.0
let z = 0.0

lines[Symbol.asyncIterator]().next()
for await (const line of lines) {
  if (!line) continue
  const values = line.split(',')
  x += Number(values[1])
  y += Number(values[2])
  z += Number(values[3])
}

console.log(`${x} ${y} ${z}`)
