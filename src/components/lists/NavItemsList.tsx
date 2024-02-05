import React, { useEffect, useState } from 'react';
import { YView } from '../base/YView';
import { Link, Pressable, Text, View } from '../../atlasNative';
import { HouseSolidIcon } from '../shapes/svg/HouseSolidIcon';
import { HouseIcon } from '../shapes/svg/HouseIcon';
import { HashtagSolidIcon } from '../shapes/svg/HashtagSolidIcon';
import { HashtagIcon } from '../shapes/svg/HashtagIcon';
import { UserPlusSolidIcon } from '../shapes/svg/UserPlusSolidIcon';
import { UserPlusIcon } from '../shapes/svg/UserPlusIcon';
import { GearSolidIcon } from '../shapes/svg/GearSolidIcon';
import { GearIcon } from '../shapes/svg/GearIcon';
import { useSelector } from 'react-redux';
// import { useRoute } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { navUpdate } from '../../redux/navSlice';

const navItemsData = [
    {
        label: 'Home',
        screen: 'Home',
        selectedIcon: HouseSolidIcon,
        unselectedIcon: HouseIcon
    },
    {
        label: 'Discover',
        screen: 'Discover',
        selectedIcon: HashtagSolidIcon,
        unselectedIcon: HashtagIcon
    },
    {
        label: 'Subscriptions',
        screen: 'Subscriptions',
        selectedIcon: UserPlusSolidIcon,
        unselectedIcon: UserPlusIcon
    },
    {
        label: 'Settings',
        screen: 'Settings',
        selectedIcon: GearSolidIcon,
        unselectedIcon: GearIcon
    },
];

export function NavItemsList() {

    return (
        <YView className='flex-1'>
            <View className='gap-12'>
                {navItemsData.map(item => (
                    <NavItem
                        key={item.screen}
                        {...item}
                        selected={useSelector((state: any) => state.nav.route) === item.screen}
                    />
                ))}
            </View>
        </YView>
    );
};


function NavItem({
    label,
    screen,
    selectedIcon: SelectedIcon,
    unselectedIcon: UnselectedIcon,
    selected
}: any) {
    const dispatch = useDispatch();

    return (
        <Pressable
            role='pressable'
            className={`rounded-6 ${selected ? 'bg-bzzr-300' : ''}`}
            onPress={() => dispatch(navUpdate({ route: label }))}
        >
            <Link to={{ screen: screen }} className='absolute w-full h-full z-2'></Link>
            <View className='flex-row items-center px-25 py-15 gap-15'>
                <View className='h-26 aspect-square'>
                    {selected
                        ? <SelectedIcon height='100%' className='text-white' />
                        : <UnselectedIcon height='100%' className='text-bzzr-100' />
                    }
                </View>
                <Text className={`text-20 ${selected ? 'text-white' : 'text-bzzr-100'}`}>
                    {label}
                </Text>
            </View>
        </Pressable>
    )
};
