import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

export default function DaftPunk() {
  return (
    <ScrollView>
      <View style={estilo.container}>
        <Text style={estilo.titulo}> Coldplay</Text>
        <View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View>
              <Image
                resizeMode={'stretch'}
                style={estilo.img}
                source={require('../../assets/coldplay.jpg')}
              />
              <Text style={estilo.rotulo}> Coldplay </Text>
            </View>

            <View>
              <Image
                resizeMode={'stretch'}
                style={estilo.img}
                source={require('../../assets/parachutes.jpg')}
              />
              <Text style={estilo.rotulo}> Sparks </Text>
            </View>
          </ScrollView>
        </View>

        <View style={estilo.resumo}>
          <Text style={estilo.textoResumo}>
            O Coldplay, banda britânica de rock alternativo formada em 1996 em
            Londres, consolidou-se como um dos maiores fenômenos da música
            global do século XXI. Composta por Chris Martin, Jonny Buckland, Guy
            Berryman e Will Champion, a banda transcendeu as barreiras do gênero
            ao misturar melodias melancólicas com hinos pop grandiosos,
            alcançando aclamação tanto da crítica quanto do público. Desde o
            lançamento de seu álbum de estreia, Parachutes (2000), o grupo
            demonstrou uma capacidade singular de evolução sonora e lírica,
            transformando-se de um expoente do indie intimista em um gigante dos
            estádios. Assim, o Coldplay não se destaca apenas por sua
            impressionante vendagem de discos e turnês de proporções
            astronômicas, mas também pelo impacto cultural de suas performances
            visuais e pelo engajamento ativo em causas sociais e de
            sustentabilidade ambiental.
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
