import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    initialState: { value: 0 },
    reducers: {
        counterIncrement: (state) => {
            state.value += 1;
        },
        counterDecrement: (state) => {
            state.value -= 1;
        }
    }
})

export const { counterIncrement, counterDecrement } = counterSlice.actions
export default counterSlice.reducer