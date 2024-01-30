import React from 'react'
import { YView } from '../components/base/YView';
import { Image, Text, View } from '../atlasNative';
import { SearchInput } from '../components/inputs/SearchInput';

export function DiscoverView() {

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

    return (
        <YView className='flex-1'>
            <View className='py-30 px-60 gap-40'>
                <SearchInput />
                <View className='bg-slate-900 h-45h rounded-10'></View>

                {/* Categories */}
                <View>

                    <View className='flex-row justify-between items-center mb-15'>
                        <Text className='text-30 text-white uppercase'>Categories</Text>
                        <Text className='text-18 text-white'>Filter</Text>
                    </View>

                    <View className='flex-row flex-wrap gap-y-12 gap-x-25'>
                        {CategoriesData.map((category: any) => (
                            <View key={category.id} className='flex-1 min-w-180 max-w-200'>
                                <Image
                                    className='h-250 bg-slate-500 rounded-10 mb-5'
                                    source={{ uri: category.img }}
                                />
                                <Text className='text-20 text-white uppercase'>{category.title}</Text>
                                <Text className='text-16 text-bzzr-100'>{`${category.athletesCount} athletes`}</Text>
                            </View>
                        ))}
                        {CategoriesData.map((category: any) => (
                            <View key={category.id} className='flex-1 min-w-180 max-w-200'>
                                <Image
                                    className='h-250 bg-slate-500 rounded-10 mb-5'
                                    source={{ uri: category.img }}
                                />
                                <Text className='text-20 text-white uppercase'>{category.title}</Text>
                                <Text className='text-16 text-bzzr-100'>{`${category.athletesCount} athletes`}</Text>
                            </View>
                        ))}
                    </View>
                </View>
            </View>
        </YView>
    );
}
