import * as React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import OneMoreTime from './musica/OneMoreTime';
import Sparks from './musica/Sparks';
import GOLDWING from './musica/GOLDWING';
import ChopSuey from './musica/ChopSuey';
import Musica from './pages/Musica';

const Stack = createStackNavigator();

export default function RotasButtomMusica() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Musica"
        component={Musica}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="OneMoreTime"
        component={OneMoreTime}
        options={{ title: 'One More Time' }}
      />
      <Stack.Screen
        name="Sparks"
        component={Sparks}
        options={{ title: 'Sparks' }}
      />
      <Stack.Screen
        name="GOLDWING"
        component={GOLDWING}
        options={{ title: 'GOLDWING' }}
      />
      <Stack.Screen
        name="ChopSuey"
        component={ChopSuey}
        options={{ title: 'Chop Suey!' }}
      />
    </Stack.Navigator>
  );
}