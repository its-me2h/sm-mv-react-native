import React from 'react'
import { View, Image, Text, Link } from '../../atlasNative'

export function ClassicCard({ id, label, subLabel, mediaURL }: any) {
    return (
        <View className='w-200'>
            <View className='relative h-250 mb-5'>
                <Link to={{ screen: 'Discover', params: { id: id } }} className='absolute w-full h-full z-2'></Link>
                <Image
                    className='absolute w-full h-full rounded-10'
                    source={{ uri: mediaURL }}
                />
            </View>

            {label && <Link to={{ screen: 'Discover', params: { id: id } }} className='text-20 text-white uppercase mb-2'>{label}</Link>}
            {subLabel && <Text className='text-16 text-bzzr-100'>{subLabel}</Text>}
        </View>
    )
}
