import React from 'react';
import {View, Text} from '../atlasNative';
import {TextInput} from '../components/inputs/TextInput';
import CheckBoxIcon from '../components/shapes/svg/CheckBoxIcon';
import { LogoIcon } from '../components/shapes/svg/LogoIcon';
import { SignUpSetupView } from './SignUpSetupView';

export function SignUpView() {
  const [showSettings,setShowSettings]=React.useState(false)
  return (
    showSettings ?
    <SignUpSetupView/>
    :
    <View className="flex-1 bg-bzzr-900 flex-row">
      <View className="basis-50%">
      <LogoIcon height='10%' className='absolute left-60px top-30px' />
        <video
          // autoPlay
          loop
          muted
          style={{height: '100%', objectFit: 'cover'}}
          src="https://s3-figma-videos-production-sig.figma.com/video/1281638921272754530/TEAM/ee25/c43e/-abda-4f34-a893-5a35b9c0182c?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HbJ3X9G9bPSy-Cqkn3FedlrEB7gpcc17G9U6kGXF0T7aaPU3v-DrDCZmkiNmAgNXe9dEBLTEV5ralFNrbrfPCiB0Cg~eiZR06sbWTIRR6V-tQXvoFRPiWBmrfhmLgoBRHzyNgCGHLU-zuqAXRPuYQfgocwgpFazYb0XOJlLX3-TffavWVKT5K88f9-op1tk3-lw5KOxsHvGTmDYLBmWVj-2IJlPV6~3qCJEu5RyiGGb3ysLr8PIu2fJxvUa9tsWeXgrsk5SuOZcawzGrQ7y52-D~zrmLB4WZdR-iTH3AIQeVdQZDI5SI9~AcgZl8kldHI5saw6zvPjy~1um7MnT3Mg__"
        />
      </View>
      <View className="basis-50% flex-column">
        <View className="h-15vh items-end justify-center">
          <Text className="mr-50px text-21px" style={{color: '#fff'}} onPress={() => {}}>
            Athlete? Sign up here
          </Text>
        </View>
        <View className="h-107px flex justify-center items-center ">
          <Text className="flex justify-center items-center text-34px" style={{color: '#fff'}}>SIGN UP FOR BZZR</Text>
        </View>
        <View className="flex-1 flex-column justify-start mt-43px px-155px gap-18px h-270px">
          <View className="flex-row w-100% gap-25px">
            <TextInput className="flex-1" />
            <TextInput className="flex-1" />
          </View>
          <TextInput />
          <TextInput />
          <TextInput />
        </View>
        <View className="h-60px flex-row justify-start items-center ml-150px">
          <CheckBoxIcon color="#fff" width="18px" />
          <Text className="ml-3px text-16px" style={{color: '#fff'}}>
            Yes, I understand and agree to the Terms of Service and Privacy
            Policy.
          </Text>
        </View>
        <View
          role="btn-primary"
          className={`p-14 rounded-8 items-center bg-blue-600 mt-30px mx-150px mb-30px`}>
          <Text onPress={()=>{setShowSettings(true)}} className={`text-18 uppercase text-white`}>Create Account</Text>
        </View>
        <Text className="flex justify-center" style={{color: '#fff'}}>
        Already have an account? Log In
        </Text>
      </View>
    </View>
  );
}
