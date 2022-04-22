import { React, useState, useEffect } from 'react';
import { SafeAreaView, View, ScrollView, Text, Image, ActivityIndicator } from 'react-native';
import { Button } from 'react-native-elements';
import styles from '../StyleSheet';

const PokemonDetailScreen = ({ route, navigation }) => {

    useEffect(() => {
        fetchDetails();
    }, []);

    const [pokemonDetails, setPokemonDetails] = useState({});
    const [abilities, setAbilities] = useState([]);
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
            setFetchLoading(false);
        }
        catch (error) {
            console.error('Trouble finding pokemon...');
        }
    }

    // everything from API comes in lowercase
    // this function changes first letter of the string to uppercase
    const capitalizeString = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const abilityList = () => {
        return abilities.map((abilities) => {
            return (
                <View key={abilities.ability.name}>
                    <Text>{abilities.ability.name}</Text>
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
                <View>
                    {/* IMAGE */}
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

                    { /* NAME */}
                    <Text style={styles.pokemonTitle}>
                        {capitalizeString(pokemonDetails.forms[0].name)}
                    </Text>
                </View>
                {/* ABILITIES */}
                <View style={styles.detailContainer}>
                    <Text style={styles.detailTitle}> Abilities </Text>
                    <View>{abilityList()}</View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default PokemonDetailScreen;