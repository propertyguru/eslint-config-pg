// eslint-disable-next-line @typescript-eslint/no-unused-vars
const test = 1

// Allow unused as arguments
function withUnusedArgument(_unused: number) {}
withUnusedArgument(1)

/* eslint-disable no-empty */
try {
} catch (err) {}
/* eslint-enable no-empty */
