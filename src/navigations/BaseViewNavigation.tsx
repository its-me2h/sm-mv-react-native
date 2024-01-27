import React from 'react'
import { FeedView } from '../views/FeedView'
import { DiscoverView } from '../views/DiscoverView'
import { SubscriptionView } from '../views/SubscriptionView'
import { SettingView } from '../views/SettingView'

export function BaseViewNavigation({ renderView }: any) {
    return (
        <>
            {renderView === 0 && <FeedView />}
            {renderView === 1 && <DiscoverView />}
            {renderView === 2 && <SubscriptionView />}
            {renderView === 3 && <SettingView />}
        </>
    )
}
