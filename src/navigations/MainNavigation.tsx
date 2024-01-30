import React from 'react'
import { FeedView } from '../views/FeedView'
import { DiscoverView } from '../views/DiscoverView'
import { SubscriptionView } from '../views/SubscriptionView'
import { SettingView } from '../views/SettingView'
import { ProfileView } from '../views/ProfileView'
import { useSelector } from 'react-redux'

export function MainNavigation() {
    const nav: any = useSelector((state: any) => state.nav.num)
    return (
        <>
            {nav === 0 && <FeedView />}
            {nav === 1 && <DiscoverView />}
            {nav === 2 && <SubscriptionView />}
            {nav === 3 && <SettingView />}
            {nav === 4 && <ProfileView />}
        </>
    )
}
