import { Home } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function AppBrand() {
    return (
        <div id='app_brand'>
            <Link href={"/"}>
                <Home /> Home
            </Link>
        </div>
    )
}

export default AppBrand
