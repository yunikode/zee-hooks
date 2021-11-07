import React from 'react'

export interface DemoProps {
    name: string
}

export function Demo({name}: DemoProps) {
    return <div>Hello, {name}</div>
}