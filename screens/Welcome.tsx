import { View, Text, ImageBackground } from 'react-native';
import React,{VFC,useEffect} from 'react';
import tw from 'tailwind-react-native-classnames';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/types';
import { Button } from 'react-native-elements';
import Input from '../components/Input';

type Props = NativeStackScreenProps<RootStackParamList, 'FlexBox'>;

export const Welcome:VFC<Props> = ({navigation}) => {
    const image = { uri: 'https://images.unsplash.com/photo-1615789591457-74a63395c990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZG9tZXN0aWMlMjBjYXR8ZW58MHx8MHx8&w=1000&q=80' };

    useEffect(()=>{
        console.log('HELLO');
        return ()=>{
            console.log('unmounted HELLO');
        }
    },[])
  return (
    <View style={tw`text-2xl font-bold bg-blue-200 flex-1 justify-center items-center`}>
        <ImageBackground source={image} style={tw`flex-auto w-full justify-center items-center`}>
            <Text style={tw`flex justify-center text-white items-center text-2xl`}>ようこそNEKOの世界へ</Text>
            <Input />
            <View style={tw`mt-8`}>
                <Button
                title="ギャラリーへ行く"
                onPress={()=> navigation.navigate('FlexBox')}
                />
            </View>
        </ImageBackground>
        
    </View>
  );
};


