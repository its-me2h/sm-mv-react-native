import React from 'react'
import { TextInput as NativeTextInput } from '../../atlasNative'

export function TextInput({ ...props }: any) {
    return (
        <NativeTextInput
            {...props}
            placeholderTextColor='gray'
            className='py-18 px-20 text-18 text-black bg-white rounded-6 flex-1'
        />
    )
}
