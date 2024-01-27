import React, { useEffect, useState } from 'react';
import { Button, Image, Pressable, View } from '../../atlasNative';
import { Animated, StyleSheet } from 'react-native';
import { ProfileCard } from '../cards/ProfileCard';

export function PanoCarousel() {



    const [viewWidth, setViewWidth] = useState(0);

    const onLayout = (event: any) => {
        const { width } = event.nativeEvent.layout;
        setViewWidth(width);
    };

    const [xAnimation1] = useState(new Animated.Value(0));
    const [xAnimation2] = useState(new Animated.Value(0));
    const [xAnimation3] = useState(new Animated.Value(0));

    const [zIndex1] = useState(new Animated.Value(10));
    const [zIndex2] = useState(new Animated.Value(5));
    const [zIndex3] = useState(new Animated.Value(1));

    const [scale1] = useState(new Animated.Value(1));
    const [scale2] = useState(new Animated.Value(0.8));
    const [scale3] = useState(new Animated.Value(0.8));


    useEffect(() => {
        xAnimation1.setValue(-viewWidth * 0.5);
        xAnimation2.setValue((-viewWidth * 0.5) - 130);
        xAnimation3.setValue((-viewWidth * 0.5) + 130);
    }, [viewWidth]);

    const leftClick = () => {
        Animated.parallel([
            Animated.timing(xAnimation1, {
                toValue: xAnimation2,
                duration: 600,
                useNativeDriver: true,
            }),
            Animated.timing(zIndex1, {
                toValue: zIndex2,
                duration: 400,
                useNativeDriver: true,
            }),
            Animated.timing(scale1, {
                toValue: scale2,
                duration: 600,
                useNativeDriver: true,
            }),

            Animated.timing(xAnimation2, {
                toValue: xAnimation3,
                duration: 600,
                useNativeDriver: true,
            }),
            Animated.timing(zIndex2, {
                toValue: zIndex3,
                duration: 400,
                useNativeDriver: true,
            }),
            Animated.timing(scale2, {
                toValue: scale3,
                duration: 600,
                useNativeDriver: true,
            }),

            Animated.timing(xAnimation3, {
                toValue: xAnimation1,
                duration: 600,
                useNativeDriver: true,
            }),
            Animated.timing(zIndex3, {
                toValue: zIndex1,
                duration: 400,
                useNativeDriver: true,
            }),
            Animated.timing(scale3, {
                toValue: scale1,
                duration: 600,
                useNativeDriver: true,
            }),

        ]).start();
    };


    const rightClick = () => {

    };

    const profilesCardData = [
        {
            name: 'Leo Messi',
            username: 'leomessi',
            img: 'https://i.postimg.cc/G3qCQgMR/bzzr1-1.jpg'
        },
        {
            name: 'Cristiano Ronaldo',
            username: 'cristiano',
            img: 'https://i.postimg.cc/YCmBtrt2/bzzr1-2.jpg'
        },
        {
            name: 'Xavi Hernández',
            username: 'xavi',
            img: 'https://i.postimg.cc/tCcH0ZQm/bzzr1.jpg'
        },
        {
            name: 'Mohamed Salah',
            username: 'mosalah',
            img: 'https://i.postimg.cc/Ght1SPNy/bzzr1-3.jpg'
        },
        {
            name: 'Neymar Jr',
            username: 'neymarjr',
            img: 'https://i.postimg.cc/L5WYZthZ/bzzr1-4.jpg'
        },
    ];

    return (
        <View className='flex-row gap-20 justify-between'>

            <Pressable className='justify-center z-10' onPress={leftClick}>
                <View className='w-20 aspect-square bg-white'></View>
            </Pressable>

            <View className='h-400 flex-1 relative justify-center'>

                <Animated.View
                    onLayout={onLayout}
                    style={[styles.container, { zIndex: zIndex1, transform: [{ translateX: xAnimation1 }] }]}
                >
                    <Animated.View style={{ flex: 1, transform: [{ scale: scale1 }] }}>
                        <View className='relative flex-1 bg-slate-700 rounded-18 overflow-hidden'>
                            <Image
                                className='absolute left-0 top-0 w-full h-full'
                                source={{ uri: profilesCardData[0].img }}
                                blurRadius={2}
                            />
                            <View className='p-4% w-full h-full flex-row items-start'>
                                <ProfileCard
                                    size='md'
                                    {...profilesCardData[0]}
                                />
                            </View>
                        </View>
                    </Animated.View>
                </Animated.View>

                <Animated.View
                    onLayout={onLayout}
                    style={[styles.container, { zIndex: zIndex2, transform: [{ translateX: xAnimation2 }] }]}
                >
                    <Animated.View style={{ flex: 1, transform: [{ scale: scale2 }] }}>
                        <View className='relative flex-1 bg-slate-700 rounded-18 overflow-hidden'>
                            <Image
                                className='absolute left-0 top-0 w-full h-full'
                                source={{ uri: profilesCardData[1].img }}
                                blurRadius={2}
                            />
                            <View className='p-4% w-full h-full flex-row items-start'>
                                <ProfileCard
                                    size='md'
                                    {...profilesCardData[1]}
                                />
                            </View>
                        </View>
                    </Animated.View>
                </Animated.View>

                <Animated.View
                    onLayout={onLayout}
                    style={[styles.container, { zIndex: zIndex3, transform: [{ translateX: xAnimation3 }] }]}
                >
                    <Animated.View style={{ flex: 1, transform: [{ scale: scale3 }] }}>
                        <View className='relative flex-1 bg-slate-700 rounded-18 overflow-hidden'>
                            <Image
                                className='absolute left-0 top-0 w-full h-full'
                                source={{ uri: profilesCardData[2].img }}
                                blurRadius={2}
                            />
                            <View className='p-4% w-full h-full flex-row items-start'>
                                <ProfileCard
                                    size='md'
                                    {...profilesCardData[2]}
                                />
                            </View>
                        </View>
                    </Animated.View>
                </Animated.View>



            </View>

            <Pressable className='justify-center z-10' onPress={rightClick}>
                <View className='w-20 aspect-square bg-white'></View>
            </Pressable>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        height: '100%',
        aspectRatio: 16 / 9,
        left: '50%',
    },
});