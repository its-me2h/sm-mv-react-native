import React from 'react';
import {View, Text} from '../../atlasNative';
import {ProfileCard} from '../../components/cards/ProfileCard';
import { TextInput } from '../inputs/TextInput';

export function SignUpSocialMedia({goNext}:any) {
  return (
    <>
      <Text className="mt-6.5% text-white text-32px mx-80px" style={{textAlign:'center'}}>
      Connect your Social Media profiles: Enter your Handles or Usernames
      </Text>
      <View className="w-82% mt-15px flex gap-6px">
        <TextInput className="mt-10px h-40px"/>
        <TextInput className="mt-10px h-40px"/>
        <TextInput className="mt-10px h-40px"/>
      </View>
      <View className={`w-100% flex justify-center items-center`}>
        <View
          role="btn-secondary"
          className={`p-10 rounded-8 items-center bg-blue-600 mt-48px mx-110px mb-15px w-43%`}>
          <Text onPress={()=>goNext()} className={`text-18 uppercase text-white`}>
            Continue
          </Text>
        </View>
      </View>
      <Text onPress={()=>goNext()} className={`text-19 text-white mt-50`}>Skip for now</Text>
    </>
  );
}
