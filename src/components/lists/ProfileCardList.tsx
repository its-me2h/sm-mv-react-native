import React from 'react'
import { YView } from '../base/YView';
import { Text, View } from '../../atlasNative';
import { ProfileCard } from '../cards/ProfileCard';

export function ProfileCardList({ name, data }: any) {
    return (
        <YView>
            < Text className='text-30 text-white uppercase mb-15'>{name}</Text >
            <View className='gap-30'>
                {data?.map((item: any) => (
                    <ProfileCard
                        size='md'
                        key={item.user.id}
                        {...item.user}
                    />
                ))}
            </View>
        </YView>
    );
}
