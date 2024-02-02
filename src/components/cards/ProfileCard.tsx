import React from 'react'
import { Image, Text, View, Link } from '../../atlasNative'

export function ProfileCard({ id, userName, firstName, lastName, avatarURL, size }: any) {
    return (
        <View className={`flex-1 flex-row items-center ${sizes[size].gap.column}`}>

            {/* AVATAR */}
            <View className={`relative aspect-square ${sizes[size].avatar.width}`}>
                <Link to={{ screen: 'Profile', params: { id: id } }} className='absolute w-full h-full z-2'></Link>
                <View className={`absolute right-0 bottom-0 w-95% h-95%  bg-bzzr-10 ${sizes[size].avatar.rounded}`}></View>
                {avatarURL &&
                    <Image
                        className={`absolute left-0 top-0 w-95% h-95% ${sizes[size].avatar.rounded}`}
                        source={{ uri: avatarURL }}
                    />
                }
            </View>

            {/* NAME */}
            {userName && <View className={`flex-1 ${sizes[size].gap.row}`}>
                <Link to={{ screen: 'Profile', params: { id: id } }} numberOfLines={1} ellipsizeMode="tail">
                    <Text className={`uppercase text-white ${sizes[size].name}`}>{firstName} {lastName}</Text>
                </Link>
                <Text numberOfLines={1} ellipsizeMode="tail" className={`text-bzzr-100 ${sizes[size].username}`}>@{userName} </Text>
            </View>}

        </View>
    )
}

// PROFILECARDSKELETON COMPONENT FOR SKELETON LOADING
export function ProfileCardSkeleton({ size }: any) {
    return (
        <View className={`flex-1 flex-row items-center ${sizes[size].gap.column}`}>

            {/* AVATAR */}
            <View className={`relative aspect-square ${sizes[size].avatar.width}`}>
                <View className={`absolute right-0 bottom-0 w-95% h-95%  bg-slate-800 ${sizes[size].avatar.rounded}`}></View>
                <View className={`absolute left-0 top-0 w-95% h-95%  bg-slate-900 ${sizes[size].avatar.rounded}`}></View>
            </View>

            {/* NAME */}
            {<View className={`flex-1 ${sizes[size].gap.row}`}>
                <Text numberOfLines={1} className={`bg-slate-800 ${sizes[size].name}`}></Text>
                <Text numberOfLines={1} className={`bg-slate-900 mr-25% ${sizes[size].username}`}></Text>
            </View>}

        </View>
    );
}

const sizes: any = {
    '2xl': {
        avatar: {
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
        avatar: {
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
        avatar: {
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
        avatar: {
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