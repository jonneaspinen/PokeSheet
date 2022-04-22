import { React, useState, useEffect } from 'react';
import { View, FlatList, SafeAreaView, Text } from 'react-native';
import { Button, ListItem } from 'react-native-elements';
import capitalizeString from '../components/CapitalizeString';
import styles from '../StyleSheet';
import * as SQLite from 'expo-sqlite';

const FavoriteScreen = ({ navigation }) => {

    useEffect(() => {
        updateList();
    }, []);

    const [favoritePokemon, setFavoritePokemon] = useState([]);

    const favoritedb = SQLite.openDatabase('favorite.db');

    const updateList = () => {
        favoritedb.transaction(tx => {
            tx.executeSql('select * from favorite;', [], (_, { rows }) =>
                setFavoritePokemon(rows._array)
            )
        }, null, null);
    }

    const deleteItem = (id) => {
        favoritedb.transaction(
            tx => {
                tx.executeSql(`delete from favorite where id = ?;`, [id]);
            }, null, updateList
        )
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
                <ListItem.Content>
                    <ListItem.Title>
                        {capitalizeString(item.name)}
                    </ListItem.Title>
                </ListItem.Content>

                <ListItem.Content right>
                    <ListItem.Title right>
                        <Button
                            icon={{
                                name: 'trash',
                                type: 'ionicon',
                                size: 20,
                                color: 'firebrick',
                            }}
                            buttonStyle={{
                                backgroundColor: 'transparent',
                            }}
                            onPress={() => deleteItem(item.id)}
                        />
                    </ListItem.Title>
                </ListItem.Content>
            </ListItem>
        )
    }

    return (
        <SafeAreaView style={styles.mainContainer}>
            <View style={styles.horizontalRow}>
                <View style={styles.horizontalLeft}>
                    <Text style={styles.favoriteTitle}>Favorites</Text>
                </View>
                <View style={styles.horizontalRight}>
                    <Button
                    title='Refresh'
                    buttonStyle= {{
                        backgroundColor: 'darkgrey',
                        borderRadius: 20,
                        width: 80
                    }}
                    onPress={updateList}
                    />
                </View>
            </View>

            <FlatList
                data={favoritePokemon}
                renderItem={renderItem}
                keyExtractor={(item, index) => index}
            />
        </SafeAreaView>
    )
}

export default FavoriteScreen;