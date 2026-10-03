import * as React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
 
export default function GOLDWING() {
  const letra = `He hath come to the bosom of his beloved
Smiling on him, she beareth him to highest heaven
With yearning heart
On thee we gaze
Oh, gold winged messenger of mighty gods
Gold-winged angel
Go home, don't tell
Anyone what you are
You're sacred and they're starved
And their art is getting dark
And there you are to tear apart
Tear apart, tear apart
Tear apart
You better keep your head down-down
Da-da-down-down, da-da-down-down
Better keep your head down-down
Da-da-down-down, da-da-down-down
They're gonna tell you what you wanna hear
Then they're gonna disappear
Gonna claim you like a souvenir
Just to sell you in a year
You better keep your head down-down
Da-da-down-down, da-da-down-down
Keep your head down-down
Da-da-down-down, da-da-down-down
Better keep your head down-down
Da-da-down-down, da-da-down-down
Keep your head down-down
Da-da-down-down, da-da-down-down
That's good

Compositores: Billie Eilish O'Connell / Finneas Baird O'Connell`;
 
  return (
    <ScrollView style={estilo.container}>
      <Text style={estilo.titulo}>GOLDWING</Text>
 
      <Text style={estilo.subtitulo}>
        Billie Eilish
      </Text>
            <View>
              <Image
                resizeMode={'stretch'}
                style={estilo.img}
                source={require('../../assets/billieeilishalbum.jpg')}
              />
            </View>
      <View style={estilo.resumo}>
        <Text style={estilo.textoResumo}>
          {letra}
        </Text>
      </View>
    </ScrollView>
  );
}
 
const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    paddingBottom: 30,
  },
 
  titulo: {
    fontSize: 30,
    textAlign: 'center',
    color: '#ffffff',
    fontWeight: '700',
    marginTop: 50,
    marginBottom: 10,
  },
 
  subtitulo: {
    fontSize: 20,
    textAlign: 'center',
    color: '#1f3fb7',
    marginBottom: 20,
  },
 
  resumo: {
    marginHorizontal: 15,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 12,
  },
 
  img: {
    width: 330,
    height: 400,
    marginHorizontal: 25,
    borderRadius: 10,
  },

  textoResumo: {
    fontSize: 19,
    lineHeight: 32,
    color: '#222',
  },
});