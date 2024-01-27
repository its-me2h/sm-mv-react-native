import React from 'react'
import { ScrollView } from '../../atlasNative'

export function YView({ children, ...props }: any) {
    return (
        <ScrollView
            bounces={false}
            showsVerticalScrollIndicator={false}
            {...props}
        >
            {children}
        </ScrollView>
    )
}