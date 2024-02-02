import React, { useEffect, useState } from 'react';
import { HouseSolidIcon } from '../shapes/svg/HouseSolidIcon';
import { HouseIcon } from '../shapes/svg/HouseIcon';
import { HashtagSolidIcon } from '../shapes/svg/HashtagSolidIcon';
import { HashtagIcon } from '../shapes/svg/HashtagIcon';
import { UserPlusSolidIcon } from '../shapes/svg/UserPlusSolidIcon';
import { UserPlusIcon } from '../shapes/svg/UserPlusIcon';
import { GearSolidIcon } from '../shapes/svg/GearSolidIcon';
import { GearIcon } from '../shapes/svg/GearIcon';
import { YView } from '../base/YView';
import { Link, Pressable, Text, View } from '../../atlasNative';
import { useNavigation, useIsFocused } from '@react-navigation/native';


const menuItems = [
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

export function IconMenuList() {

    const navigation: any = useNavigation();


    const [selectedScreen, setSelectedScreen] = useState('')
    useEffect(() => {
        setSelectedScreen(navigation.getCurrentRoute()?.name)
    }, [navigation.getCurrentRoute()?.name])


    return (
        <YView className='flex-1'>
            <View className='gap-10'>
                {menuItems.map(item => (
                    <MenuItem key={item.screen} {...item} />
                ))}
            </View>
        </YView>
    );
};


function MenuItem({ selected, selectedIcon: SelectedIcon, unselectedIcon: UnselectedIcon, screen, label }: any) {

    return (
        <Pressable
            className={`rounded-6 ${selected ? 'bg-bzzr-300' : ''}`}
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
}