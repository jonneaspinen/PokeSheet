import { React, useEffect } from 'react';
import { View, Text, Image, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import styles from '../StyleSheet';
import * as SQLite from 'expo-sqlite';

const HomeScreen = ({ navigation }) => {

    
    useEffect(() => {
        
    }, []);

    const favoritedb = SQLite.openDatabase('favorite.db');

    return (
        <SafeAreaView style={styles.mainContainer}>
            <View style={styles.container}>
                <StatusBar hidden />
                <Image
                    source={require('../assets/flavorElement.png')}
                    style={styles.flavorImage}
                />
                <Image
                    source={require('../assets/PokeSheet.png')}
                    style={styles.homeImage}
                />
                <Text style={styles.homeText}>Welcome to PokeSheet!</Text>

                <View style={styles.homeInfoBox}>
                    <View style={styles.homeInfoIcon}>
                        <Ionicons
                            name='home'
                            size={25}
                            color='dimgrey'
                        />
                    </View>
                    <Text style={styles.homeInfoText}>    this page</Text>
                </View>

                <View style={styles.homeInfoBox}>
                    <View style={styles.homeInfoIcon}>
                        <Ionicons
                            name='star'
                            size={25}
                            color='dimgrey'

                        />
                    </View>
                    <Text style={styles.homeInfoText}>    saved Pokemon</Text>
                </View>

                <View style={styles.homeInfoBox}>
                    <View style={styles.homeInfoIcon}>
                        <Ionicons
                            name='list'
                            size={25}
                            color='dimgrey'
                        />
                    </View>
                    <Text style={styles.homeInfoText}>    all Pokemon</Text>
                </View>
                <Image
                    source={require('../assets/flavorElement.png')}
                    style={styles.flavorImage}
                    ro
                />
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen