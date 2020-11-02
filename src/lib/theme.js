import get from './util/get'

export default (path, fallback) => ({ theme }) => get(path, theme) || fallback
