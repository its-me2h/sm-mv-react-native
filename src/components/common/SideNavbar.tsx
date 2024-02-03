import React from 'react'
import { View, Text } from '../../atlasNative';
import { ProfileCard } from '../cards/ProfileCard';
import { LogoIcon } from '../shapes/svg/LogoIcon';
import { EllipsisIcon } from '../shapes/svg/EllipsisIcon';
import { IconMenuList } from '../lists/IconMenuList';
import { useSelector } from 'react-redux';
import { getUserInfo } from '../../hooks/useQuery/user';

export function SideNavbar() {
    const userId: any = useSelector((state: any) => state.user.id)
    const { data: userData } = getUserInfo(userId);

    return (
        <View className='flex-1 justify-between'>

            <View>

                <View className='h-60 aspect-video mx-22 mb-30'>
                    <LogoIcon height='100%' className='self-start' />
                </View>

                <IconMenuList />

            </View>

            <View role='btn-primary' className={`p-14 rounded-8 items-center bg-blue-600`}>
                <Text className={`text-18 uppercase text-white`}>Create new</Text>
            </View>

            <View className='flex-row gap-22'>
                <ProfileCard size='sm' {...userData?.user} />
                <View className='w-45 aspect-square bg-slate-900 p-10 rounded-999'>
                    <EllipsisIcon height='100%' className='text-white' />
                </View>
            </View>

        </View>
    );
}