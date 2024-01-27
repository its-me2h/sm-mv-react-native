import React from 'react'
import { ScrollView } from '../../atlasNative'

export function XView({ children, ...props }: any) {
    return (
        <ScrollView
            horizontal
            bounces={false}
            showsHorizontalScrollIndicator={false}
            {...props}
        >
            {children}
        </ScrollView>
    )
}