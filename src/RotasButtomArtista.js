import * as React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import DaftPunk from './artista/DaftPunk';
import Coldplay from './artista/Coldplay';
import BillieEilish from './artista/BillieEilish';
import SystemOfADown from './artista/SystemOfADown';
import Artista from './pages/Artista';

const Stack = createStackNavigator();

export default function RotasButtomArtista() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Artista"
        component={Artista}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DaftPunk"
        component={DaftPunk}
        options={{ title: 'Daft Punk' }}
      />
      <Stack.Screen
        name="Coldplay"
        component={Coldplay}
        options={{ title: 'Coldplay' }}
      />
      <Stack.Screen
        name="BillieEilish"
        component={BillieEilish}
        options={{ title: 'Billie Eilish' }}
      />
      <Stack.Screen
        name="SystemOfADown"
        component={SystemOfADown}
        options={{ title: 'System Of A Down' }}
      />
    </Stack.Navigator>
  );
}
