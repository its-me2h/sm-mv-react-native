import React from 'react'
import { Pressable, Text, View } from '../atlasNative';
import { YView } from '../components/base/YView';
import { ProfileCard } from '../components/cards/ProfileCard';
import { MagnifyingGlassIcon } from '../components/shapes/svg/MagnifyingGlassIcon';
import { getSuggestedPros } from '../hooks/useQuery/user';

export function SubscriptionsView() {
    const { data: suggestedProData } = getSuggestedPros(4);
    return (
        <View className='flex-1 py-40 px-60'>

            <View className='flex-1 gap-40'>
                {/* HEADER */}
                <View className='flex-row justify-between items-center'>
                    <Text className='uppercase text-35 text-white uppercase'>Subscriptions</Text>
                    <Pressable className='absolute h-full right-0 items-center justify-center px-20'>
                        <MagnifyingGlassIcon height='100%' className='w-30 text-gray-500' />
                    </Pressable>
                </View>

                {/* SCROLL VIEW */}
                <View className='flex-1'>
                    <View className='flex-row gap-20 mb-30'>
                        <Text className='text-20 text-white'>All</Text>
                        <Text className='text-20 text-bzzr-100'>Followers</Text>
                        <Text className='text-20 text-bzzr-100'>Subscribers </Text>
                        <Text className='text-20 text-bzzr-100'>Expired</Text>
                    </View>
                    <YView>
                        <View className='gap-30'>
                            {suggestedProData?.pro.map((item: any) => (
                                <ProfileCard
                                    size='lg'
                                    key={item.user.id}
                                    {...item.user}
                                />
                            ))}
                        </View>
                    </YView>
                </View>

                {/* FOOTER */}
                <View className='flex-row justify-between items-center'>
                    <Text className='uppercase text-25 text-white'>Total amount:</Text>
                    <Text className='uppercase text-25 text-white'>$60 usd</Text>
                </View>

            </View>

        </View>
    );
}
