import React from 'react'
import { Image, Text, View } from '../atlasNative';
import { YView } from '../components/base/YView';
import { XView } from '../components/base/XView';
import { PanoCarousel } from '../components/carousels/PanoCarousel';
import PostCard from '../components/cards/PostCard';

export function FeedView() {

    const CategoriesData = [
        { id: 1, title: 'Football', athletesCount: 27, img: 'https://i.postimg.cc/BQWyk8vp/Rectangle-5538.png' },
        { id: 2, title: 'Soccer', athletesCount: 65, img: 'https://i.postimg.cc/WpqC5mst/Rectangle-5539.png' },
        { id: 3, title: 'Tennis', athletesCount: 20, img: 'https://i.postimg.cc/SsJ3FC8T/Rectangle-5540.png' },
        { id: 4, title: 'Boxing', athletesCount: 32, img: 'https://i.postimg.cc/SNW5hy2h/Mask-group-1.png' },
        { id: 5, title: 'Baseball', athletesCount: 25, img: 'https://i.postimg.cc/5ttkLLP4/Rectangle-5647.png' },
        { id: 6, title: 'Volleyball', athletesCount: 12, img: 'https://i.postimg.cc/mgBnZ0CF/Mask-group.png' },
        { id: 7, title: 'Skiing', athletesCount: 22, img: 'https://i.postimg.cc/d1pXq3jq/Mask-group-2.png' },
        { id: 8, title: 'Swimming', athletesCount: 30, img: 'https://i.postimg.cc/dV6xh4jN/Rectangle-5541.png' },
        { id: 9, title: 'Golf', athletesCount: 10, img: 'https://i.postimg.cc/W49CHXDq/Mask-group-3.png' },
        { id: 10, title: 'Ice hockey', athletesCount: 8, img: 'https://i.postimg.cc/6qZPTKMC/Mask-group-4.png' },
    ];

    const PostsData = [
        {
            profileInfo: {
                name: 'Mohamed Salah',
                username: 'mosalah',
                img: 'https://i.postimg.cc/Ght1SPNy/bzzr1-3.jpg'
            },
            time: '2 hours ago',
            content: 'We know we can’t keep dropping points like this and we will keep fighting to do better.',
            img: 'https://i.postimg.cc/yxN2tBfH/bzzr3-3.jpg',
        },
        {
            profileInfo: {
                name: 'Leo Messi',
                username: 'leomessi',
                img: 'https://i.postimg.cc/G3qCQgMR/bzzr1-1.jpg'
            },
            time: '3 hours ago',
            content: 'Training hard for the upcoming game. 💪🏼 #Workout #RonaldoStyle',
            img: 'https://i.postimg.cc/N07V0LSt/bzzr4-1.jpg',
        },
        {
            profileInfo: {
                name: 'Neymar Jr',
                username: 'neymarjr',
                img: 'https://i.postimg.cc/L5WYZthZ/bzzr1-4.jpg'
            },
            time: '5 hours ago',
            content: 'Throwback to one of my best goals. 🚀⚽️ #Legend #MaradonaMagic',
            img: 'https://i.postimg.cc/rwx0KtTK/bzzr2-4.jpg',
        },
        {
            profileInfo: {
                name: 'Cristiano Ronaldo',
                username: 'cristiano',
                img: 'https://i.postimg.cc/YCmBtrt2/bzzr1-2.jpg'
            },
            time: '10 hours ago',
            content: 'Enjoying some quality time on the pitch. ⚽️ #FootballLife #XaviTime',
            img: 'https://i.postimg.cc/CKGyfcZW/bzzr3-2.jpg',
        },
    ];

    return (
        <YView className='flex-1 border-1 border-bzzr-300'>
            <View className='pt-30 gap-40 px-40'>

                {/* Lives */}
                <PanoCarousel />

                {/* Categories */}
                <View>
                    <View className='flex-row justify-between items-end mb-10'>
                        <Text className='text-30 text-white'>CATEGORIES</Text>
                        <Text className='text-18 text-white'>See more</Text>
                    </View>
                    <XView>
                        <View className='flex-row gap-12'>
                            {CategoriesData.map((category: any) => (
                                <View key={category.id} className='w-200'>
                                    <Image
                                        className='h-250 bg-slate-500 rounded-10 mb-5'
                                        source={{ uri: category.img }}
                                    />
                                    <Text className='text-20 text-white uppercase'>{category.title}</Text>
                                    <Text className='text-16 text-bzzr-100'>{`${category.athletesCount} athletes`}</Text>
                                </View>
                            ))}
                        </View>
                    </XView>
                </View>

                {/* Poste */}
                <View className='gap-30'>
                    {PostsData.map((post, index) => (
                        <PostCard key={index} {...post} />
                    ))}
                </View>

            </View>
        </YView>
    );
};