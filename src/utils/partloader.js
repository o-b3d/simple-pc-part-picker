import {
    gpuModels,
    newCpuModels,
    ramModels,
    motherboardModels,
    psuModels,
    caseModels,
} from '../utils/data'

export const partLoader = async ({ params }) => {
    switch (params.part) {
        case 'gpu':
            return {
                parts: gpuModels,
                type: params.part,
            }
        case 'cpu':
            return {
                parts: newCpuModels,
                type: params.part,
            }
        case 'ram':
            return {
                parts: ramModels,
                type: params.part,
            }
        case 'motherboard':
            return {
                parts: motherboardModels,
                type: params.part,
            }
        case 'psu':
            return {
                parts: psuModels,
                type: params.part,
            }
        case 'case':
            return {
                parts: caseModels,
                type: params.part,
            }
        default:
            return null
    }
}
