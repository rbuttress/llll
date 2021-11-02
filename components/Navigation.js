import React from 'react'
import Link from 'next/link'

export default function Navigation() {
    return (
        <nav className="noselect">
            <ul>
                <li><Link href="/"><a >Full</a></Link></li>
                <li><Link href="/systems"><a >Systems</a></Link></li>
                <li><Link href="/contact"><a >Directory</a></Link></li>
            </ul>
        </nav>
       
    )
}
