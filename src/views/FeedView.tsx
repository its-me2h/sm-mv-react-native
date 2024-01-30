import React from 'react'
import { Image, Text, View } from '../atlasNative';
import { YView } from '../components/base/YView';
import { XView } from '../components/base/XView';
import { PanoCarousel } from '../components/carousels/PanoCarousel';
import PostCard from '../components/cards/PostCard';
import { ProfileCardList } from '../components/lists/ProfileCardList';
import { SearchInput } from '../components/inputs/SearchInput';
import { useGetSuggestedPros } from '../hooks/useQuery/user';
import { useGetSports } from '../hooks/useQuery/sport';
import { ClassicCard } from '../components/cards/ClassicCard';

export function FeedView() {

    const { data: suggestedProData } = useGetSuggestedPros(6);
    const { data: sportsData } = useGetSports(8);

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
        <View className='flex-row flex-1'>
            {/* FEED CONTAINER */}
            <YView>
                <View className='pt-30 px-60 gap-40'>
                    <PanoCarousel />
                    <Categories data={sportsData} />

                    {/* Poste */}
                    <View className='gap-30 hidden'>
                        {PostsData?.map((post, index) => (
                            <PostCard key={index} {...post} />
                        ))}
                    </View>

                </View>
            </YView>

            {/* RIGHT BAR CONTAINER */}
            {<View className='w-420 pt-30 px-25 gap-40  border-l-1 border-bzzr-300'>
                <SearchInput />
                <ProfileCardList name='trending' data={suggestedProData} />
            </View>}

        </View>
    );
};

function Categories({ data }: any) {
    return (
        <View>
            <View className='flex-row justify-between items-end mb-10'>
                <Text className='text-30 text-white'>CATEGORIES</Text>
                <Text className='text-18 text-white'>see more</Text>
            </View>
            <XView>
                <View className='flex-row gap-12'>
                    {data?.map((item: any) => (
                        <ClassicCard
                            key={item.id}
                            labe={item.name}
                            subLabel={item.CountPros + ' athletes'}
                            mediaURL={item.mediaURL}
                        />
                    ))}
                </View>
            </XView>
        </View>
    )
}