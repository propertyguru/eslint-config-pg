import {
  getValueAsString,
  type ReturnGetValueAsStringsFn,
  type InputGetValueAsStringsFn,
} from './libs/example-helper'

const input: InputGetValueAsStringsFn = 1

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const output: ReturnGetValueAsStringsFn = getValueAsString(input)
