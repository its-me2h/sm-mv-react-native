import React from 'react'
import { Svg } from '../../../atlasNative';
import { Path } from 'react-native-svg';

export function AngleLeftIcon({ ...props }: any) {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 10 15"
            fill="none"
            {...props}
        >
            <Path
                d="M8.314.92L2 7.234l6.314 6.315"
                stroke="currentColor"
                strokeWidth={1.80411}
                strokeLinecap="round"
            />
        </Svg>
    )
}
