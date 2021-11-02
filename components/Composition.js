import React from 'react'
import Navigation from './Navigation'
import Projection from './Projection'

export default function Composition({children}) {
    return (
        <div>
            <Navigation />
            <Projection />
            {children}
        </div>
    )
}
