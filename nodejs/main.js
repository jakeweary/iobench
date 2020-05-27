const fs = require('fs')
const rl = require('readline')

const main = async () => {
  const input = fs.createReadStream('data.csv')
  const lines = rl.createInterface({ input })

  let x = 0.0
  let y = 0.0
  let z = 0.0

  lines[Symbol.asyncIterator]().next()
  for await (const line of lines) {
    const values = line.split(',')
    x += Number(values[1])
    y += Number(values[2])
    z += Number(values[3])
  }

  console.log(`${x} ${y} ${z}`)
}

main()
