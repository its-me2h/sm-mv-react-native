import React from 'react'
import { View } from '../../../atlasNative';

export function ProgressBar({progress,width}:any) {
    return (
        <View className={`w-${width} bg-white h-6px rounded-20 flex justify-start item-center`}>
            <View className={`w-${progress}% bg-black h-100%`}/>
        </View>
    )
};
