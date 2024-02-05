import React from 'react';
import {
    Text as NativeText,
    View as NativeView,
    ScrollView as NativeScrollView,
    Button as NativeButton,
    Pressable as NativePressable,
    Image as NativeImage,
    TextInput as NativeTextInput,
} from 'react-native';
import { Link as NativeLink } from '@react-navigation/native';

import { Svg as NativeSvg } from 'react-native-svg';
import StyleParser from './utils/styleParser';

function styleInjector(Component: any, selfClosing?: boolean) {
    return ({ style, className, children, ...props }: any) => {
        const styles = className ? StyleParser(className) : {};
        return selfClosing
            ? <Component style={[styles, style]} {...props} />
            : <Component style={[styles, style]} {...props}>{children}</Component>;
    };
}

const Text = styleInjector(NativeText);
const View = styleInjector(NativeView);
const ScrollView = styleInjector(NativeScrollView);
const Button = styleInjector(NativeButton);
const Pressable = styleInjector(NativePressable);
const Image = styleInjector(NativeImage, true);
const TextInput = styleInjector(NativeTextInput, true);
const Link = styleInjector(NativeLink);
const Svg = styleInjector(NativeSvg);

export {
    Text,
    View,
    ScrollView,
    Button,
    Pressable,
    Image,
    TextInput,
    Link,
    Svg,
};