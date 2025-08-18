import React from 'react'
import AppHeader from './AppHeader'
import AppFooter from './AppFooter'
import { LayoutProps } from '@/types'
import AppMain from './AppMain'
import AppSidebarLeft from './AppSidebarLeft'

function Layout({ children }: LayoutProps) {
    return (
        <div id='layout'>
            <AppHeader />
            <AppMain>
                <AppSidebarLeft />
                {children}
            </AppMain>
            <AppFooter />
        </div>
    )
}

export default Layout
