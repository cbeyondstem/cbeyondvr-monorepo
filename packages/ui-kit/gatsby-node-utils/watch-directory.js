/* eslint-disable indent */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/no-var-requires */
const _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')

const _regenerator = _interopRequireDefault(require('@babel/runtime/regenerator'))

const Promise = require('bluebird')

const chokidar = require('chokidar')

const slash = require('slash')

module.exports = function _callee(path, glob, onNewFile, onRemovedFile, onChangeFile) {
  return _regenerator.default.async(function _callee$(_context) {
    while (1) {
      // _context.prev = _context.next
      switch (_context.next) {
        case 0:
          return _context.abrupt(
            'return',
            new Promise((resolve, reject) => {
              chokidar
                .watch(glob, {
                  cwd: path
                })
                .on('add', p => {
                  const path1 = slash(p)
                  onNewFile(path1)
                })
                .on('change', p => {
                  const path1 = slash(p)
                  onChangeFile(path1)
                })
                .on('unlink', p => {
                  const path1 = slash(p)
                  onRemovedFile(path1)
                })
                .on('ready', () => {
                  return resolve()
                })
            })
          )
        case 1:
        case 'end':
          return _context.stop()
        default:
          return _context.stop()
      }
    }
  })
}
