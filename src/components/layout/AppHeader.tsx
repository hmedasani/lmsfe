import React from 'react'
import Brand from './AppBrand'
import TopNav from '../nav/TopNav'
import UserNav from '../nav/UserNav'

function AppHeader() {
    return (
        <header id='app_header'>
            <Brand />
            <TopNav />
            <UserNav />
        </header>
    )
}

export default AppHeader
