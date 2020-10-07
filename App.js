import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SearchScreen from './src/screens/SearchScreen';
import DetailScreen from './src/screens/DetailScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Search'>
        <Stack.Screen
          name='Search'
          component={SearchScreen}
          options={{ title: 'Restaurants Search' }}
        />
        <Stack.Screen
          name='Detail'
          component={DetailScreen}
          options={{ title: 'Restaurant Detail' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
