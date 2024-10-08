import React from 'react'
import { Image, Text, View } from '../../atlasNative'
import { ProfileCard } from './ProfileCard'
import { EllipsisIcon } from '../shapes/svg/EllipsisIcon'
import { HeartIcon } from '../shapes/svg/HeartIcon'
import { CommentIcon } from '../shapes/svg/CommentIcon'
import { BookmarkIcon } from '../shapes/svg/BookmarkIcon'

export default function PostCard({ profileInfo, time, content, img }: any) {
    return (
        <View className='w-full bg-bzzr-200 border-1 border-bzzr-600 rounded-18'>

            {/* Header */}
            <View className='p-30 flex-row justify-between items-start'>
                <ProfileCard
                    size='lg'
                    {...profileInfo}
                />
                <View className='flex-row gap-20 items-center'>
                    <Text className='text-bzzr-100 text-18'>{time}</Text>
                    <EllipsisIcon height='100%' className='w-25 text-bzzr-100' />
                </View>
            </View>

            <View className='gap-40'>
                <Text className='px-30 text-20 text-white' style={{ lineHeight: 25 }}>{content}</Text>
                {/* <View className='h-500'> */}
                <Image
                    className='h-55h'
                    source={{ uri: img }}
                />
                {/* </View> */}
            </View>

            {/* Footer */}
            <View className='p-30 flex-row justify-between'>
                <View className='flex-row gap-20'>
                    <View className='w-45 aspect-square p-10 rounded-999'>
                        <HeartIcon height='100%' className='w-40 flex-1 text-white' />
                    </View>
                    <View className='w-45 aspect-square p-10 rounded-999'>
                        <CommentIcon height='100%' className='w-45 text-white' />
                    </View>
                </View>
                <View className='w-45 aspect-square p-10 rounded-999'>
                    <BookmarkIcon height='100%' className='w-60 text-white' />
                </View>
            </View>

        </View>
    )
}
