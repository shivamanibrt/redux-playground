import { configureStore } from "@reduxjs/toolkit";
import nameReducer from './nameSlice'
export default configureStore({
    reducer: {
        nameList: nameReducer,
    }
})