import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import tw from 'tailwind-react-native-classnames';

export default function App() {
  return (
    <View style={tw`text-2xl font-bold p-4 bg-red-300 flex-row`}>
      <Text>Reina no App</Text>
      <StatusBar style="auto" />
    </View>
  );
}


