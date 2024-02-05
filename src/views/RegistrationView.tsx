import React from 'react';
import { View, Text } from '../atlasNative';

// import CheckBoxIcon from '../components/shapes/svg/CheckBoxIcon';
import { LogoIcon } from '../components/shapes/svg/LogoIcon';
// import { SignUpSetupView } from './SignUpSetupView';
import { TextInput } from '../components/inputs/TextInput';
import { Button } from '../components/buttons/Button';

export function RegistrationView() {

    return (

        <View className="flex-1 bg-bzzr-900 flex-row">

            <View className="relative flex-1 bg-red-700">
                <LogoIcon className='absolute w-115 top-30 left-5%' />
                <video
                    autoPlay
                    loop
                    muted
                    style={{ height: '100%', objectFit: 'cover' }}
                    src="https://s3-figma-videos-production-sig.figma.com/video/1281638921272754530/TEAM/ee25/c43e/-abda-4f34-a893-5a35b9c0182c?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HbJ3X9G9bPSy-Cqkn3FedlrEB7gpcc17G9U6kGXF0T7aaPU3v-DrDCZmkiNmAgNXe9dEBLTEV5ralFNrbrfPCiB0Cg~eiZR06sbWTIRR6V-tQXvoFRPiWBmrfhmLgoBRHzyNgCGHLU-zuqAXRPuYQfgocwgpFazYb0XOJlLX3-TffavWVKT5K88f9-op1tk3-lw5KOxsHvGTmDYLBmWVj-2IJlPV6~3qCJEu5RyiGGb3ysLr8PIu2fJxvUa9tsWeXgrsk5SuOZcawzGrQ7y52-D~zrmLB4WZdR-iTH3AIQeVdQZDI5SI9~AcgZl8kldHI5saw6zvPjy~1um7MnT3Mg__"
                />
            </View>

            <View className="flex-1 items-center justify-center">

                <View className='gap-40 w-80%'>

                    <Text className="text-45 text-white text-center">SIGN UP FOR BZZR</Text>

                    <View className='gap-x-20'>
                        <View className="flex-row gap-y-20">
                            <TextInput placeholder='first name' />
                            <TextInput placeholder='last name' />
                        </View>
                        <TextInput placeholder='username' />
                        <TextInput placeholder='email' />
                        <TextInput placeholder='password' />
                    </View>

                    <Text className="text-18 text-white">Yes, I understand and agree to the Terms of Service and Privacy Policy.</Text>
                    <Button type='primary'>Create Account</Button>
                    <Text className=" text-18 text-white text-center">Already have an account? Log In</Text>

                </View>

            </View>

        </View>
    );
}