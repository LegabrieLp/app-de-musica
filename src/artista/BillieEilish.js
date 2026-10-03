import * as React from "react";
import { View, Text, StyleSheet, Image, ScrollView,} from 'react-native';

export default function BillieEilish() {
  return (
    <ScrollView>
      <View style={estilo.container}>
        <Text style={estilo.titulo}> Billie Eilish</Text>
        <View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View>
              <Image
                resizeMode={'stretch'}
                style={estilo.img}
                source={require('../../assets/billieeilish.jpg')}
              />
              <Text style={estilo.rotulo}> Billie Eilish </Text>
            </View>

            <View>
              <Image
                resizeMode={'stretch'}
                style={estilo.img}
                source={require('../../assets/billieeilishalbum.jpg')}
              />
              <Text style={estilo.rotulo}> GOLDWING </Text>
            </View>
          </ScrollView>
        </View>

        <View style={estilo.resumo}>
          <Text style={estilo.textoResumo}>
            Billie Eilish, conhecida mundialmente como Billie Eilish, é uma das
            artistas mais influentes e revolucionárias da música pop
            contemporânea. Nascida em Los Angeles, em 2001, a cantora e
            compositora norte-americana emergiu no cenário musical ainda na
            adolescência, conquistando o público e a crítica com sua abordagem
            estética única, produções minimalistas e composições profundamente
            confessionais.
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
