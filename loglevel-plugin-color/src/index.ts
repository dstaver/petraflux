import log from 'loglevel'
// import prefix from 'loglevel-plugin-prefix'
import { selectColor, hslStr } from './color'

// prefix.reg(log)
// prefix.apply(log, {
//   template: '%c%n%c',
//   levelFormatter(level) {
//     return level.substr(0, 1)
//   },
//   nameFormatter(name) {
//     return `${(name || 'global').toLowerCase()}`
//   },
//   timestampFormatter(date) {
//     return date.toISOString()
//   },
// })
const originalFactory = log.methodFactory
log.methodFactory = function(methodName, logLevel, loggerName) {
  const rawMethod = originalFactory(methodName, logLevel, loggerName)
  const prefixColor = hslStr(selectColor(loggerName))
  return function(message) {
    rawMethod(
      `%c${loggerName}%c ${message}`,
      `color:${prefixColor};background:rgba(0,0,0,0.5);padding:4px 8px;border-radius:6px`,
      'font-size:unset;color:unset;background:unset;padding:unset;border-radius:unset'
    )
  }
}
log.setLevel(log.getLevel())
const logger = log.getLogger('logger1')
logger.info('Message from logger1')
const prefixes = [
  'tristique',
  'Aenean',
  'Fusce',
  'ligula.',
  'pellentesque.',
  'Morbi',
  'elementum',
  'lacus.',
  'pede,',
  'ipsum',
  'Aenean',
  'pede',
  'tempus',
  'mi',
  'lectus.',
  'eget,',
  'Proin',
  'lorem',
  'aliquet,',
  'in,',
  'lectus',
  'netus',
  'arcu.',
  'magna',
  'auctor',
  'Curabitur',
  'non',
  'nunc',
  'ullamcorper.',
  'arcu',
  'sem',
  'feugiat',
  'metus.',
  'aptent',
  'orci.',
  'volutpat.',
  'risus.',
  'Etiam',
  'non,',
  'eu',
  'non,',
  'dignissim',
  'pede',
  'dolor',
  'eu',
  'mauris.',
  'Duis',
  'ornare',
  'porttitor',
  'risus',
  'dictum',
  'penatibus',
  'Sed',
  'nunc.',
  'aliquet',
  'dolor',
  'Nulla',
  'eros.',
  'Duis',
  'hendrerit',
  'egestas,',
  'pharetra',
  'tempor',
  'a',
  'lacus.',
  'cubilia',
  'lacus',
  'dolor,',
  'molestie',
  'aliquet',
  'per',
  'egestas.',
  'vel',
  'non',
  'vitae',
  'at,',
  'facilisis.',
  'turpis',
  'non,',
  'fringilla',
  'elit',
  'amet',
  'nec',
  'Donec',
  'Class',
  'sit',
  'lorem',
  'justo.',
  'nibh.',
  'Nullam',
  'id',
  'placerat,',
  'diam',
  'a',
  'vestibulum',
  'eu',
  'egestas.',
  'nisi',
  'Donec',
  'velit',
]

prefixes.forEach(str => {
  const logger = log.getLogger(str)
  logger.info(`Message from logger`)
  logger.warn(`Message from logger`)
  logger.error(`Message from logger`)
  logger.trace(`Message from logger`)
  logger.debug(`Message from logger`)
})
