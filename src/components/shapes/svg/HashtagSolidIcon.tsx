import React from 'react';
import { Svg } from '../../../atlasNative';
import { Path } from 'react-native-svg';

export function HashtagSolidIcon({ ...props }: any) {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 30 27"
            fill="none"
            {...props}
        >
            <Path
                d="M5.483 26.718l1.051-5.924H.61l.518-2.962h5.925l1.57-8.886H2.698l.519-2.963h5.924L10.193.059h2.962l-1.052 5.924h8.886L22.041.059h2.962l-1.051 5.924h5.924l-.519 2.963h-5.924l-1.57 8.886h5.924l-.518 2.962h-5.924l-1.052 5.924h-2.962l1.052-5.924H9.496l-1.051 5.924H5.483z"
                fill="currentColor"
            />
        </Svg>
    )
}
