import { createSlice } from '@reduxjs/toolkit'
import { partSelectors } from './partSelectors'
/**
 * PC Part Picker redux slice that handles the state of the PC Part Picker
 * it lets select parts and add them to the build
 * it also lets you create a new build, save, load, or share a build
 */

const initialState = {
    parts: partSelectors,
    slectPartFrom: [],
    currentBuild: '',
    savedBuilds: {},
}

export const buildSlice = createSlice({
    name: 'build',
    initialState,
    reducers: {
        selectPart: (state, action) => {
            const { part, type } = action.payload
            const spart = state.parts.find((part) => part.type === type)
            spart.selected = part
        },
        slectPartFrom: (state, action) => {
            state.slectPartFrom = action.payload
        },
        createBuild: (state, action) => {
            state.currentBuild = action.payload
            state.parts = []
        },
        saveBuild: (state) => {
            state.savedBuilds[state.currentBuild] = [...state.parts]
        },
        loadBuild: (state, action) => {
            state.currentBuild = action.payload
            state.parts = state.savedBuilds[action.payload] || []
        },
        // shareBuild: (state, action) => {
        //     // Implementation depends on how sharing is handled
        // },
    },
})

export const { selectPart, createBuild, saveBuild, loadBuild, shareBuild, slectPartFrom } =
    buildSlice.actions

export default buildSlice.reducer
