const deepClone = (obj) => {
  if (obj === null) return null
  const clone = Object.assign({}, obj)
  Object.keys(clone).forEach(
    (key) =>
      (clone[key] =
        typeof obj[key] === 'object' ? deepClone(obj[key]) : obj[key])
  )
  if (Array.isArray(obj)) {
    clone.length = obj.length
    return Array.from(clone)
  }
  return clone
}
const a = { foo: 'bar', obj: { a: 1, b: 2 } }
const b = deepClone(a)