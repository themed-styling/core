import get from './util/get.js'

export default (path, fallback) => ({ theme }) => get(path, theme) || fallback
