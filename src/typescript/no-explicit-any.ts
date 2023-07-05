/**
 * Good
 */
function funcWithTyped(input: string) {
  return input
}
funcWithTyped('1')

/**
 * Bad
 */
// Please create type if you use TypeScript.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function funcWithOutTyped(input: any) {
  // Don't leave return type of this function to be any. It's debt.

  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return input
}
funcWithOutTyped('1')
