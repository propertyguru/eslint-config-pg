export function getValueAsString(input: string | number | boolean): string {
  return String(input)
}

export type InputGetValueAsStringsFn = Parameters<typeof getValueAsString>[0]

export type ReturnGetValueAsStringsFn = ReturnType<typeof getValueAsString>
