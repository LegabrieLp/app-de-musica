import * as React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Musica(props) {
  return (
    <View style={estilo.container}>
      <Text style={estilo.titulo}> Músicas </Text>

      <FlatList
        data={musicas}

        renderItem={({ item}) =>
        <View style={estilo.musica}>
          <TouchableOpacity onPress={()=>{props.navigation.navigate(item.buttom)}}>
          <Text style={estilo.txtMusica}> {item.nome}</Text>
          </TouchableOpacity>
          <View style={estilo.rede}>
          <Text style={estilo.curtidas}>
            <MaterialCommunityIcons
              name="thumb-up"
              size={20}
              color={'blue'}
              />
              {item.seguidores} Seguidores
              </Text>
              </View>
              </View>
              }
              />
              </View>
  );
}

const musicas = [
  {
    uid: 1, 
    nome: 'GOLDWING',
    like: 234,
    seguidores: 3456,
    buttom: 'GOLDWING'
  },
  {
    uid: 2, 
    nome: 'Sparks',
    like: 234,
    seguidores: 3456,
    buttom: 'Sparks'
  },
  {
    uid: 3, 
    nome: 'One More Time',
    like: 234,
    seguidores: 3456,
    buttom: 'OneMoreTime'
  },
  {
    uid: 4, 
    nome: 'Chop Suey',
    like: 234,
    seguidores: 3456,
    buttom: 'ChopSuey'
  }

];

const estilo =StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  musica: {
    backgroundColor: '#a2f5e9',
    justifyContent: 'center',
    margin: 15,
    padding: 5,
    borderRadius: 10,
    alignContent: 'center',
    textAlign: 'center',
    
  },
  titulo: {
    fontSize: 30,
    textAlign: 'center',
    color: '#ffffff',
    fontWeight: 700,
    marginVertical: 30,
  },
  rede: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  txtMusica: {
    fontSize: 20,
    marginVertical: 15,
  }
})