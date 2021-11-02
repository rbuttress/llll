import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const menu = [
    { uid: 0, title: 'Full', path: '/' },
    { uid: 1, title: 'Systems', path: '/systems' },
    { uid: 2, title: 'Directory', path: '/contact' },
  ]

export default function Navigation() {
    const router = useRouter()

    return (
        <nav className="noselect">
            <ul>
                {menu.map((item) => {
                    return (
                        <li>
                            <Link key={item.uid} href={item.path}>
                                <a
                                className={`cursor-pointer ${
                                    router.pathname === item.path
                                    ? 'active'
                                    : 'inactive'
                                }`}
                                >
                                    {item.title}
                                </a>
                            </Link>
                        </li>
                        )
                    })}
            </ul>
        </nav>
       
    )
}
