import * as React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

export default function Home(){
  return(
    <View style={estilo.container}>
      <ImageBackground 
        source={require('../../assets/bmg.jpg')} 
        style={estilo.fundoimg}
        imageStyle={{ resizeMode: 'cover' }}
      >
        <Text style={estilo.titulo}> App de Música </Text>
      </ImageBackground>
    </View>
  );
}

const estilo = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#000000'
  },
  fundoimg:{
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  titulo:{
    fontSize: 30,
    textAlign: 'center',
    color: '#ffffff',
    fontWeight: '700',
  }
});