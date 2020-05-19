export const coreTest = (call, array, string) => {
  expect(call).toBeDefined()
  expect(array).toBeDefined()
  expect(string).toBeDefined()

  expect(call).toStrictEqual(array)
  expect(call.flat().join('')).toBe(string)
}
