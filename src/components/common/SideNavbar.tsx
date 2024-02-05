import React from 'react'
import { View, Text } from '../../atlasNative';
import { ProfileCard } from '../cards/ProfileCard';
import { LogoIcon } from '../shapes/svg/LogoIcon';
import { EllipsisIcon } from '../shapes/svg/EllipsisIcon';
import { NavItemsList } from '../lists/NavItemsList';
import { useSelector } from 'react-redux';
import { getUserInfo } from '../../hooks/useQuery/user';
import { Button } from '../buttons/Button';

export function SideNavbar() {
    const userId: any = useSelector((state: any) => state.user.id)
    const { data: userData } = getUserInfo(userId);

    return (
        <View className='flex-1 justify-between'>
            <View>
                <View className='h-60 aspect-video ml-22 mb-35'>
                    <LogoIcon height='100%' className='self-start' />
                </View>
                <NavItemsList />
            </View>

            <Button type='primary'>Create new</Button>

            <View className='flex-row gap-22'>
                <ProfileCard size='sm' {...userData?.user} />
                <View className='w-45 aspect-square p-10 rounded-999'>
                    <EllipsisIcon height='100%' className='text-white' />
                </View>
            </View>
        </View>
    );
}