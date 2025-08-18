import { LayoutProps } from '@/types'
import React from 'react'

function AppMain({ children }: LayoutProps) {
    return (
        <main id='app_main'>
            {children}
        </main>
    )
}

export default AppMain
