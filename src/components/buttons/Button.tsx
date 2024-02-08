import React from 'react';
import { Pressable, Text } from '../../atlasNative';

export function Button({ children, type }: any) {
    return (
        <Pressable role={`btn-${type}`} className={`px-30 py-15 rounded-6 items-center border-1 ${types[type].background} ${types[type].border}`}>
            <Text numberOfLines={1} ellipsizeMode="tail" className={`text-20 uppercase ${types[type]?.text}`}>{children}</Text>
        </Pressable>
    );
};

const types: any = {
    primary: {
        background: 'bg-blue-600',
        border: 'border-transparent',
        text: 'text-white',
    },
    secondary: {
        background: 'bg-transparent',
        border: 'border-white',
        text: 'text-white',
    },
    active: {
        background: 'bg-white',
        border: 'border-transparent',
        text: 'text-blue-600',
    },
    disable: {
        background: 'bg-gray-500',
        border: 'border-transparent',
        text: 'text-white',
    },
};