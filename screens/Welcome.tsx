import { View, Text } from 'react-native';
import React,{useEffect} from 'react';
import tw from 'tailwind-react-native-classnames';

export const Welcome = () => {
    useEffect(()=>{
        console.log('HELLO');
        return ()=>{
            console.log('unmounted HELLO');
        }
    },[])
  return (
    <View style={tw`text-2xl font-bold p-4 bg-red-300 flex-1 justify-center items-center`}>
      <Text>HELLO</Text>
    </View>
  );
};


