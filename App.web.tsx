import 'react-native-gesture-handler';
import React from 'react'
import { Provider as ReduxProvider } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import store from './src/redux/store';
import { BaseView } from './src/views/BaseView'
import { SignUpView } from './src/views/SignUpView';
import { SignUpSetupView } from './src/views/SignUpSetupView';


const queryClient = new QueryClient();

export default function App() {

    const MyTheme = {
        ...DefaultTheme,
        colors: {
            ...DefaultTheme.colors,
            background: 'transparent'
        },
    };

    return (
        <ReduxProvider store={store}>
            <QueryClientProvider client={queryClient}>
                <NavigationContainer theme={MyTheme}>
                    <SignUpView />
                </NavigationContainer >
            </QueryClientProvider>
        </ReduxProvider>
    )
};
