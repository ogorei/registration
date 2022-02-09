import { View, Text } from 'react-native';
import React, {VFC, useEffect} from 'react';
import tw from 'tailwind-react-native-classnames';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/types';
import { Button } from 'react-native-elements';

type Props = NativeStackScreenProps<RootStackParamList, 'FlexBox'>;
// functional componentの型を適応するためVFCを使ってtype Propsのジェネリックpropsを定義する。そしてnavigationの機能を使えるようになる。

export const FlexBox:VFC<Props> = ({navigation}) => {
    useEffect(()=> {
        console.log('reina');
        return ()=>{
            console.log('unmounted');
        }

    },[])
  return (
    <View style={tw`items-center justify-center text-2xl font-bold p-4 bg-gray-300 flex-row`}>
        <View style={tw`w-16 h-16 bg-indigo-500`}>
            <Text>Image</Text>
        </View>
        <View style={tw`justify-center items-center w-16 h-16 bg-pink-500`}>
            <Text>Image</Text>
        </View>
        <View style={tw`w-16 h-16 bg-gray-500`}>
            <Text>Image</Text>
        </View>
      {/* <View style={tw`my-3 bg-blue-400`}>
      <Button
      title="Reduxへ行く"
      onPress={()=> navigation.navigate('Redux')}
      />
      </View> */}
    </View>
  );
};

