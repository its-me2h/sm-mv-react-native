import { View, Image, Text, Pressable } from "../atlasNative";
import { YView } from "../components/base/YView";
import PostCard from "../components/cards/PostCard";
import { ProfileCard } from "../components/cards/ProfileCard";
import { ProfileCardList } from "../components/lists/ProfileCardList";
import { getProPosts } from "../hooks/useQuery/post";
import { getUserProfile, getSuggestedPros } from "../hooks/useQuery/user";
import { useDispatch } from 'react-redux';
import { navUpdate } from '../redux/navSlice';
import { Button } from "../components/buttons/Button";

export function ProfileView({ route }: any) {
    const dispatch = useDispatch();
    dispatch(navUpdate({ route: 'Profile' }));
    const { data: profileData } = getUserProfile(route.params.id);
    const { data: PostsData } = getProPosts(route.params.id);
    const { data: suggestedProData } = getSuggestedPros(13);




    return (
        <YView className='flex-1 border-1 border-bzzr-300'>
            <View className='gap-0'>

                {/* USER BANNER */}
                <View className='relative h-50h justify-end'>
                    <Image
                        className='absolute left-0 top-0 w-full h-full'
                        source={{ uri: profileData?.user.coverURL }}
                    />
                    <Image
                        className='absolute left-0 top-0 w-full h-full'
                        source={{ uri: 'https://i.postimg.cc/Kcg5GgZz/Rectangle-882.png' }}
                        resizeMode='stretch'
                    />
                    <View className='px-60 flex-row items-center '>
                        <ProfileCard
                            size='2xl'
                            {...profileData?.user}
                        />
                        <View className='flex-row gap-30'>
                            <View>
                                <Text className='capitalize text-bzzr-100 text-20'>Total posts</Text>
                                <Text className='text-white text-30'>{profileData?.user.pro.countPosts}</Text>
                            </View>
                            <View>
                                <Text className='capitalize text-bzzr-100 text-20'>Followers</Text>
                                <Text className='text-white text-30'>{profileData?.user.pro.countFollowers}</Text>
                            </View>
                            <View>
                                <Text className='capitalize text-bzzr-100 text-20'>Subscribers</Text>
                                <Text className='text-white text-30'>{profileData?.user.pro.countSubscribers}</Text>
                            </View>
                        </View>
                    </View>
                </View>

                <View className='flex-row gap-60 flex-1 px-60 py-50'>

                    <View className='flex-1 gap-30'>

                        {/* USER BIO */}
                        <View className='gap-20'>
                            <Text className='capitalize text-white text-20'>Athlete Club Name - Baltimore Ravens</Text>
                            <Text className='text-18 text-bzzr-100' style={{ lineHeight: 20 }}>{profileData?.user.pro.bio}</Text>
                        </View>

                        {/* tabs */}
                        <View className='gap-60'>
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
                            <View className='flex-1 min-h-100h gap-40'>
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

                    </View>

                    {/* RIGHT BAR */}
                    <View className='relative w-420 gap-30'>

                        {/* PRO INTERCTIONS */}
                        <View className='bg-bzzr-200 border-1 border-bzzr-600 rounded-18 py-30 px-20 gap-20'>

                            <Button
                                type={profileData?.user.pro.isFollowing ? 'active' : 'secondary'}
                            >
                                {profileData?.user.pro.isFollowing ? 'following' : 'follow'}
                            </Button>

                            <Button
                                type={profileData?.user.pro.isSubscribing ? 'active' : 'primary'}
                            >
                                {profileData?.user.pro.isSubscribing ? 'subscribing' : 'subscribe'}
                            </Button>

                        </View>

                        <ProfileCardList name='similar suggestions' data={suggestedProData?.pro} />
                    </View>

                </View>

            </View>
        </YView >
    );
};