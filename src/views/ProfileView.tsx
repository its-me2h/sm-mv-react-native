import { View, Image, Text, Pressable } from "../atlasNative";
import { YView } from "../components/base/YView";
import PostCard from "../components/cards/PostCard";
import { ProfileCard } from "../components/cards/ProfileCard";
import { ProfileCardList } from "../components/lists/ProfileCardList";
import { useGetProfile, useGetSuggestedPros } from "../hooks/useQuery/user";

export function ProfileView() {

    const { data: suggestedProData } = useGetSuggestedPros(3);
    const { data: profileData } = useGetProfile(5);

    const {
        coverURL,
        pro: {
            countPosts = 0,
            countFollowers = 0,
            countSubscribers = 0,
            isFollowing,
            isSubscribing,
            bio = 'No bio available',
        } = {} as any,
        ...userData
    } = profileData || {};




    return (
        <YView className='flex-1 border-1 border-bzzr-300'>
            <View className='gap-0'>
                {/* PROFILE COVER */}
                <View className='relative h-50h justify-end'>
                    <Image
                        className='absolute left-0 top-0 w-full h-full'
                        source={{ uri: coverURL }}
                    />
                    <Image
                        className='absolute left-0 top-0 w-full h-full'
                        source={{ uri: 'https://i.postimg.cc/Kcg5GgZz/Rectangle-882.png' }}
                        resizeMode='stretch'
                    />
                    <View className='px-60 flex-row items-center '>
                        <ProfileCard
                            size='2xl'
                            {...userData}
                        />
                        <View className='flex-row gap-30'>
                            <View>
                                <Text className='capitalize text-bzzr-100 text-20'>Total posts</Text>
                                <Text className='text-white text-30'>{countPosts}</Text>
                            </View>
                            <View>
                                <Text className='capitalize text-bzzr-100 text-20'>Followers</Text>
                                <Text className='text-white text-30'>{countFollowers}</Text>
                            </View>
                            <View>
                                <Text className='capitalize text-bzzr-100 text-20'>Subscribers</Text>
                                <Text className='text-white text-30'>{countSubscribers}</Text>
                            </View>
                        </View>
                    </View>
                </View>

                <View className='flex-row gap-60 flex-1 px-60 py-50'>

                    <View className='flex-1 gap-30'>

                        {/* profile bio */}
                        <View className='gap-20'>
                            <Text className='capitalize text-white text-20'>NFL Hall of Famer - Baltimore Ravens</Text>
                            <Text className='text-18 text-bzzr-100'>{bio}</Text>
                        </View>

                        {/* tabs */}
                        <View>
                            <View className='flex-row'>
                                <Pressable className='justify-center items-center p-20 flex-1 border-b-2 border-white'>
                                    <Text className='text-20 text-white uppercase'>posts</Text>
                                </Pressable>
                                <Pressable className='justify-center items-center p-20 flex-1 border-b-1 border-bzzr-100'>
                                    <Text className='text-20 text-bzzr-100 uppercase'>photos</Text>
                                </Pressable>
                                <Pressable className='justify-center items-center p-20 flex-1 border-b-1 border-bzzr-100'>
                                    <Text className='text-20 text-bzzr-100 uppercase'>videos</Text>
                                </Pressable>
                                <Pressable className='justify-center items-center p-20 flex-1 border-b-1 border-bzzr-100'>
                                    <Text className='text-20 text-bzzr-100 uppercase'>streams</Text>
                                </Pressable>
                            </View>
                            <View className='flex-1 h-100h'></View>
                        </View>

                    </View>

                    {/* RIGHT BAR */}
                    <View className='relative w-420 gap-30'>

                        {/* pro interctions */}
                        <View className='bg-bzzr-200 border-1 border-bzzr-600 rounded-18 py-30 px-20 gap-20'>
                            <View className='p-15 rounded-8 items-center border-1 border-white'>
                                <Text className='text-20 uppercase text-white'>{isFollowing ? 'following' : 'follow'}</Text>
                            </View>
                            <View className='bg-blue-600 p-15 rounded-8 items-center'>
                                <Text className='text-20 uppercase text-white'>{isSubscribing ? 'subscribing' : 'subscribe'}</Text>
                            </View>
                        </View>

                        <ProfileCardList name='similar suggestions' data={suggestedProData} />
                    </View>

                </View>

            </View>
        </YView >
    );
};