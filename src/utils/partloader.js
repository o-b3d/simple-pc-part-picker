import { gpuModels, newCpuModels } from '../utils/data'

export const partLoader = async ({ params }) => {
    switch (params.part) {
        case 'gpu':
            return {
                parts: gpuModels, type: params.part
            }
        case 'cpu':
            return {
                parts: newCpuModels, type: params.part
            }
        default:
            return null
    }
}
