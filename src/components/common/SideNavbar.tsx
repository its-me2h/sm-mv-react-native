import React from 'react'
import { Pressable, View } from '../../atlasNative';
import { ProfileCard } from '../cards/ProfileCard';
import { LogoIcon } from '../shapes/svg/LogoIcon';
import { EllipsisIcon } from '../shapes/svg/EllipsisIcon';
import { IconMenuList } from '../lists/IconMenuList';

const profileCardData = {
    name: 'Taoufik Harmouche',
    username: 'its_me2h',
    img: 'https://i.postimg.cc/y8fnSKKC/f-1.png'
}

export function SideNavbar({ setNavigation }: any) {
    return (
        <View className='flex-1 justify-between'>

            {/* LOGO CONTAINER */}
            <View className='h-70 aspect-video mx-22 mb-30'>
                <LogoIcon height='100%' />
            </View>

            {/* SIDENAVBAR MENU */}
            <IconMenuList setNavigation={setNavigation} />

            {/* PROFILECARD CONTAINER */}
            <View className='flex-row mx-22 gap-25'>
                <ProfileCard
                    size='sm'
                    {...profileCardData}
                />
                <View className='w-45 aspect-square bg-slate-900 p-10 rounded-999'>
                    <EllipsisIcon height='100%' className='text-white' />
                </View>
            </View>

        </View>
    );
}