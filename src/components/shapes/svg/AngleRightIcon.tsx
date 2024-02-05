import React from 'react'
import { Svg } from '../../../atlasNative';
import { Path } from 'react-native-svg';

export function AngleRightIcon({ ...props }: any) {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 10 15"
            fill="none"
            {...props}
        >
            <Path
                d="M1.735.92l6.314 6.314-6.314 6.315"
                stroke="currentColor"
                strokeWidth={1.80411}
                strokeLinecap="round"
            />
        </Svg>
    )
}
