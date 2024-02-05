import React from 'react';
import {View, Text} from '../../atlasNative';
import {ProfileCard} from '../../components/cards/ProfileCard';
import CheckBoxIcon from '../shapes/svg/CheckBoxIcon';

export function SignUpIdentity({goNext}:any) {
  return (
    <>
      <Text className="mt-6.5% text-white text-32px mx-100px" style={{textAlign:'center'}}>
      Streamline Identity Verification: Submit Required Documents
      </Text>
      <View className={`w-100% flex justify-center items-start`}>
      <Text className="text-white text-18px mx-75px mt-20px" style={{textAlign:'center'}}>
      Driver’s License / State ID
      </Text>
        <View
          role="btn-secondary"
          className={`p-10 rounded-8 items-center bg-blue-600 mt-10px mx-75px mb-15px w-150px`}>
          <Text className={`text-10 uppercase text-white`}>
          Upload File
          </Text>
        </View>
        <Text className="text-white text-18px mx-75px mt-5px" style={{textAlign:'center'}}>
        Utility Bill with Your Name
      </Text>
        <View
          role="btn-secondary"
          className={`p-10 rounded-8 items-center bg-blue-600 mt-10px mx-75px mb-15px w-150px`}>
          <Text className={`text-10 uppercase text-white`}>
          Upload File
          </Text>
        </View>
        <View className="h-60px flex-row justify-start items-center ml-80px mt-28px">
          <CheckBoxIcon color="#fff" width="18px" />
          <Text className="ml-3px text-18px" style={{color: '#fff'}}>
          Yes, I understand and agree to the BZZR’s Terms & Conditions 
          </Text>
        </View>
        <View className={`w-100% flex justify-center items-center`}>
        <View
          role="btn-secondary"
          className={`p-10 rounded-8 items-center bg-blue-600 mt-30px mx-110px mb-15px w-43%`}>
          <Text onPress={()=>goNext()} className={`text-18 uppercase text-white`}>
            Continue
          </Text>
        </View>
      </View>
      </View>
    </>
  );
}
