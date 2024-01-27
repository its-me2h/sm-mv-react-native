import React from 'react';
import { Svg } from '../../../atlasNative';
import { Path } from 'react-native-svg';

export function UserPlusSolidIcon({ ...props }: any) {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 34 32"
            fill="none"
            {...props}
        >
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M33.909 13.33h-4.444V8.886h-2.221v4.444H22.8v2.221h4.443v4.443h2.221v-4.443h4.444V13.33zM11.693 0a7.776 7.776 0 100 15.551 7.776 7.776 0 000-15.551zM22.8 31.102h-1.21v.003H2.09v-.003H.585v-5.554a7.775 7.775 0 017.776-7.775h6.664a7.776 7.776 0 017.776 7.775v5.554z"
                fill="currentColor"
            />
        </Svg>
    )
}
