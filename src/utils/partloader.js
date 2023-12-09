import { cpuModels, gpuModels, newCpuModels } from '../utils/data'

export const partLoader = async ({ params }) => {
    console.log('partLoader', params.part)
    switch (params.part) {
        case 'gpu':
            return gpuModels
        case 'cpu':
            return newCpuModels
        default:
            return null
    }
}
