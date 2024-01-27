import React from 'react';
import { Svg } from '../../../atlasNative';
import { Defs, LinearGradient as LinearGradientNative, Path, Stop } from 'react-native-svg';

export function LinearGradient({ ...props }: any) {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 500 500"
            fill="none"
            {...props}
        >
            <Path fill="url(#paint0_linear_2018_7554)" d="M0 0H500V500H0z" />
            <Defs>
                <LinearGradientNative
                    id="paint0_linear_2018_7554"
                    x1={250}
                    y1={177.108}
                    x2={250}
                    y2={500}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="black" stopOpacity={0} />
                    <Stop stopColor="black" offset={1} />
                </LinearGradientNative>
            </Defs>
        </Svg>
    )
}
