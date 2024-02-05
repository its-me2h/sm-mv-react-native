import React from 'react';
import {View, Text} from '../../atlasNative';
import {ProfileCard} from '../../components/cards/ProfileCard';

export function SignUpImgUpload({goNext}:any) {
  return (
    <> 
      <Text className="mt-6.5% text-white text-32px" style={{textAlign:'center'}}>
        Let's add a picture to your profile.
      </Text>
      <View>
        <ProfileCard size="2xl" />
      </View>
      <View className={`w-100% flex justify-center items-center`}>
        <View
          role="btn-secondary"
          className={`p-14 rounded-8 items-center bg-blue-600 mt-50px mx-110px mb-15px w-43%`}>
          <Text className={`text-18 uppercase text-white`}>
            Upload from Computer
          </Text>
        </View>
        <View
          role="btn-primary"
          className={`p-14 rounded-8 items-center bg-blue-600 mx-110px mb-10px w-43%`}>
          <Text onPress={()=>goNext()} className={`text-18 uppercase text-white`}>CONTINUE</Text>
        </View>
      </View>
      <Text onPress={()=>goNext()} className={`text-19 text-white mt-20`}>Skip for now</Text>
    </>
  );
}
