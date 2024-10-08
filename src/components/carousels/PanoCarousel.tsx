import React, { useEffect, useState } from 'react';
import { Text, Image, Pressable, View, Link } from '../../atlasNative';
import { Animated, StyleSheet } from 'react-native';
import { ProfileCard } from '../cards/ProfileCard';
import { AngleLeftIcon } from '../shapes/svg/AngleLeftIcon';
import { AngleRightIcon } from '../shapes/svg/AngleRightIcon';

export function PanoCarousel() {



    const [viewWidth, setViewWidth] = useState(0);

    const onLayout = (event: any) => {
        const { width } = event.nativeEvent.layout;
        setViewWidth(width);
    };

    const [xAnimation1] = useState<any>(new Animated.Value(0));
    const [xAnimation2] = useState<any>(new Animated.Value(0));
    const [xAnimation3] = useState<any>(new Animated.Value(0));

    const [zIndex1] = useState<any>(new Animated.Value(10));
    const [zIndex2] = useState<any>(new Animated.Value(5));
    const [zIndex3] = useState<any>(new Animated.Value(1));

    const [scale1] = useState<any>(new Animated.Value(1));
    const [scale2] = useState<any>(new Animated.Value(0.8));
    const [scale3] = useState<any>(new Animated.Value(0.8));

    let isAnimating = false;

    useEffect(() => {
        xAnimation1.setValue(-viewWidth * 0.5);
        xAnimation2.setValue((-viewWidth * 0.5) - 120);
        xAnimation3.setValue((-viewWidth * 0.5) + 120);
    }, [viewWidth]);

    const leftClick = () => {
        if (isAnimating) {
            return;
        }
        isAnimating = true;

        Animated.parallel([
            Animated.timing(xAnimation1, {
                toValue: xAnimation2._value,
                duration: 600,
                useNativeDriver: true,
            }),
            Animated.timing(zIndex1, {
                toValue: zIndex2._value,
                duration: 300,
                useNativeDriver: true,
            }),
            Animated.timing(scale1, {
                toValue: scale2._value,
                duration: 600,
                useNativeDriver: true,
            }),

            Animated.timing(xAnimation2, {
                toValue: xAnimation3._value,
                duration: 600,
                useNativeDriver: false,
            }),
            Animated.timing(zIndex2, {
                toValue: zIndex3._value,
                duration: 300,
                useNativeDriver: true,
            }),
            Animated.timing(scale2, {
                toValue: scale3._value,
                duration: 600,
                useNativeDriver: true,
            }),

            Animated.timing(xAnimation3, {
                toValue: xAnimation1._value,
                duration: 600,
                useNativeDriver: false,
            }),
            Animated.timing(zIndex3, {
                toValue: zIndex1._value,
                duration: 300,
                useNativeDriver: false,
            }),
            Animated.timing(scale3, {
                toValue: scale1._value,
                duration: 600,
                useNativeDriver: false,
            }),
        ], { stopTogether: false }).start(() => {
            isAnimating = false;
        });
    };


    const rightClick = () => {
        if (isAnimating) {
            return;
        }
        isAnimating = true;

        Animated.parallel([
            Animated.timing(xAnimation1, {
                toValue: xAnimation3._value,
                duration: 600,
                useNativeDriver: true,
            }),
            Animated.timing(zIndex1, {
                toValue: zIndex3._value,
                duration: 300,
                useNativeDriver: true,
            }),
            Animated.timing(scale1, {
                toValue: scale3._value,
                duration: 600,
                useNativeDriver: true,
            }),

            Animated.timing(xAnimation2, {
                toValue: xAnimation1._value,
                duration: 600,
                useNativeDriver: false,
            }),
            Animated.timing(zIndex2, {
                toValue: zIndex1._value,
                duration: 300,
                useNativeDriver: true,
            }),
            Animated.timing(scale2, {
                toValue: scale1._value,
                duration: 600,
                useNativeDriver: true,
            }),

            Animated.timing(xAnimation3, {
                toValue: xAnimation2._value,
                duration: 600,
                useNativeDriver: false,
            }),
            Animated.timing(zIndex3, {
                toValue: zIndex2._value,
                duration: 300,
                useNativeDriver: false,
            }),
            Animated.timing(scale3, {
                toValue: scale2._value,
                duration: 600,
                useNativeDriver: false,
            }),
        ], { stopTogether: false }).start(() => {
            isAnimating = false;
        });
    };

    const profilesCardData = [
        {
            id: 3,
            firstName: 'Achraf',
            lastName: 'Hakimi',
            userName: 'achrafhakimi',
            avatarURL: 'https://i.postimg.cc/T3m299Dj/319320936_885460269305686_5069628561588945370_n.webp',
            img: 'https://i.postimg.cc/t45j6PyJ/Screenshot-2024-02-08-at-16-09-51.png'
        },

        {
            id: 1,
            firstName: 'Lebron',
            lastName: 'James',
            userName: 'kingjames',
            avatarURL: 'https://i.postimg.cc/NFmKxzc8/Foa1k1hacAULB56.webp',
            img: 'https://i.postimg.cc/QtC5QTf7/wp9764767.webp'
        },
        {
            id: 2,
            firstName: 'Leo',
            lastName: 'Messi',
            userName: 'leomessi',
            avatarURL: 'https://i.postimg.cc/bwLkc0rX/MESSI--scaled.webp',
            img: 'https://i.postimg.cc/mrb7rqM8/8cc53404-0206-4355-8cb5-bdd286ad48e2.webp',
        },
    ];

    return (
        <View className='flex-row gap-20 justify-between'>

            <Pressable className='justify-center z-10' onPress={leftClick}>
                <AngleLeftIcon height='100%' className='w-15 text-white' />
            </Pressable>

            <View className='h-400 flex-1 relative justify-center'>

                <Animated.View
                    onLayout={onLayout}
                    style={[styles.container, { zIndex: zIndex1, transform: [{ translateX: xAnimation1 }] }]}
                >
                    <Animated.View style={{ flex: 1, transform: [{ scale: scale1 }] }}>
                        <View className='relative flex-1 bg-slate-700 rounded-18 overflow-hidden'>
                            <Link to={{ screen: 'Stream' }} className='absolute w-full h-full z-2'></Link>
                            <Image
                                className='absolute left-0 top-0 w-full h-full'
                                source={{ uri: profilesCardData[0].img }}
                            />
                            <View className='p-4% w-full flex-row items-center'>
                                <ProfileCard
                                    size='md'
                                    {...profilesCardData[0]}
                                />
                                <Text className='py-6 px-12 bg-red-500 text-white rounded-6 text-16 uppercase'>live</Text>
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
                            <Link to={{ screen: 'Stream' }} className='absolute w-full h-full z-2'></Link>
                            <Image
                                className='absolute left-0 top-0 w-full h-full'
                                source={{ uri: profilesCardData[1].img }}
                            />
                            <View className='p-4% w-full flex-row items-center'>
                                <ProfileCard
                                    size='md'
                                    {...profilesCardData[1]}
                                />
                                <Text className='py-6 px-12 bg-red-500 text-white rounded-6 text-16 uppercase'>live</Text>
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
                            <Link to={{ screen: 'Stream' }} className='absolute w-full h-full z-2'></Link>
                            <Image
                                className='absolute left-0 top-0 w-full h-full'
                                source={{ uri: profilesCardData[2].img }}
                            />
                            <View className='p-4% w-full flex-row items-center'>
                                <ProfileCard
                                    size='md'
                                    {...profilesCardData[2]}
                                />
                                <Text className='py-6 px-12 bg-red-500 text-white rounded-6 text-16 uppercase'>live</Text>
                            </View>
                        </View>
                    </Animated.View>
                </Animated.View>



            </View>

            <Pressable className='justify-center z-10' onPress={rightClick}>
                <AngleRightIcon height='100%' className='w-15 text-white' />
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