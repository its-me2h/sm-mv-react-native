import React from 'react'
import { TextInput, View } from '../../atlasNative'
import { MagnifyingGlassIcon } from '../shapes/svg/MagnifyingGlassIcon'

export function SearchInput() {
    return (
        <View className='relative justify-center overflow-hidden bg-white rounded-8'>
            <TextInput className='py-18 px-20 text-18 text-black bg-transparent' placeholder='Search' placeholderTextColor='gray' />
            <View className='absolute h-full right-0 items-center justify-center px-20'>
                <MagnifyingGlassIcon height='100%' className='w-25 text-gray-500' />
            </View>
        </View>
    )
}
