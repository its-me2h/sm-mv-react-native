import React from 'react'
import { View, Text } from '../atlasNative'
import { YView } from '../components/base/YView'
import { SearchInput } from '../components/inputs/SearchInput'
import { getSuggestedPros } from '../hooks/useQuery/user'
import { useDispatch } from 'react-redux'
import { navUpdate } from '../redux/navSlice'
import { Button } from '../components/buttons/Button'
import { ProfileCard } from '../components/cards/ProfileCard'
import { ChatInput } from '../components/inputs/ChatInput'

const profileCardData =
{
    id: 5,
    firstName: 'Achraf',
    lastName: 'Hakimi',
    userName: 'achrafhakimi',
    avatarURL: 'https://i.postimg.cc/T3m299Dj/319320936_885460269305686_5069628561588945370_n.webp',
};

const fakeUserComments = [
    { username: "SoccerFan123", comment: "Great goal! Keep it up Achraf!" },
    { username: "GoalGetter22", comment: "Wow, that assist was amazing! 🔥" },
    { username: "KickMaster99", comment: "You're dominating the field, Achraf! 💪" },
    { username: "FutbolLover87", comment: "We love watching you play, Achraf!" },
    { username: "ScoreSpectator", comment: "Achraf, you're the future of football!" },
    { username: "FootieFanatic55", comment: "Fantastic moves, Achraf!" },
    { username: "GoalGalaxy", comment: "You're on fire, Achraf!" },
    { username: "SoccerStarlet", comment: "Achraf, you're a legend in the making!" },
    { username: "NetNinja", comment: "Incredible skill, Achraf!" },
    { username: "FootyFrenzy", comment: "Achraf, you're an inspiration to us all!" }
];

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
                    <View className='gap-20'>
                        <SearchInput />
                        <View className='h-55h aspect-square rounded-8 overflow-hidden'>
                            <video
                                controls
                                autoPlay
                                style={{ height: '100%', objectFit: 'cover' }}
                                src="//cdn-cf-east.streamable.com/video/mp4/kn7g44.mp4?Expires=1707663932162&Key-Pair-Id=APKAIEYUVEN4EVB2OKEQ&Signature=JeV-OEEh9lPG1K07eHxHb9NujfsjB0vTLTbBg7I5WUAu~JX98vk02mZkOER2rCXHjGe4OfHs5hl2SJnQYDLHVUEJOeDWkak5nMoeWYUyPgXTZbmj36mPHMx7gKZUeobS1iPEUn-bczLiT6F-wflSjAQE~b-kYheGO3~Pg8VvnhiY7AilEU4mgpigkdVXSkfLpQFVtBqLKPGVE6ZRhQMeYe5H7j7YulLKSmEwWWQMQHZr6~AgXx8Nhn3QABT8RHGWDqn2ULbKx6OhihXf83a-kaxf3yBP-B03eTqR6NhdMzbkD4zhT0GoBqngJ92-gutpHjnJQjb0SUoLzM~oELgtIg__"
                            />
                        </View>
                        <View className='px-20 flex-row items-center justify-between'>
                            <ProfileCard
                                size='lg'
                                {...profileCardData}
                            />
                            {/* <Button type='error'>exit podcast</Button> */}
                        </View>
                        <View className='px-20'>
                            <Text className='text-white text-25 uppercase mt-30 mb-20'>Mbappe playing FIFA with Achraf on Twitch</Text>
                            <Text className='text-white text-18 mb-10'>About</Text>
                            <Text className='text-white text-18'>In the digital realm of Twitch, Achraf Hakimi challenges Kylian Mbappé to a FIFA duel. Fans worldwide tune in as these football stars battle it out, showcasing their gaming skills and camaraderie in a thrilling showdown. Cheers erupt as goals are scored, and the chat buzzes with excitement as the virtual match unfolds.</Text>
                        </View>
                    </View>

                </View>
            </YView>

            {/* RIGHT BAR CONTAINER */}
            {<View className='flex-1 max-w-420 py-30 px-25 gap-40  border-l-1 border-bzzr-300'>
                <Text className='text-30 text-white uppercase'>Stream Chat</Text>
                <YView>

                    <View className='gap-20'>
                        {fakeUserComments.map((item, index) => (
                            <Text key={index} className='text-white text-18'>
                                <Text className='text-white text-20'>{item.username}: </Text>
                                {item.comment}
                            </Text>
                        ))}
                    </View>
                </YView>
                <ChatInput />
            </View>}

        </View>
    )
}
