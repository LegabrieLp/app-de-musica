import * as React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
 
export default function ChopSuey() {
  const letra = `Wake up (wake up)
Grab a brush and put a little make-up
Hide the scars to fade away the shake-up (hide the scars to fade away the-)
Why'd you leave the keys upon the table?
Here you go create another fable, you wanted to
Grab a brush and put a little make-up, you wanted to
Hide the scars to fade away the shake-up, you wanted to
Why'd you leave the keys upon the table? You wanted to
I don't think you trust
In my self-righteous suicide
I cry when angels deserve to die
Wake up (wake up)
Grab a brush and put a little make-up
Hide the scars to fade away the (hide the scars to fade away the shake-up)
Why'd you leave the keys upon the table?
Here you go create another fable, you wanted to
Grab a brush and put a little make-up, you wanted to
Hide the scars to fade away the shake-up, you wanted to
Why'd you leave the keys upon the table? You wanted to
I don't think you trust
In my self-righteous suicide
I cry when angels deserve to die
In my self-righteous suicide
I cry when angels deserve to die
Father (father)
Father (father)
Father (father)
Father (father)
Father, into your hands I commend my spirit
Father, into your hands
Why have you forsaken me?
In your eyes forsaken me
In your thoughts forsaken me
In your heart forsaken me, oh
Trust in my self-righteous suicide
I cry when angels deserve to die
In my self-righteous suicide
I cry when angels deserve to die

Compositores: Daron Malakian, Serj Tankian.`;
 
  return (
    <ScrollView style={estilo.container}>
      <Text style={estilo.titulo}>Chop Suey!</Text>
 
      <Text style={estilo.subtitulo}>
        System of a Down
      </Text>
              <View>
              <Image
                resizeMode={'stretch'}
                style={estilo.img}
                source={require('../../assets/toxicity.jpg')}
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