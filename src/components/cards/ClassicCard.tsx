import React from 'react'
import { View, Image, Text } from '../../atlasNative'

export function ClassicCard({ labe, subLabel, mediaURL }: any) {
    return (
        <View className='w-200'>
            <Image
                className='h-250 rounded-10 mb-5'
                source={{ uri: mediaURL }}
            />
            {labe && <Text className='text-20 text-white uppercase'>{labe}</Text>}
            {subLabel && <Text className='text-16 text-bzzr-100'>{subLabel}</Text>}
        </View>
    )
}
