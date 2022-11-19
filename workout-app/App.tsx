import { StatusBar } from 'expo-status-bar';
import Navigation from './navigation';
import useCachedResources from './hooks/useCachedResources';
import { useColorScheme } from 'react-native';


export default function App()
{
  const isLoaded = useCachedResources();
  console.log(isLoaded);

  const colorScheme = useColorScheme()

  if (isLoaded)
  {
    return (
      <>
        <Navigation colorScheme={colorScheme} />
        <StatusBar style="auto" />
      </>
    );
  }
  else
  {
    return null;
  }
}