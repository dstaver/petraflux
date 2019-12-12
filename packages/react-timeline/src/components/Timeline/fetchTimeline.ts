import { TimelineItem } from '../../types/Timeline'
export async function fetchTimeline(): Promise<TimelineItem[]> {
  const res = await fetch('/data.json')
  const data: TimelineItem[] = await res.json()
  return data
}
