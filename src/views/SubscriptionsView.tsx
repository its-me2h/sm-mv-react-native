import React from 'react'
import { Text, View } from '../atlasNative';
import { YView } from '../components/base/YView';
import { ProfileCard } from '../components/cards/ProfileCard';

export function SubscriptionsView() {
    const profilesCardData = [
        {
            name: 'Leo Messi',
            username: 'leomessi',
            img: 'https://i.postimg.cc/G3qCQgMR/bzzr1-1.jpg'
        },
        {
            name: 'Cristiano Ronaldo',
            username: 'cristiano',
            img: 'https://i.postimg.cc/YCmBtrt2/bzzr1-2.jpg'
        },
        {
            name: 'Xavi Hernández',
            username: 'xavi',
            img: 'https://i.postimg.cc/tCcH0ZQm/bzzr1.jpg'
        },
        {
            name: 'Mohamed Salah',
            username: 'mosalah',
            img: 'https://i.postimg.cc/Ght1SPNy/bzzr1-3.jpg'
        },
        {
            name: 'Neymar Jr',
            username: 'neymarjr',
            img: 'https://i.postimg.cc/L5WYZthZ/bzzr1-4.jpg'
        },
    ];
    return (
        <View className='flex-1 py-30 gap-40 px-40'>

            <View className='p-30 bg-bzzr-200 rounded-10 border-1 border-bzzr-300 flex-1 gap-30'>
                {/* HEADER */}
                <View className='bg-slate-800 flex-row justify-between items-center'>
                    <Text className='uppercase text-25 text-white'>Subscriptions</Text>
                    <View className='w-30 h-30 bg-red-800'></View>
                </View>

                {/* SCROLL VIEW */}
                <View className='flex-1'>
                    <View className='flex-row gap-20 mb-30'>
                        <Text className='text-18 text-white'>All</Text>
                        <Text className='text-18 text-bzzr-100'>Followers</Text>
                        <Text className='text-18 text-bzzr-100'>Subscribers </Text>
                        <Text className='text-18 text-bzzr-100'>Expired</Text>
                    </View>
                    <YView>
                        <View className='gap-30'>
                            {profilesCardData.map((user, i) => (
                                <ProfileCard
                                    size='lg'
                                    key={i}
                                    {...user}
                                />
                            ))}
                        </View>
                    </YView>
                </View>

                {/* FOOTER */}
                <View className='bg-slate-800 flex-row justify-between items-center'>
                    <Text className='uppercase text-25 text-white'>Total amount:</Text>
                    <Text className='uppercase text-25 text-white'>$60 usd</Text>
                </View>

            </View>

        </View>
    );
}
