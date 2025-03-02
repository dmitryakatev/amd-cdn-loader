import { Cdn } from './cdn-factory'
import type Package1 from '../../packages/public/package1.d.ts'
import type Package2 from '../../packages/public/package2.d.ts'

export const cdn = {
    package1: Cdn.create<typeof Package1>('package1'),
    package2: Cdn.create<typeof Package2>('package2'),
}
