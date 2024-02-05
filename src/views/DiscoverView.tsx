import React from 'react'
import { YView } from '../components/base/YView';
import { Image, Text, View } from '../atlasNative';
import { SearchInput } from '../components/inputs/SearchInput';
import { getSportPros, getSports } from '../hooks/useQuery/sport';
import { ClassicCard } from '../components/cards/ClassicCard';
import { useDispatch } from 'react-redux';
import { navUpdate } from '../redux/navSlice';

export function DiscoverView({ route }: any) {

    const dispatch = useDispatch();
    dispatch(navUpdate({ route: 'Discover' }));

    const { data: sportsData } = route?.params?.id
        ? getSportPros(route.params.id)
        : getSports(10);

    const coverImage = route?.params?.id
        ? sportsData?.sport[0]?.mediaURL
        : sportsData?.sport[4]?.mediaURL;

    const coverTitle = route?.params?.id
        ? sportsData?.sport[0]?.name
        : 'All categories';

    const cardsData = route?.params?.id
        ? sportsData?.sport[0]?.pro
        : sportsData?.sport;


    return (
        <YView className='flex-1'>
            <View className='py-30 px-60 gap-40'>
                {/* <SearchInput /> */}

                <View className='relative h-50h justify-end'>
                    <Image
                        className='absolute left-0 top-0 w-full h-full rounded-10'
                        source={{ uri: coverImage }}
                    />
                    <Image
                        className='absolute left-0 top-0 w-full h-full'
                        source={{ uri: 'https://i.postimg.cc/Kcg5GgZz/Rectangle-882.png' }}
                        resizeMode='stretch'
                    />
                    <View className='px-40 pb-40'>
                        <Text className='text-45 text-white uppercase'>{route?.params?.id ? coverTitle : 'All categories'}</Text>
                    </View>
                </View>
                {/* </View> */}

                {/* Categories */}
                <View className='gap-15'>
                    <View className='flex-row justify-between items-center'>
                        <Text className='text-30 text-white uppercase'>{route?.params?.id ? 'athletes' : 'categories'}</Text>
                        <Text className='text-18 text-white'>Filter</Text>
                    </View>
                    <View className='flex-row flex-wrap gap-y-20 gap-x-30'>
                        {cardsData?.map((item: any) => (
                            <ClassicCard
                                key={route?.params?.id ? item.user.id : item.id}
                                id={route?.params?.id ? item.user.id : item.id}
                                label={route?.params?.id
                                    ? item.user.userName
                                    : item.name}
                                subLabel={route?.params?.id
                                    ? '@' + item.user.userName
                                    : item.CountPros + ' athletes'}
                                mediaURL={route?.params?.id ? item.user.avatarURL : item.mediaURL}
                            />
                        ))}
                    </View>
                </View>

            </View>
        </YView>
    );
}
