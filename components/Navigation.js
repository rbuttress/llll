import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const menu = [
    { title: 'Full', path: '/' },
    { title: 'Systems', path: '/systems' },
    { title: 'Directory', path: '/contact' },
  ]

export default function Navigation() {
    const router = useRouter()

    return (
        <nav className="noselect">
            <ul>
                {menu.map((item, index) => {
                    return (
                        <li>
                            <Link key={index} href={item.path}>
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
