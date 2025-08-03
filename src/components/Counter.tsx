"use client"
import { RootState } from '@/store'
import { counterDecrement, counterIncrement } from '@/store/reducers/slices/counterSlice'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function Counter() {
    const counterValue = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div>
            <h2>Count: {counterValue}</h2>
            <button onClick={() => dispatch(counterIncrement())}>Increment</button>
            <button onClick={() => dispatch(counterDecrement())}>Decrement</button>
        </div>
    )
}

export default Counter
