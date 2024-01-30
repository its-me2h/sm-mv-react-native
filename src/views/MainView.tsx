import React, { useState } from 'react'
import { Text, View } from '../atlasNative';
import { SideNavbar } from '../components/common/SideNavbar';
import { MainNavigation } from '../navigations/MainNavigation';
import { useGetUser } from '../hooks/useQuery/user';
import { useGetSuggestedPros } from '../hooks/useQuery/pro';


export function MainView() {

    return (
        <View className='flex-1 bg-bzzr-900'>
            <View className='flex-1 flex-row'>

                {/* SIDE NAVBAR */}
                <View className='w-380 py-30 px-25 border-r-1 border-bzzr-300'>
                    <SideNavbar />
                </View>
                {/* NAVIGATION CONTENT */}
                <MainNavigation />

            </View>
        </View>
    )
}
