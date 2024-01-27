import React from 'react';
import { Svg } from '../../../atlasNative';
import { Path } from 'react-native-svg';

export function HashtagIcon({ ...props }: any) {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 30 27"
            fill="none"
            {...props}
        >
            <Path
                d="M4.873 26.659l1.051-5.924H0l.518-2.962h5.925l1.57-8.887H2.087l.519-2.962H8.53L9.582 0h2.962l-1.051 5.924h8.886L21.431 0h2.962l-1.052 5.924h5.925l-.519 2.962h-5.924l-1.57 8.887h5.924l-.518 2.962h-5.924l-1.052 5.924h-2.962l1.052-5.924H8.886l-1.051 5.924H4.873zm6.102-17.773l-1.57 8.887h8.886l1.57-8.887h-8.886z"
                fill="currentColor"
            />
        </Svg>
    )
}
