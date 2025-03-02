import { createCdn } from '../../packages/src'
import type Package1 from '../../packages/public/package1.d.ts'
import type Package2 from '../../packages/public/package2.d.ts'

export const cdn = createCdn<[
    ['package1', typeof Package1],
    ['package2', typeof Package2],
]>('http://localhost:8080/', [
    'package1',
    'package2',
])
