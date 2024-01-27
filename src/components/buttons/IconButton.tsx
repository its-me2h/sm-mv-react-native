import React from 'react'
import { Pressable } from '../../atlasNative'

export function IconButton({ children, ...props }: any) {
    return (
        <Pressable {...props}>
            {children}
        </Pressable>
    )
}
