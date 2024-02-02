import React from 'react'
import { Button, Image, Text, View } from '../atlasNative';
import { YView } from '../components/base/YView';
import { XView } from '../components/base/XView';
import { PanoCarousel } from '../components/carousels/PanoCarousel';
import PostCard from '../components/cards/PostCard';
import { ProfileCardList } from '../components/lists/ProfileCardList';
import { SearchInput } from '../components/inputs/SearchInput';
import { getSuggestedPros } from '../hooks/useQuery/user';
import { getSports } from '../hooks/useQuery/sport';
import { ClassicCard } from '../components/cards/ClassicCard';
import { Link } from '@react-navigation/native';

export function HomeView() {

    const { data: suggestedProData } = getSuggestedPros(6);
    const { data: sportsData } = getSports(8);

    const PostsData =
    {
        pro: [
            {
                post: [
                    {
                        content: "Lebron private content",
                        isPublic: false,
                        mediaURL: "https://i.postimg.cc/ncQcXwQw/the-blurred-819388-1280.webp"
                    },
                    {
                        content: "Lebron public content",
                        isPublic: true,
                        mediaURL: "https://i.postimg.cc/d0NMc62P/CE6D4JSX7BHU7KJWQ5OTDCULUA.webp"
                    },
                    {
                        content: "Lebron private content",
                        isPublic: false,
                        mediaURL: "https://i.postimg.cc/ncQcXwQw/the-blurred-819388-1280.webp"
                    }
                ],
                user: {
                    avatarURL: "https://i.postimg.cc/NFmKxzc8/Foa1k1hac-AULB56.webp",
                    firstName: "lebron",
                    id: "2",
                    isPro: true,
                    lastName: "james",
                    userName: "kingjames"
                }
            }
        ]
    };


    return (
        <View className='flex-row flex-1'>
            {/* FEED CONTAINER */}
            <YView>
                <View className='pt-30 px-60 gap-40'>

                    <PanoCarousel />
                    <Categories data={sportsData?.sport} />

                    {/* Poste */}
                    <View className='gap-30'>
                        {PostsData?.pro[0].post.map((post: any, index: any) => (
                            <PostCard
                                key={index}
                                profileInfo={PostsData?.pro[0].user}
                                time="Some time ago"  // You can replace this with the actual time logic
                                content={post.content}
                                img={post.mediaURL}
                            />
                        ))}
                    </View>

                </View>
            </YView>

            {/* RIGHT BAR CONTAINER */}
            {<View className='w-420 pt-30 px-25 gap-40  border-l-1 border-bzzr-300'>
                <SearchInput />
                <ProfileCardList name='trending' data={suggestedProData?.pro} />
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