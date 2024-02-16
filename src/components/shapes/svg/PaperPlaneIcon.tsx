import React from 'react';
import { Svg } from '../../../atlasNative';
import { Path } from 'react-native-svg';

export function PaperPlaneIcon({ ...props }: any) {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 18 15"
            fill="none"
            {...props}
        >
            <Path
                d="M17.545 8.19L1.062 14.939a.773.773 0 01-.72-.062.668.668 0 01-.342-.603V.726C0 .463.114.262.341.123a.773.773 0 01.72-.062l16.484 6.75c.303.13.455.36.455.689 0 .328-.152.558-.455.69zM1.517 13.09L15.27 7.5 1.517 1.835v4.138L7.635 7.5 1.517 8.978v4.113z"
                fill="currentColor"
            />
        </Svg>
    )
}
