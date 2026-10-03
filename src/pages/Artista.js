import * as React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Artista(props) {
  return (
    <View style={estilo.container}>
      <Text style={estilo.titulo}> Os melhores Artistas</Text>

      <FlatList
        data={artistas}

        renderItem={({ item}) =>
        <View style={estilo.artista}>
          <TouchableOpacity onPress={()=>{props.navigation.navigate(item.buttom)}}>
          <Text style={estilo.txtArtista}> {item.nome}</Text>
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

const artistas = [
  {
    uid: 1, 
    nome: 'Billie Eilish',
    like: 100000,
    seguidores: 100000,
    buttom: 'BillieEilish'
  },
  {
    uid: 2, 
    nome: 'Coldplay',
    like: 45000,
    seguidores: 2000,
    buttom: 'Coldplay'
  },
  {
    uid: 3, 
    nome: 'Daft Punk',
    like: 50000,
    seguidores: 5000,
    buttom: 'DaftPunk'
  },
  {
    uid: 4, 
    nome: 'System of a Down',
    like: 67000,
    seguidores: 7000,
    buttom: 'SystemOfADown'
  }

];

const estilo =StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  artista: {
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
    color: "#ffffff",
    fontWeight: 700,
    marginVertical: 30,
  },
  rede: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  txtArtista: {
    fontSize: 20,
  },
  });