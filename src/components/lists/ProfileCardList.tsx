import React from 'react'
import { YView } from '../base/YView';
import { Text, View } from '../../atlasNative';
import { ProfileCard } from '../cards/ProfileCard';

export function ProfileCardList({ name, data }: any) {
    return (
        <YView>
            < Text className='text-30 text-white uppercase mb-15'>{name}</Text >
            <View className='gap-30'>
                {data.map((user: any, i: number) => (
                    <ProfileCard
                        size='md'
                        key={i}
                        {...user}
                    />
                ))}
            </View>
        </YView>
    );
}
