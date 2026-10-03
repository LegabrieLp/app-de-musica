import * as React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

export default function SystemOfADown() {
  return (
    <ScrollView>
      <View style={estilo.container}>
        <Text style={estilo.titulo}> System of a Down</Text>
        <View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View>
              <Image
                resizeMode={'stretch'}
                style={estilo.img}
                source={require('../../assets/systemofadown.jpg')}
              />
              <Text style={estilo.rotulo}> System of a Down </Text>
            </View>

            <View>
              <Image
                resizeMode={'stretch'}
                style={estilo.img}
                source={require('../../assets/toxicity.jpg')}
              />
              <Text style={estilo.rotulo}> Chop Suey! </Text>
            </View>
          </ScrollView>
        </View>

        <View style={estilo.resumo}>
          <Text style={estilo.textoResumo}>
            O System of a Down (também conhecido pela sigla SOAD) é uma das
            bandas mais inovadoras e politicamente engajadas do cenário do rock
            moderno. Formado na Califórnia em 1994, o quarteto é composto
            inteiramente por músicos de ascendência armênia: Serj Tankian, Daron
            Malakian, Shavo Odadjian e John Dolmayan. Ao longo de sua
            trajetória, o grupo consolidou uma identidade única ao fundir o peso
            do heavy metal e do nu metal com melodias tradicionais da música
            folclórica armênia, criando uma sonoridade marcada por mudanças
            abruptas de ritmo, vocais teatrais e uma agressividade altamente
            técnica.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  img: {
    width: 330,
    height: 400,
    marginHorizontal: 25,
    borderRadius: 10,
  },
  titulo: {
    fontSize: 30,
    textAlign: 'center',
    color: '#ffffff',
    fontWeight: 700,
    marginTop: 50,
    marginBottom: 30,
  },
  rotulo: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 20,
  },
  resumo: {
    marginTop: 20,
    marginHorizontal: 15,
    backgroundColor: '#ffffff',
    borderRadius: 7,
    padding: 8,
  },
  textoResumo: {
    fontSize: 19,
  },
});
