import {
  TimelineItem,
  TimelineData,
  TimelineDataRowItem,
} from '../../types/Timeline'

export function parseTimeline(
  data: TimelineItem[],
  headerAspect = 0.15,
  rowAspect = 0.25
): TimelineData {
  console.time(`Recalculate timeline width ${data.length} items`)
  const timeline: TimelineData = {
    aspect: 0,
    numberOfHeaderRows: 0,
    numberOfDataRows: 0,
    data: [],
  }
  // Track current day in each iteration
  let currentDay = 0

  // Track the sum of all images in the current row
  // Keep filling with images until the maxAspect is reached
  let currentRowAspect = 0

  // Track the total aspect of the result
  // Will be used for calculating the height responsively
  for (let i = 0; i < data.length; i++) {
    const [itemDay, itemAspect] = data[i]

    // New day - Create header row and new image row
    if (itemDay > currentDay) {
      currentDay = itemDay

      // Add header row
      timeline.data.push(currentDay)

      // Update header row count
      timeline.numberOfHeaderRows++

      // A new row initially has the aspect of the first row we put in it
      currentRowAspect = itemAspect

      // Update data row count
      timeline.numberOfDataRows++

      // Add data row
      timeline.data.push([
        {
          aspect: itemAspect,
          id: i.toString(),
        },
      ])
    }

    // The image will fit into the current row
    else if (currentRowAspect + itemAspect <= 1 / rowAspect) {
      currentRowAspect += itemAspect
      ;(timeline.data[timeline.data.length - 1] as TimelineDataRowItem).push({
        aspect: itemAspect,
        id: i.toString(),
      })
    }
    // Image doesn't fit, create new row
    else {
      // Update data row count
      timeline.numberOfDataRows++

      // Reset current row aspect
      currentRowAspect = itemAspect

      // Create new current row
      timeline.data.push([
        {
          aspect: itemAspect,
          id: i.toString(),
        },
      ])
    }
  }
  // Calculate total aspect
  timeline.aspect =
    timeline.numberOfHeaderRows * headerAspect +
    timeline.numberOfDataRows * rowAspect
  console.timeEnd(`Recalculate timeline width ${data.length} items`)
  return timeline
}
