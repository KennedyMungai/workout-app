import { StatusBar } from 'expo-status-bar';
import Navigation from './navigation';
import useCachedResources from './hooks/useCachedResources';
import { useColorScheme } from 'react-native';


export default function App()
{
  const isLoaded = useCachedResources();
  console.log(isLoaded);

  const theme = useColorScheme()

  if (isLoaded)
  {
    return (
      <>
        <Navigation />
        <StatusBar style="auto" />
      </>
    );
  }
  else
  {
    return null;
  }
}