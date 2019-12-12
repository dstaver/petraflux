import React, { useEffect, useState } from 'react'
import { VariableSizeList as List } from 'react-window'
import AutoSizer from 'react-virtualized-auto-sizer'
import { TimelineRow } from './TimelineRow'
import { fetchTimeline } from './fetchTimeline'
import { TimelineItem } from '../../types/Timeline'
import { parseTimeline } from './parseTimeline'

import './Timeline.scss'

export const Timeline: React.FunctionComponent = () => {
  const [timelineData, setTimelineData] = useState<TimelineItem[]>([])
  const listRef = React.createRef<List>()

  useEffect(() => {
    fetchTimeline().then(data => setTimelineData(data))
  }, [])

  return (
    <AutoSizer
      onResize={() => {
        listRef.current && listRef.current.resetAfterIndex(0, true)
      }}
    >
      {({ width, height }) => {
        const headerAspect = width < 500 ? 0.15 : 0.15
        const rowAspect = width < 500 ? 0.5 : 0.15
        const timeline = parseTimeline(timelineData, headerAspect, rowAspect)
        return (
          <List
            className="timeline"
            ref={listRef}
            width={width}
            height={height}
            itemCount={timeline.data.length}
            itemSize={index =>
              typeof timeline.data[index] === 'number'
                ? width * headerAspect
                : width * rowAspect
            }
            itemData={timeline.data}
          >
            {TimelineRow}
          </List>
        )
      }}
    </AutoSizer>
  )
}
