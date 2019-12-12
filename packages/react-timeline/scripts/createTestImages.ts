import fs from 'fs'
import { generateRandomTimeline } from '../src/components/Timeline/generateRandomTimeline'

const numberOfItems = 100000
const hrstart = process.hrtime()
const data = generateRandomTimeline(
  '2016-10-01T00:00:00',
  '2019-02-01T00:00:00',
  numberOfItems
)
const hrend = process.hrtime(hrstart)
console.info('Execution time (hr): %ds %dms', hrend[0], hrend[1] / 1000000)

fs.writeFileSync('./public/data.json', JSON.stringify(data))
