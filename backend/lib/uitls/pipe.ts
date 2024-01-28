export function pipe<T>(value: T, ...fns: ((value: T) => T)[]): T {
  let current = value

  fns.forEach(fn => current = fn(current))

  return current
}
