import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "Home"
}

function HomePage() {
    return (
        <>
            <h1 className="text-2xl">Home Page</h1>
        </>
    )
}

export default HomePage
