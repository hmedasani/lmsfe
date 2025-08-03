"use client"
import React from 'react'
import { LayoutProps } from '@/types'
import { Provider } from 'react-redux';
import store from '@/store';

function Providers({ children }: LayoutProps) {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}

export default Providers
