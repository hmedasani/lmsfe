import HomeModule from '@/modules/home'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "Home"
}

function HomePage() {
    return (
        <>
            <HomeModule />
        </>
    )
}

export default HomePage
