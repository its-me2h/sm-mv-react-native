import React from 'react';
import {View, Text} from '../../atlasNative';
import {ProfileCard} from '../../components/cards/ProfileCard';
import { TextInput } from '../inputs/TextInput';

export function SignUpDesc({goNext}:any) {
  return (
    <>
      <Text className="mt-6.5% text-white text-32px mx-80px" style={{textAlign:'center'}}>
      Write a brief description about yourself, your sports journey, and your passions
      </Text>
      <View className="w-80%">
        <TextInput multiline className="h-230px mt-10px"/>
      </View>
      <View className={`w-100% flex justify-center items-center`}>
        <View
          role="btn-secondary"
          className={`p-14 rounded-8 items-center bg-blue-600 mt-20px mx-110px mb-15px w-43%`}>
          <Text onPress={()=>goNext()} className={`text-18 uppercase text-white`}>
            Continue
          </Text>
        </View>
      </View>
      <Text onPress={()=>goNext()} className={`text-19 text-white mt-20`}>Skip for now</Text>
    </>
  );
}
