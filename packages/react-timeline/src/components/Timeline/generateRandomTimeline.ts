import dayjs from 'dayjs'
import { randomRange } from '../../utils/randomRange'
import { TimelineItem } from '../../types/Timeline'
export function generateRandomTimeline(
  startDate: dayjs.ConfigType,
  endDate: dayjs.ConfigType,
  numberOfItems: number
): TimelineItem[] {
  const startDay = dayjs(startDate).startOf('day')
  const endDay = dayjs(endDate).startOf('day')
  const numberOfDays = endDay.diff(startDay, 'day')
  // Timestamp of startDay in milliseconds
  const startDayMilliSeconds = startDay.valueOf()
  // Precalculate the timestamps for
  const days = new Array(numberOfDays)
    .fill(startDayMilliSeconds)
    .map((s, day) =>
      dayjs(s)
        .add(day, 'day')
        .valueOf()
    )
  // Create reandom aspect ratio
  // < 1 is wide, > 1 is tall
  const randomAspect = () => randomRange(0.5, 1.8, 10)
  // Select a random day timestamp
  const randomDayTimestamp = () => days[randomRange(0, numberOfDays - 1)]
  // Array of [timestamp, aspect]
  const arr = new Array(numberOfItems)
  for (let i = 0; i < numberOfItems; i++) {
    arr[i] = [randomDayTimestamp(), randomAspect()]
  }
  // Sort by timestamp
  arr.sort(([ts1], [ts2]) => ts1 - ts2)
  return arr
}
