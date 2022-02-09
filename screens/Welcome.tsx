import { View, Text } from 'react-native';
import React,{VFC,useEffect} from 'react';
import tw from 'tailwind-react-native-classnames';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/types';
import { Button } from 'react-native-elements';

type Props = NativeStackScreenProps<RootStackParamList, 'FlexBox'>;

export const Welcome:VFC<Props> = ({navigation}) => {
    useEffect(()=>{
        console.log('HELLO');
        return ()=>{
            console.log('unmounted HELLO');
        }
    },[])
  return (
    <View style={tw`text-2xl font-bold p-4 bg-blue-200 flex-1 justify-center items-center`}>
      <Text>ようこそREINAのアプリへ</Text>
      <View style={tw`my-3 bg-pink-400`}>
      <Button
      title="flexBoxへ行く"
      onPress={()=> navigation.navigate('FlexBox')}
      />
      </View>
    </View>
  );
};


