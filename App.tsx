import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import LoginScreen from './src/features/auth/screens/LoginScreen';
import { store } from './src/utility/store';
import PublicationsScreen from './src/features/publications/screens/PublicationsScreen';
import { screens } from './src/utility/constants';
import { useFonts } from 'expo-font';

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    'Inter-Regular': require('./assets/fonts/Inter-Regular.otf'),
    'Inter-ExtraBold': require('./assets/fonts/Inter-ExtraBold.otf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={screens.loginScreen}
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name={screens.loginScreen} component={LoginScreen} />
          <Stack.Screen name={screens.publicationsScreen} component={PublicationsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
