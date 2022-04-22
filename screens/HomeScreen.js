import { React } from 'react';
import { View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import styles from '../StyleSheet';

const HomeScreen = ({ navigation }) => {

    return ( 
        <View style={styles.container}>
            <StatusBar hidden />
            <Text>This is HOME screen</Text>
        </View>
    )
}

export default HomeScreen