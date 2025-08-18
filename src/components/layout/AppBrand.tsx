import { NEXT_APP_NAME } from '@/libs/constants'
import { Home } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function AppBrand() {
    return (
        <div id='app_brand'>
            <Link href={"/"}>
                <Home /> {NEXT_APP_NAME}
            </Link>
        </div>
    )
}

export default AppBrand
