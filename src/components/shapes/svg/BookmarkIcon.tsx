import React from 'react'
import { Svg } from '../../../atlasNative';
import { Path } from 'react-native-svg';

export function BookmarkIcon({ ...props }: any) {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 21 27"
            fill="none"
            {...props}
        >
            <Path
                d="M19.865.87c.581.581.87 1.279.87 2.092m-.87-2.091A2.854 2.854 0 0017.773 0H2.963A2.847 2.847 0 00.87.87C.29 1.45 0 2.147 0 2.961v22.086M19.865.87l-1.047 1.047c.305.305.436.626.436 1.042V24.412M19.865.872l-.611 23.542m1.48-21.45L0 25.047M20.735 2.962v22.086m0-22.086v22.086M0 25.048v1.611l1.481-.635v-1.611L0 25.048zm19.254-.635v1.611l-8.887-3.808 8.887 2.197zm0 0l1.48.635m-1.48-.635l1.48.635"
                stroke="currentColor"
                strokeWidth={2.5}
            />
        </Svg>
    )
}
