import * as React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
 
export default function Sparks() {
  const letra = `Did I drive you away?
I know what you'll say
You say, "Oh, sing one we know"
But I promise you this
I'll always look out for you
Yeah, that's what I'll do
I say, "Oh"
I say, "Oh"
My heart is yours
It's you that I hold on to
Yeah, that's what I do
And I know I was wrong
But I won't let you down
Oh, yeah, I will, yeah, I will, yes, I will
I said, "Oh"
I cry, "Oh"
Yeah, I saw sparks
Yeah, I saw sparks
And I saw sparks
Yeah, I saw sparks
Sing it out
La-la-la-la, oh-oh
La-la-la-la, oh-oh
La-la-la-la, oh-oh
La-la-la-la, oh-oh

Compositores: Christopher Anthony John Martin / Guy Rupert Berryman / William Champion / Jonathan Mark Buckland`;
 
  return (
    <ScrollView style={estilo.container}>
      <Text style={estilo.titulo}>Sparks</Text>
 
      <Text style={estilo.subtitulo}>
        Coldplay
      </Text>
             <View>
            <Image
                resizeMode={'stretch'}
                style={estilo.img}
                source={require('../../assets/parachutes.jpg')}
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