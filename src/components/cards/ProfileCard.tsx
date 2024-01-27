import React from 'react'
import { Image, Text, View } from '../../atlasNative'

export function ProfileCard({ name, username, img, size }: any) {
    return (
        <View className={`flex-1 flex-row items-center ${sizes[size].gap.column}`}>
            <View className={`relative aspect-square ${sizes[size].img.width}`}>
                <View className={`absolute right-0 bottom-0 w-97% h-97%  bg-bzzr-10 ${sizes[size].img.rounded}`}></View>
                <Image
                    className={`absolute left-0 top-0 w-97% h-97% ${sizes[size].img.rounded}`}
                    source={{ uri: img }}
                />
            </View>
            <View className={`flex-1 ${sizes[size].gap.row}`}>
                <Text numberOfLines={1} ellipsizeMode="tail" className={`uppercase text-white ${sizes[size].name}`}>{name}</Text>
                <Text numberOfLines={1} ellipsizeMode="tail" className={`text-bzzr-100 ${sizes[size].username}`}>@{username} </Text>
            </View>
        </View>
    )
}

const sizes: any = {
    '2xl': {
        img: {
            width: 'w-180',
            rounded: 'rounded-18'
        },
        name: 'text-35',
        username: 'text-25',
        gap: {
            row: 'gap-2',
            column: 'gap-20'
        },
    },
    lg: {
        img: {
            width: 'w-60',
            rounded: 'rounded-6'
        },
        name: 'text-22',
        username: 'text-18',
        gap: {
            row: 'gap-1.5',
            column: 'gap-15'
        },
    },
    md: {
        img: {
            width: 'w-60',
            rounded: 'rounded-10'
        },
        name: 'text-20',
        username: 'text-17',
        gap: {
            row: 'gap-2',
            column: 'gap-15'
        },
    },
    sm: {
        img: {
            width: 'w-45',
            rounded: 'rounded-8'
        },
        name: 'text-18',
        username: 'text-16',
        gap: {
            row: 'gap-0',
            column: 'gap-10'
        },
    }
}