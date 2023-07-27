/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/no-duplicates */

import { getValueAsString as A } from '@/typescript/libs/example-helper' // This is from auto fix.

// eslint-disable-next-line no-relative-import-paths/no-relative-import-paths
import { getValueAsString } from '../../libs/example-helper' // Error as I expected.

export { getValueAsString } from '../../libs/example-helper' // It doesn't work.
// Known issue. https://github.com/MelvinVermeer/eslint-plugin-no-relative-import-paths/issues/29
