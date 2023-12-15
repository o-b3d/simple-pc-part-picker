import { configureStore } from '/@reduxjs/toolkit'
import buildReducer from './buildSlice'
export default configureStore({
    reducer: {
        build: buildReducer,
    },
})
