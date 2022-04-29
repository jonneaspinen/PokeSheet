import { React, useState, useEffect } from 'react';
import { SafeAreaView, View, ScrollView, Text, Image, ActivityIndicator, Alert } from 'react-native';
import CollapsibleList from 'react-native-collapsible-list';
import { Button } from 'react-native-elements';
import capitalizeString from '../components/CapitalizeString';
import styles from '../StyleSheet';
import * as SQLite from 'expo-sqlite'


const PokemonDetailScreen = ({ route, navigation }) => {

    useEffect(() => {
        fetchDetails();
    }, []);

    const favoritedb = SQLite.openDatabase('favorite.db');

    const [pokemonDetails, setPokemonDetails] = useState({});
    const [abilities, setAbilities] = useState([]);
    const [moves, setMoves] = useState([]);
    const [stats, setStats] = useState([]);
    const [types, setTypes] = useState([]);

    const [fetchLoading, setFetchLoading] = useState(true);
    const [imageLoading, setImageLoading] = useState();

    // get the list view object from params
    const { pokemon } = route.params;
    // get 'url' to details page
    const pokemonUrl = pokemon.url;

    // fetch pokemon details
    const fetchDetails = async () => {

        try {
            const response = await fetch(pokemonUrl);
            const data = await response.json();
            setPokemonDetails(data);
            setAbilities(data.abilities);
            setStats(data.stats);
            setTypes(data.types);
            setMoves(data.moves);
            setFetchLoading(false);
        }
        catch (error) {
            console.error('Trouble finding pokemon...');
        }
    }

    // saving Pokemon to 'favorite' -database
    const saveItem = () => {
        favoritedb.transaction(tx => {
            // checking whether pokemon with same name is already in the database
            tx.executeSql('select * from favorite where name=?;', [pokemonDetails.name], (_, result) => {
                {   // if not in db, add + alert
                    result.rows.length < 1 ?
                        (
                            favoritedb.transaction(tx => {
                                tx.executeSql('insert into favorite (name, url) values (?, ?);',
                                    [pokemonDetails.name, `https://pokeapi.co/api/v2/pokemon/${pokemonDetails.id}`]);
                            }, null, null),
                            Alert.alert('Done!', 'Added Pokemon to favorites.', [{ text: 'OK', onPress: () => console.log('alert closed') }])
                        )
                        // if already in db, alert
                        : result.rows.length >= 1 ?
                            Alert.alert('Oops!', 'Pokemon is already favorite.', [{ text: 'OK', onPress: () => console.log('alert closed') }])

                            : console.log('something went wrong')
                }
            });
        });
    }

    // map Pokemon abilities to list items
    const abilityList = () => {
        return abilities.map((abilities) => {
            return (
                <View key={abilities.ability.name}>
                    <Text style={styles.detailListText}>
                        {abilities.ability.name}
                    </Text>
                </View>
            );
        });
    }

    const moveList = () => {
        return moves.map((moves) => {
            return (
                <View key={moves.move.name}>
                    <Text style={styles.detailListText}>
                        {moves.move.name}
                    </Text>
                </View>
            );
        });
    }

    const statList = () => {
        return stats.map((stats) => {
            return (
                <View key={stats.stat.name}>
                    <Text style={styles.detailListText}>
                        {stats.stat.name}: {stats.base_stat}
                    </Text>
                </View>
            );
        });
    }

    const typeList = () => {
        return types.map((types) => {
            return (
                <View key={types.type.name}>
                    <Text style={styles.detailListText}>
                        {types.type.name}
                    </Text>
                </View>
            );
        });
    }

    // display if fetch isn't complete
    if (fetchLoading) {
        return (
            <View style={styles.container}>
                <Text>Loading...</Text>
            </View>
        );
    }
    return (
        <SafeAreaView style={styles.mainContainer}>
            <ScrollView>
                {/* IMAGE */}
                <View>
                    <Image
                        source={{ uri: pokemonDetails.sprites.other['official-artwork'].front_default }}
                        style={styles.pokemonImage}
                        onLoadStart={() => setImageLoading(true)}
                        onLoadEnd={() => setImageLoading(false)}
                    />
                    {/* if loading, display 'activity indicator' */}
                    {imageLoading && (
                        <ActivityIndicator
                            size='large'
                            color='gray'
                            style={{
                                position: 'absolute',
                                left: 0,
                                right: 0,
                                top: 0,
                                bottom: 0
                            }}
                        />
                    )}
                </View>
                <View style={styles.horizontalRow}>
                    { /* NAME */}
                    <Text style={styles.pokemonTitle}>
                        {capitalizeString(pokemonDetails.forms[0].name)}
                    </Text>
                    { /* FAVORITE */}
                    <View style={styles.horizontalRight}>
                        <Button
                            icon={{
                                name: 'star',
                                type: 'ionicon',
                                size: 30,
                                color: '#f7d31e',
                            }}
                            buttonStyle={{
                                backgroundColor: 'transparent',
                            }}
                            onPress={() => {
                                saveItem()
                            }}
                        />
                    </View>
                </View>

                <View style={styles.detailContainer}>
                     {/* STATS */}
                     <CollapsibleList
                        numberOfVisibleItems={0}
                        buttonPosition='top'
                        buttonContent={
                            <View>
                                <Text style={styles.statsTitle}>
                                    Base Stats
                                </Text>
                            </View>
                        }
                    >
                        <View style={styles.detailListBox}>
                            {statList()}
                        </View>
                    </CollapsibleList>
                    {/* TYPES */}
                    <CollapsibleList
                        numberOfVisibleItems={0}
                        buttonPosition='top'
                        buttonContent={
                            <View>
                                <Text style={styles.typesTitle}>
                                    Types
                                </Text>
                            </View>
                        }
                    >
                        <View style={styles.detailListBox}>
                            {typeList()}
                        </View>
                    </CollapsibleList>
                    {/* ABILITIES */}
                    <CollapsibleList
                        numberOfVisibleItems={0}
                        buttonPosition='top'
                        buttonContent={
                            <View>
                                <Text style={styles.abilitiesTitle}>
                                    Abilities
                                </Text>
                            </View>
                        }
                    >
                        <View style={styles.detailListBox}>
                            {abilityList()}
                        </View>
                    </CollapsibleList>
                    {/* MOVES */}
                    <CollapsibleList
                        numberOfVisibleItems={0}
                        buttonPosition='top'
                        buttonContent={
                            <View>
                                <Text style={styles.movesTitle}>
                                    Moves
                                </Text>
                            </View>
                        }
                    >
                        <View style={styles.detailListBox}>
                            {moveList()}
                        </View>
                    </CollapsibleList>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default PokemonDetailScreen;