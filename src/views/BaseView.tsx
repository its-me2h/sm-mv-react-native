import React from 'react'
import { View } from '../atlasNative';
import { SideNavbar } from '../components/common/SideNavbar';
import { Navigation } from '../navigations/Navigation';
import { RegistrationView } from './RegistrationView';

export function BaseView() {
    return (
        <View className='flex-1 bg-bzzr-900'>
            <View className='flex-1 flex-row hidden'>
                <View className='w-380 py-30 px-25 border-r-1 border-bzzr-300'>
                    <SideNavbar />
                </View>
                <Navigation />
            </View>
            <RegistrationView />
        </View>
    )
};
