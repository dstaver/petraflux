export function randomRange(start: number, end: number, precision = 1) {
  return (
    Math.round((start + Math.random() * (end - start)) * precision) / precision
  )
}
