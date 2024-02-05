import React, { useEffect } from 'react'
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
import { getProPosts } from '../hooks/useQuery/post';

export function HomeView() {
    const { data: suggestedProData } = getSuggestedPros(6);
    const { data: sportsData } = getSports(8);

    const { data: PostsData } = getProPosts(5);

    return (
        <View className='flex-row flex-1'>
            {/* FEED CONTAINER */}
            <YView>
                <View className='pt-30 px-60 gap-45'>

                    <PanoCarousel />
                    <Categories data={sportsData?.sport} />

                    {/* Poste */}
                    <View className='gap-30 pb-40'>
                        {PostsData?.pro[0].post.map((post: any, index: any) => (
                            <PostCard
                                key={index}
                                profileInfo={PostsData?.pro[0].user}
                                time="1 hour ago"
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
        <View className='gap-10'>
            <View className='flex-row justify-between items-end'>
                <Text className='text-30 text-white uppercase'>categories</Text>
                <Text className='text-18 text-white'>see more</Text>
            </View>
            <XView>
                <View className='flex-row gap-12'>
                    {data?.map((item: any) => (
                        <ClassicCard
                            key={item.id}
                            id={item.id}
                            label={item.name}
                            subLabel={item.countPros + ' athletes'}
                            mediaURL={item.mediaURL}
                        />
                    ))}
                </View>
            </XView>
        </View>
    )
}