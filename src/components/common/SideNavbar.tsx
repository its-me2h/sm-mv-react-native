import React from 'react'
import { Pressable, View } from '../../atlasNative';
import { ProfileCard } from '../cards/ProfileCard';
import { LogoIcon } from '../shapes/svg/LogoIcon';
import { EllipsisIcon } from '../shapes/svg/EllipsisIcon';
import { IconMenuList } from '../lists/IconMenuList';
import { useSelector } from 'react-redux';
import { useGetUser } from '../../hooks/useQuery/user';

export function SideNavbar() {
    const userId: any = useSelector((state: any) => state.user.id)
    const { data: userData } = useGetUser(userId);

    return (
        <View className='flex-1 justify-between'>

            {/* LOGO CONTAINER */}
            <View className='h-70 aspect-video mx-22 mb-30'>
                <LogoIcon height='100%' />
            </View>

            {/* SIDENAVBAR MENU */}
            <IconMenuList />

            {/* PROFILECARD CONTAINER */}
            <View className='flex-row mx-22 gap-25'>
                <ProfileCard
                    size='sm'
                    {...userData}
                />
                <View className='w-45 aspect-square bg-slate-900 p-10 rounded-999'>
                    <EllipsisIcon height='100%' className='text-white' />
                </View>
            </View>

        </View>
    );
}