import React, { useState } from 'react';
import { HouseSolidIcon } from '../shapes/svg/HouseSolidIcon';
import { HouseIcon } from '../shapes/svg/HouseIcon';
import { HashtagSolidIcon } from '../shapes/svg/HashtagSolidIcon';
import { HashtagIcon } from '../shapes/svg/HashtagIcon';
import { UserPlusSolidIcon } from '../shapes/svg/UserPlusSolidIcon';
import { UserPlusIcon } from '../shapes/svg/UserPlusIcon';
import { GearSolidIcon } from '../shapes/svg/GearSolidIcon';
import { GearIcon } from '../shapes/svg/GearIcon';
import { YView } from '../base/YView';
import { Pressable, Text, View } from '../../atlasNative';

export function IconMenuList({ setNavigation }: any) {
    const [selected, setSelected] = useState(0);
    const menuItems = [
        {
            label: 'Home',
            selectedIcon: HouseSolidIcon,
            unselectedIcon: HouseIcon
        },
        {
            label: 'Discover',
            selectedIcon: HashtagSolidIcon,
            unselectedIcon: HashtagIcon
        },
        {
            label: 'Subscriptions',
            selectedIcon: UserPlusSolidIcon,
            unselectedIcon: UserPlusIcon
        },
        {
            label: 'Settings',
            selectedIcon: GearSolidIcon,
            unselectedIcon: GearIcon
        },
    ];
    return (
        <YView className='flex-1'>
            <View className='gap-10'>
                {menuItems.map((menuItem, index) => (
                    <Pressable
                        key={index}
                        onPress={() => { setSelected(index); setNavigation(index) }}
                        className={`flex-row items-center rounded-6 px-25 py-15 gap-15 ${selected === index ? 'bg-bzzr-300' : ''}`}
                    >
                        <View className='h-26 aspect-square'>
                            {selected === index
                                ? <menuItem.selectedIcon height='100%' className='text-white' />
                                : <menuItem.unselectedIcon height='100%' className='text-bzzr-100' />
                            }
                        </View>
                        <Text className={`text-20 ${selected === index ? 'text-white' : 'text-bzzr-100'}`}>{menuItem.label}</Text>
                    </Pressable>
                ))}
            </View>
        </YView>
    );
};
