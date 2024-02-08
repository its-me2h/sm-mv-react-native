import React from 'react'
import { View } from '../atlasNative'
import { YView } from '../components/base/YView'
import { SearchInput } from '../components/inputs/SearchInput'
import { ProfileCardList } from '../components/lists/ProfileCardList'
import { getSuggestedPros } from '../hooks/useQuery/user'
import { useDispatch } from 'react-redux'
import { navUpdate } from '../redux/navSlice'

export function StreamView() {
    const dispatch = useDispatch();
    dispatch(navUpdate({ route: 'Stream' }));
    const { data: suggestedProData } = getSuggestedPros(6);

    return (
        <View className='flex-row flex-1'>
            {/* FEED CONTAINER */}
            <YView className='flex-1 min-w-660'>
                <View className='pt-30 px-60 gap-45'>

                    {/* Poste */}
                    <View className='gap-30 pb-40 bg-red-900'>
                        <SearchInput />

                    </View>

                </View>
            </YView>

            {/* RIGHT BAR CONTAINER */}
            {<View className='flex-1 min-w-240 max-w-420 pt-30 px-25 gap-40  border-l-1 border-bzzr-300'>
                <ProfileCardList name='for you' data={suggestedProData?.pro} />
            </View>}

        </View>
    )
}
