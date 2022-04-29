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
    backgroundColor: 'lightgray',
    width: 'auto',
    padding: 10,
    borderRadius: 10,
    marginLeft: 30,
    flex: 3,
  },
  favoriteTitle: {
    fontSize: 25,
    width: 'auto',
    margin: 10,
  },
  abilitiesTitle: {
    fontSize: 20,
    borderRadius: 15,
    padding: 10,
    alignSelf: 'flex-start',
    color: 'white',
    backgroundColor: '#db4b3d',
    fontWeight: 'bold',
    marginTop: 5
  },
  movesTitle: {
    fontSize: 20,
    borderRadius: 15,
    padding: 10,
    alignSelf: 'flex-start',
    color: 'white',
    backgroundColor: '#e8b527',
    fontWeight: 'bold',
    marginTop: 5
  },
  statsTitle: {
    fontSize: 20,
    borderRadius: 15,
    padding: 10,
    alignSelf: 'flex-start',
    color: 'white',
    backgroundColor: '#2e6ec7',
    fontWeight: 'bold',
    marginTop: 5
  },
  typesTitle: {
    fontSize: 20,
    borderRadius: 15,
    padding: 10,
    alignSelf: 'flex-start',
    color: 'white',
    backgroundColor: '#1cad1e',
    fontWeight: 'bold',
    marginTop: 5
  },
  detailListText:{
    fontSize:16
  },
  detailListBox:{
    padding: 10
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
    flexDirection: 'row',
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