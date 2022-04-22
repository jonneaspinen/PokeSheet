import { React, useState, useEffect } from 'react';
import { View, Text, FlatList, SafeAreaView } from 'react-native';
import { ListItem } from 'react-native-elements';
import styles from '../StyleSheet';

const PokemonListScreen = ({ navigation }) => {

    useEffect(() => {
        fetchData();
    }, []);

    const [allPokemon, setAllPokemon] = useState([]);

    // fetching pokemon objects (name + url to details)
    const fetchData = async () => {

        // limits the number of pokemon fetched (all pokemon = 1126, normal pokemon = 898)
        const fetchLimit = '898';

        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${fetchLimit}`);
            const data = await response.json();
            setAllPokemon(data.results);
        }
        catch (error) {
            console.error('Trouble finding pokemon...');
        }
    }

    const renderItem = ({ item }) => {
        return (
            <ListItem
                // make list items clickable
                // navigate to details page
                // pass object with it
                onPress={() => {
                    navigation.navigate('Pokemon details', { pokemon: item });
                }}
                bottomDivider
            >
                {/* NAME */}
                <ListItem.Title>
                    {item.name}
                </ListItem.Title>
            </ListItem>
        )
    }

    return (
        <SafeAreaView style={styles.mainContainer}>
            <View>
                {/* List of pokemon */}
                <FlatList
                    data={allPokemon}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => index}
                />
            </View>
        </SafeAreaView>
    )
}

export default PokemonListScreen;