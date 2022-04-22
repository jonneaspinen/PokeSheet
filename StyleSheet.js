import { StyleSheet, Dimensions } from 'react-native'

// for setting image size
const win = Dimensions.get('window');
const ratio = win.width/475;

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  detailContainer: {
    flex: 1,
    marginLeft: 20,
    marginVertical: 20,
  },
  container: {
    flex: 1,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  pokemonTitle: {
    fontSize: 25,
    textAlign:'center',
    alignSelf: 'center',
    backgroundColor: 'lightgray',
    width: 'auto',
    padding: 10,
    borderRadius: 10
  },
  detailTitle: {
    fontSize: 20,
    textDecorationLine: 'underline',
  },
  pokemonImage: {
    width: win.width,
    height: 475*ratio,
  }
})