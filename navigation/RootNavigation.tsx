import React, {useEffect} from 'react';
import tw from 'tailwind-react-native-classnames';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FlexBox } from '../screens/FlexBox';
import { Welcome } from '../screens/Welcome';
import { ReduxTKScreen } from '../screens/ReduxTKScreen';

export const RootNavigation = () => {
    const Stack = createNativeStackNavigator();

    useEffect(()=>{
        console.log('reina');
        return ()=>{
            console.log('unmounted');
        }
    },[])
  return (
    <NavigationContainer>
        {/* initialRoutename allow me to specify the first screen to display */}
        <Stack.Navigator initialRouteName="Welcome">
            <Stack.Screen name="Welcome" component={Welcome} />
            <Stack.Screen name="FlexBox" component={FlexBox} />
            <Stack.Screen name="Redux" component={ReduxTKScreen} />

        </Stack.Navigator>
  </NavigationContainer>
  );
};

