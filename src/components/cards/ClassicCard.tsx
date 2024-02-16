import React from 'react'
import { View, Image, Text, Link } from '../../atlasNative'

export function ClassicCard({ id, label, subLabel, mediaURL, link }: any) {
    return (
        <View className='w-225'>
            <View role='absolute-image-container' className='relative h-275 mb-5 rounded-10 overflow-hidden'>
                <Link to={link} className='absolute w-full h-full z-2'></Link>
                <Image
                    role='absolute-image'
                    className='absolute w-full h-full'
                    source={{ uri: mediaURL }}
                />
            </View>

            {label && <Link to={link} className='text-20 text-white uppercase mb-2'>{label}</Link>}
            {subLabel && <Text className='text-16 text-bzzr-100'>{subLabel}</Text>}
        </View>
    )
}
