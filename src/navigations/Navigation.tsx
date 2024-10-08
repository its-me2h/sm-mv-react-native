import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeView } from '../views/HomeView'
import { DiscoverView } from '../views/DiscoverView'
import { SubscriptionsView } from '../views/SubscriptionsView'
import { SettingsView } from '../views/SettingsView'
import { ProfileView } from '../views/ProfileView'
import { StreamView } from '../views/StreamView';

const Stack = createNativeStackNavigator();

export function Navigation() {

    const screenOptions = {
        headerShown: false
    };

    return (
        <Stack.Navigator screenOptions={screenOptions} >
            <Stack.Screen
                name="Home"
                component={HomeView}
                options={{ animation: 'none' }}
            />
            <Stack.Screen
                name="Discover"
                component={DiscoverView}
                options={{ animation: 'none' }}
            />
            <Stack.Screen
                name="Subscriptions"
                component={SubscriptionsView}
                options={{ animation: 'none' }}
            />
            <Stack.Screen
                name="Settings"
                component={SettingsView}
                options={{ animation: 'none' }}
            />
            <Stack.Screen
                name="Profile"
                component={ProfileView}
                options={() => ({ animation: 'none' })}
            />
            <Stack.Screen
                name="Stream"
                component={StreamView}
                options={() => ({ animation: 'none' })}
            />
        </Stack.Navigator >
    )
};
