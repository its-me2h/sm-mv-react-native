import React, { useState } from 'react'
import { TextInput, View } from '../atlasNative';;
import { SideNavbar } from '../components/common/SideNavbar';
import { EllipsisIcon } from '../components/shapes/svg/EllipsisIcon';
import { ProfileCardList } from '../components/lists/ProfileCardList';
import { BaseViewNavigation } from '../navigations/BaseViewNavigation';

export function BaseView() {

    const [navigation, setNavigation] = useState(0)
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
        <View className='flex-1 bg-bzzr-900'>
            <View className='flex-1 flex-row gap-20'>
                {/* SIDE NAVBAR */}
                <View className='w-350 py-30 ml-20'>
                    <SideNavbar setNavigation={setNavigation} />
                </View>
                {/* NAVIGATION CONTENT */}
                <BaseViewNavigation renderView={navigation} />

                {/* RIGHT BAR CONTAINER */}
                <View className='w-380 pt-30  mr-20'>
                    {/* SEARCH INPUT */}
                    <View className='relative justify-center overflow-hidden bg-white rounded-8 mb-35 '>
                        <TextInput className='py-16 px-20 text-18 text-black bg-transparent' placeholder='Search' placeholderTextColor='gray' />
                        <View className='absolute h-full right-0 items-center justify-center px-20'>
                            <EllipsisIcon height='100%' className='w-25 text-gray-500' />
                        </View>
                    </View>
                    {/* SUGGESTION LIST */}
                    <ProfileCardList name='trending' data={profilesCardData} />
                </View>

            </View>
        </View>
    )
}
function setState(arg0: number): [any, any] {
    throw new Error('Function not implemented.');
}

