import { View, Image, Text, Pressable } from "../atlasNative";
import { YView } from "../components/base/YView";
import PostCard from "../components/cards/PostCard";
import { ProfileCard } from "../components/cards/ProfileCard";
import { ProfileCardList } from "../components/lists/ProfileCardList";
import { getProPosts } from "../hooks/useQuery/post";
import { getUserProfile, getSuggestedPros } from "../hooks/useQuery/user";

import { useRoute } from '@react-navigation/native';


export function ProfileView() {

    const route: any = useRoute();

    const { data: profileData } = getUserProfile(route.params.id);
    const { data: PostsData } = getProPosts(route.params.id);
    const { data: suggestedProData } = getSuggestedPros(13);

    console.log('PERR')
    console.log(PostsData?.pro[0])
    // console.log(PostsData?.pro[0].post)






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
                            <Text className='capitalize text-white text-20'>NFL Hall of Famer - Baltimore Ravens</Text>
                            <Text className='text-18 text-bzzr-100'>{profileData?.user.pro.bio}</Text>
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
                                        time="Some time ago"  // You can replace this with the actual time logic
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
                            <View className={`p-15 rounded-8 items-center ${profileData?.user.pro.isFollowing ? 'bg-white' : 'border-1 border-white'}`}>
                                <Text className={`text-20 uppercase ${profileData?.user.pro.isFollowing ? 'text-blue-600' : 'text-white'}`}>{profileData?.user.pro.isFollowing ? 'following' : 'follow'}</Text>
                            </View>
                            <View className={`p-15 rounded-8 items-center ${profileData?.user.pro.isSubscribing ? 'bg-white' : 'bg-blue-600'}`}>
                                <Text className={`text-20 uppercase ${profileData?.user.pro.isSubscribing ? 'text-blue-600' : 'text-white'}`}>{profileData?.user.pro.isSubscribing ? 'subscribing' : 'subscribe'}</Text>
                            </View>
                        </View>

                        <ProfileCardList name='similar suggestions' data={suggestedProData?.pro} />
                    </View>

                </View>

            </View>
        </YView >
    );
};