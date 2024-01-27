import React from 'react';
import { Svg } from '../../../atlasNative';
import { Path } from 'react-native-svg';

export function UserPlusIcon({ ...props }: any) {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 34 32"
            fill="none"
            {...props}
        >
            <Path
                d="M33.794 13.47h-4.443V9.027H27.13v4.443h-4.444v2.222h4.444v4.443h2.221v-4.443h4.443V13.47zM11.58 2.362a5.554 5.554 0 110 11.108 5.554 5.554 0 010-11.108zm0-2.221a7.776 7.776 0 100 15.55 7.776 7.776 0 000-15.55zm11.107 31.102h-2.221v-5.554a5.554 5.554 0 00-5.554-5.554H8.246a5.554 5.554 0 00-5.554 5.554v5.554H.471v-5.554a7.775 7.775 0 017.775-7.776h6.665a7.775 7.775 0 017.775 7.776v5.554z"
                fill="currentColor"
            />
        </Svg>
    )
}
