import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    formDt: '',
    dtListL: []
}

const nameSlice = createSlice({
    name: 'userName',
    initialState,
    reducers: {
        setFormDt: (state, action) => {
            state.formDt = action.payload;
        },
        setDtList: (state, action) => {
            state.dtListL = [...state.dtListL, action.payload];
        },
    }
})
const { reducer, actions } = nameSlice;
const { setFormDt, setDtList } = actions;
export default reducer;
