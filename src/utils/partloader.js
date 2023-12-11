import { gpuModels, newCpuModels } from '../utils/data'

export const partLoader = async ({ params }) => {
    switch (params.part) {
        case 'gpu':
            return gpuModels
        case 'cpu':
            return newCpuModels
        default:
            return null
    }
}
