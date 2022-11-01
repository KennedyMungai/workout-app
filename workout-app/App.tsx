import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import PlannerScreen from './screens/PlannerScreen';
// import HomeScreen from './screens/HomeScreen';


export default function App()
{
  return (
    <View>
      {/* <HomeScreen /> */}
      <StatusBar style="auto" />
    </View>
  );
}