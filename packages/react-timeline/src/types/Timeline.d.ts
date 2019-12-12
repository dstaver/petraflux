export type TimelineItem = [number, number]

export type TimelineDataRowItem = {
  aspect: number
  id: string
}[]
export type TimelineDataRow = number | TimelineDataRowItem
export type TimelineArray = TimelineDataRow[]

export interface TimelineData {
  aspect: number
  numberOfHeaderRows: number
  numberOfDataRows: number
  data: TimelineArray
}
