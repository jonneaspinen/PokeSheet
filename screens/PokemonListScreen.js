import { React, useState, useEffect } from 'react';
import { View, TextInput, FlatList, SafeAreaView, Text } from 'react-native';
import { Button, ListItem } from 'react-native-elements';
import capitalizeString from '../components/CapitalizeString';
import styles from '../StyleSheet';
import * as SQLite from 'expo-sqlite';

const PokemonListScreen = ({ navigation }) => {

    // creating database if it doesn't exist
    useEffect(() => {
        fetchData();
        favoritedb.transaction(tx => {
            tx.executeSql
                (
                    'create table if not exists favorite (id integer primary key not null, name text, url text);'
                );
        });
    }, []);

    const favoritedb = SQLite.openDatabase('favorite.db');

    const [allPokemon, setAllPokemon] = useState([]);

    // fetching pokemon objects (name + url to details)
    const fetchData = async () => {

        // limits the number of pokemon fetched 
        // all pokemon = 1126, normal pokemon = 898
        const fetchLimit = '15';

        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${fetchLimit}`);
            const data = await response.json();
            setAllPokemon(data.results);
            setFilteredPokemon(data.results);
        }
        catch (error) {
            console.error('Trouble finding pokemon...');
        }
    }

    // rendering the list
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
                <ListItem.Content>
                    <ListItem.Title>
                        {capitalizeString(item.name)}
                    </ListItem.Title>
                </ListItem.Content>

                <ListItem.Content right>
                    <ListItem.Title right>
                        <Button
                            icon={{
                                name: 'star',
                                type: 'ionicon',
                                size: 20,
                                color: 'orange',
                            }}
                            buttonStyle={{
                                backgroundColor: 'transparent',
                            }}
                            onPress={() => {
                                saveItem(item)
                            }}
                        />
                    </ListItem.Title>
                </ListItem.Content>
            </ListItem>
        )
    }

    // filtering the list (by keyword)
    const [search, setSearch] = useState('');
    const [filteredPokemon, setFilteredPokemon] = useState([]);

    const filterPokemon = (text) => {
        if (text) {
            const filteredData = allPokemon.filter((item) => {
                const itemData = item.name;
                const textData = text.toLowerCase();
                return itemData.indexOf(textData) > -1;
            });
            setFilteredPokemon(filteredData);
            setSearch(text);
        } else {
            setFilteredPokemon(allPokemon);
            setSearch(text);
        }
    }

    // saving Pokemon to 'favorite' -database
    const saveItem = (item) => {
        favoritedb.transaction(tx => {
            tx.executeSql('insert into favorite (name, url) values (?, ?);', [item.name, item.url]);
        }, null, null);
    }

    return (
        <SafeAreaView style={styles.mainContainer}>
            <View>
                {/* Search bar */}
                <TextInput
                    placeholder='Search...'
                    onChangeText={(text) => filterPokemon(text)}
                    value={search}
                    style={styles.input}
                />
                {/* List of pokemon */}
                <FlatList
                    data={filteredPokemon}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => index}
                />
            </View>
        </SafeAreaView>
    )
}

export default PokemonListScreen;