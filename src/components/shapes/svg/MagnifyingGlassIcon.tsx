import React from 'react'
import { Svg } from '../../../atlasNative';
import { Path } from 'react-native-svg';

export function MagnifyingGlassIcon({ ...props }: any) {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 19 19"
            fill="none"
            {...props}
        >
            <Path
                d="M18 18l-4.014-4.02m2.224-5.375a7.605 7.605 0 11-15.21 0 7.605 7.605 0 0115.21 0z"
                stroke="currentColor"
                strokeWidth={1.5}
                strokeLinecap="round"
            />
        </Svg>
    )
}
