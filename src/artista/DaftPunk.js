import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

export default function DaftPunk() {
  return (
    <ScrollView>
      <View style={estilo.container}>
        <Text style={estilo.titulo}> Daft Punk</Text>
        <View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View>
              <Image
                resizeMode={'stretch'}
                style={estilo.img}
                source={require('../../assets/daftpunk.jpg')}
              />
              <Text style={estilo.rotulo}> System of a Down </Text>
            </View>

            <View>
              <Image
                resizeMode={'stretch'}
                style={estilo.img}
                source={require('../../assets/discovery.jpg')}
              />
              <Text style={estilo.rotulo}> One More Time </Text>
            </View>
          </ScrollView>
        </View>

        <View style={estilo.resumo}>
          <Text style={estilo.textoResumo}>
            O Daft Punk foi uma das duplas mais influentes e inovadoras da
            história da música eletrônica mundial. Formado em Paris, em 1993,
            pelos músicos franceses Guy-Manuel de Homem-Christo e Thomas
            Bangalter, o projeto revolucionou não apenas a sonoridade do gênero,
            mas também a forma como a música pop se posiciona visual e
            mercadologicamente.
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
