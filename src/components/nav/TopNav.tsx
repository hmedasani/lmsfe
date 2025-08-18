import Link from 'next/link'
import React from 'react'

function TopNav() {
    return (
        <nav id='top_nav'>
            <Link href="/javascript">Js</Link>
            <Link href="/typescript">Ts</Link>
            <Link href="/node-js">NodeJs</Link>
            <Link href="/salesforce">SFCC</Link>
        </nav>
    )
}

export default TopNav
