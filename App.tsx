import { ThemeProvider } from 'styled-components/native';

import { useFonts, NunitoSans_400Regular, NunitoSans_700Bold } from '@expo-google-fonts/nunito-sans';

import theme from '@theme/index';

import Home from '@screens/Home';

import { Loading } from '@components/Loading';

export default function App() {

  const [fontLoaded] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold });

  return (
    <ThemeProvider theme={theme} >
     {fontLoaded ? <Home /> : <Loading /> } 
    </ThemeProvider>
  );
}