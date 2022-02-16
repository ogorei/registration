import { View, Text, ImageBackground } from 'react-native';
import React,{VFC,useEffect} from 'react';
import tw from 'tailwind-react-native-classnames';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/types';
import { Button } from 'react-native-elements';
import Login from '../components/Login';

type Props = NativeStackScreenProps<RootStackParamList, 'FlexBox'>;

export const Welcome:VFC<Props> = ({navigation}) => {
    const image = { uri: 'https://www.watabe-wedding.co.jp/company/en/assets/images/sp/l-index-mainVisual.jpg' };

    useEffect(()=>{
        console.log('HELLO');
        return ()=>{
            console.log('unmounted HELLO');
        }
    },[])
  return (
    <View style={tw`text-2xl font-bold bg-blue-200 flex-1 justify-center items-center`}>
        <ImageBackground source={image} style={tw`flex-auto w-full justify-center items-center`}>
            <Text style={tw`flex justify-center text-white items-center text-2xl`}>ようこそ</Text>
            <View style={tw`mt-8`}>
                <Login />
                <Button
                title="Native Login"
                onPress={()=> navigation.navigate('LoginScreen')}
                />
            </View>
        </ImageBackground>
        
    </View>
  );
};


