import { View, Text } from 'react-native';
import React, {VFC, useEffect} from 'react';
import tw from 'tailwind-react-native-classnames';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/types';
import { Button } from 'react-native-elements';

type Props = NativeStackScreenProps<RootStackParamList, 'FlexBox'>;

export const ReduxTKScreen:VFC<Props> = ({navigation}) => {
    useEffect(()=>{
        console.log('mounted redux');
        return ()=>{
            console.log('unmounted redux');
        }
    },[])

  return (
    <View style={tw`text-2xl font-bold p-4 bg-green-300 flex-1 justify-center items-center`}>
      <Text>Redux</Text>
      <View style={tw`my-3 bg-pink-400`}>
      <Button
      title="ホームに戻る"
      onPress={()=> navigation.navigate('Welcome')}
      />
      </View>
    </View>
  );
};


