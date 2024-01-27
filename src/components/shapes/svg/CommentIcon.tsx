import React from 'react'
import { Svg } from '../../../atlasNative';
import { Path } from 'react-native-svg';

export function CommentIcon({ ...props }: any) {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 30 30"
            fill="none"
            {...props}
        >
            <Path
                d="M15.33 28.659A13.33 13.33 0 102 15.329c0 2.204.533 4.28 1.481 6.113L2 28.659l7.217-1.481c1.83.946 3.91 1.481 6.112 1.481z"
                stroke="currentColor"
                strokeWidth={2.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}
