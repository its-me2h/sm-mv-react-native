import React from 'react'
import { TextInput as TextInputNative, View } from '../../atlasNative'

export function TextInput({className,multiline}:any) {
    return (
        <View className={`relative justify-center overflow-hidden bg-white rounded-8 h-50px ${className}`}>
            <TextInputNative multiline={multiline} className='py-16 px-20 text-18 text-black bg-transparent h-100%' placeholder='Search' placeholderTextColor='gray' />
        </View>
    )
}
