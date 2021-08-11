import React from 'react';
import { 
  SafeAreaView, 
  View, 
  FlatList, 
  StyleSheet, 
  Text, 
  StatusBar,
  ImageBackground,
  Image,
  Dimensions
} from 'react-native';


const photo = {uri:'https://images2.alphacoders.com/261/thumb-1920-26102.jpg'};

const books = [
  {
    id: '1',
    title: 'Come Rezar & Amar',
    img: require('./assets/comerRezarAmar.jpg'),
  },
  {
    id: '2',
    title: 'A Paciente Silenciosa',
    img: require('./assets/aPacienteSilenciosa.jpg'),
  },
  {
    id: '3',
    title: 'The Hobbit',
    img: require('./assets/hobbit.jpg'),
  },
  {
    id: '4',
    title: 'O Senhor dos Anéis',
    img: require('./assets/senhorDosAneis.jpg'),
  },
  {
    id: '5',
    title: 'O Conde de Monte Cristo',
    img: require('./assets/condeDeMonteCristo.jpg'),
  },
  {
    id: '6',
    title: 'Lady Killers',
    img: require('./assets/ladyKillers.jpg'),
  },
  {
    id: '7',
    title: 'Orgulho e Preconceito',
    img: require('./assets/orgulhoPreconceito.jpg'),
  },
  {
    id: '8',
    title: 'Bird Box',
    img: require('./assets/birdBox.jpg'),
  }
];

export default function App() {

  return (
    <SafeAreaView style={styles.container}> 
      <ImageBackground style = {styles.backgroundImage} source={photo} blurRadius={0.5}>   
      <FlatList
        horizontal
        data={books}
        keyExtractor={item => item.id}
        renderItem={({ item }) => 
        <View style={styles.card}>
          <Image source={item.img} style={styles.cardImage} />
          <Text style = {styles.title}>{item.title}</Text>  
        </View>
        }
      />
    </ImageBackground>
    </SafeAreaView>  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  title:{
    marginTop:10,
    fontSize: 18,
    textAlign:'center',
    fontWeight: 'bold',
    color: '#282721',
    textTransform:'uppercase',
    lineHeight: 34,
  },
  backgroundImage:{
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 5,
    paddingVertical:50,
    resizeMode:'cover',
  },
  card:{
    margin: 14,
    padding:10,
    alignItems:'center',
    backgroundColor:'#fff',
    width: Dimensions.get('screen').width * 0.8,
    height: Dimensions.get('window').height * 0.7,
    borderRadius: 10
  },
  cardImage:{
    margin: 10,
    width: Dimensions.get('screen').width * 0.7,
    height: Dimensions.get('window').height * 0.56,
    alignItems:'center',
  }
});