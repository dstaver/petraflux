import { globSync, rmdirSync } from 'node:fs'

const dirs = globSync(['node_modules', '{apps,packages}/*/node_modules'])

for (const dir of dirs) {
  console.log(`Removing ${dir}`)
  rmdirSync(dir, { recursive: true })
}
