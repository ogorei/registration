import { View, Text } from 'react-native';
import React, {useEffect} from 'react';
import tw from 'tailwind-react-native-classnames';

export const FlexBox = () => {
    useEffect(()=>{
        console.log('reina');
        return ()=>{
            console.log('unmounted');
            
        }
        
    },[])
  return (
    <View style={tw`text-2xl font-bold p-4 bg-red-300 flex-row`}>
      <Text>flexbox</Text>
    </View>
  );
};

