import * as React from "react";
import { View, Text, StyleSheet, ScrollView, Image} from 'react-native';

export default function OneMoreTime() {
  const letra = `
  One more time
  One more time
  One more time, we're gonna celebrate
  Oh yeah, all right, don't stop dancing
  One more time, we're gonna celebrate
  Oh yeah, all right, don't stop the dancing
  
  One more time, we're gonna celebrate
  Oh yeah, all right, don't stop the dancing
  One more time, we're gonna celebrate
  Oh yeah
  
  One more time
  Music's got me feeling so free
  We're gonna celebrate
  Celebrate and dance so free
  One more time
  
  Music's got me feeling so free
  We're gonna celebrate
  Celebrate and dance so free
  One more time
  
  Music's got me feeling
  We're gonna celebrate
  Celebrate and dance so free
  One more time
  
  Music's got me feeling
  We're gonna celebrate
  Celebrate and dance so free
  One more
  
  Music's got me feeling so free
  We're gonna celebrate
  Celebrate and dance so free
  One more time
  
  Music's got me feeling so free
  We're gonna celebrate
  Celebrate and dance so free
  One more time
  
  Music's got me feeling
  We're gonna celebrate
  Celebrate and dance so free
  One more time
  
  Music's got me feeling so free
  We're gonna celebrate
  Celebrate and dance so free
  One more time
  
  Music's got me feeling so-
  We're gonna celebrate
  Celebrate and dance so free
  One more time
  
  Music's got me feeling so free
  We're gonna celebrate
  Celebrate and dance so-
  One more time
  
  Music's got me feeling
  We're gonna celebrate
  Celebrate and dance
  One more time
  
  Music's got me feeling
  We're gonna celebrate
  Celebrate and dance so-
  One more time

Compositores: Guy Manuel Homem Christo / Thomas Bangalter / Anthony Wayne Moore`;

  return (
    <ScrollView style={estilo.container}>
      <Text style={estilo.titulo}>One More Time</Text>

      <Text style={estilo.subtitulo}>Daft Punk</Text>
            <View>
            <Image
                resizeMode={'stretch'}
                style={estilo.img}
                source={require('../../assets/discovery.jpg')}
              />
            </View>
      <View style={estilo.resumo}>
        <Text style={estilo.textoResumo}>{letra}</Text>
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
