import React from 'react';
import {View, Text, Pressable} from '../atlasNative';
import {LogoIcon} from '../components/shapes/svg/LogoIcon';
import {ProgressBar} from '../components/shapes/progress/ProgressBar';
import {ProfileCard} from '../components/cards/ProfileCard';
import { SignUpImgUpload } from '../components/cards/SignUpImgUpload';
import { SignUpDesc } from '../components/cards/SignUpDesc';
import { SignUpSocialMedia } from '../components/cards/SignUpSocialMedia';
import { SignUpIdentity } from '../components/cards/SignUpIdentity';
import ArrowLeftIcon from '../components/shapes/svg/ArrowLeftIcon';

export function SignUpSetupView() {
    const [showingIndex,setShowingIndex]=React.useState(0)
    const ViewsList=[
    <SignUpImgUpload goNext={()=>setShowingIndex((prevValue)=>prevValue+1)}/>,
    <SignUpDesc goNext={()=>setShowingIndex((prevValue)=>prevValue+1)}/>,
    <SignUpSocialMedia goNext={()=>setShowingIndex((prevValue)=>prevValue+1)}/>,
    <SignUpIdentity goNext={()=>setShowingIndex((prevValue)=>prevValue+1)}/>]
  return (
    <View className="flex-1 bg-bzzr-900 flex-row justify-center items-start">
      <LogoIcon height="10%" className="absolute left-60px top-30px" />
      <View className="mt-5.7% w-38% h-80.5% bg-bzzr-200 border-1 border-bzzr-600 rounded-18 flex-column justify-start items-center">
        <LogoIcon height="12%" className="mt-5%" />
        <View className="mt-4.3% w-100% flex justify-center items-center">
           {showingIndex>0 && <Pressable className="absolute left-65px top--10px h-20px" onPress={()=>setShowingIndex((prevValue)=>prevValue-1)}>
                <ArrowLeftIcon color="white" height={"100%"}/>
            </Pressable>}
          <ProgressBar progress={((showingIndex+1)/ViewsList.length)*100} width={'220px'} />
        </View>
        {ViewsList[showingIndex]}
      </View>
    </View>
  );
}
