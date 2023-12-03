import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SearchPage from './src/page/SearchPage';
import DetailsPage from './src/page/DetailsPage';

const Stack = createStackNavigator();

//entry point to the app, navigation to the screen can be set up at here

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerTitleAlign: 'center' }}
        initialRouteName='Search'
      >
        <Stack.Screen
          name='Search'
          component={SearchPage}
          options={{ title: 'Local Restaurant Finder' }}
        />
        <Stack.Screen
          name='Detail'
          component={DetailsPage}
          options={{
            title: 'Restaurant Detail',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
