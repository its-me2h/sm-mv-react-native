import React from 'react';
import { Svg } from '../../../atlasNative';
import { Path } from 'react-native-svg';

export function HouseSolidIcon({ ...props }: any) {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 31 30"
            fill="none"
            {...props}
        >
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16.504.438a1.495 1.495 0 00-2.115 0L3.923 10.904l-2.99 2.99a1.495 1.495 0 102.114 2.114l.438-.438v9.847a4.486 4.486 0 004.486 4.486h14.951a4.485 4.485 0 004.486-4.486V15.57l.438.438a1.495 1.495 0 002.114-2.114L16.504.438z"
                fill="currentColor"
            />
        </Svg>
    )
}
