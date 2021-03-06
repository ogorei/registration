import { View, Text } from 'react-native';
import React, {VFC, useEffect} from 'react';
import tw from 'tailwind-react-native-classnames';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/types';
import { Button } from 'react-native-elements';
import Input from '../components/Input'


type Props = NativeStackScreenProps<RootStackParamList, 'LoginScreen'>;

export const LoginScreen:VFC<Props> = ({navigation}) => {

    useEffect(()=>{
       },[])

  return (
    <View style={tw`text-2xl font-bold p-4 bg-green-300 flex-1 justify-center items-center`}>
      <Text>ネイティブでログイン(OPEN ID CONNECT用の画面)</Text>
      <Input />
    </View>
  );
};


