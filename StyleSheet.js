import { StyleSheet, Dimensions } from 'react-native'

// for setting image size
const win = Dimensions.get('window');
const ratio = win.width / 475;
const logoRatio = win.width / 1760;

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
    textAlign: 'center',
    alignSelf: 'center',
    backgroundColor: 'lightgray',
    width: 'auto',
    padding: 10,
    borderRadius: 10
  },
  favoriteTitle: {
    fontSize: 25,
    width: 'auto',
    margin: 10,
  },
  detailTitle: {
    fontSize: 20,
    textDecorationLine: 'underline',
  },
  pokemonImage: {
    width: win.width,
    height: 475 * ratio,
  },
  homeImage: {
    width: win.width,
    height: 600 * logoRatio,
  },
  flavorImage: {
    width: win.width,
    height: 80 * ratio,
    margin: 60
  },
  input: {
    width: '95%',
    height: 40,
    margin: 6,
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderColor: '#868B8E',
    borderWidth: 1
  },
  horizontalRow: {
    flexDirection: 'row'
  },
  horizontalLeft: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  horizontalRight: {
    flex: 1,
    justifyContent: 'center'
  },
  button: {
    color: 'lightgray'
  },
  homeText: {
    fontSize: 20,
    marginTop: 15,
    marginBottom: 30,
    fontStyle: 'italic'
  },
  homeInfoBox:{
    flexDirection:'row',
    marginTop: 20
  },
  homeInfoText: {
    flex:3,
    fontSize: 15,
    alignItems: 'flex-start',
    textAlignVertical: 'center'
  },
  homeInfoIcon: {
    flex:2,
    alignItems: 'flex-end',
  },
})