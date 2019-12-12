import React from 'react'
import dayjs from 'dayjs'

import { TimelineDataRow } from '../../types/Timeline'

import './TimelineRow.scss'
export const TimelineRow: React.FunctionComponent<{
  data: TimelineDataRow[]
  index: number
  style: React.CSSProperties
}> = ({ data, index, style }) => {
  const row = data[index]
  if (typeof row === 'number') {
    return (
      <div
        className="timeline-row is-header"
        style={{
          ...style,
        }}
      >
        <h2>{dayjs(row).format('DD.MM.YYYY')}</h2>
      </div>
    )
  }
  return (
    <div
      className="timeline-row"
      style={{
        ...style,
      }}
    >
      {row.map(({ aspect, id }, i) => (
        <div
          className="timeline-row__item"
          style={{
            width: `calc(${style.height}px * ${aspect} - 7px)`,
          }}
          key={`item${id}-${i}`}
        >
          {id}
        </div>
      ))}
    </div>
  )
}
