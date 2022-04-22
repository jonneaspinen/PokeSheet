import { React } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TabNav } from './TabNavigation';
import PokemonListScreen from '../screens/PokemonListScreen';
import PokemonDetailScreen from '../screens/PokemonDetailScreen';
import FavoriteScreen from '../screens/FavoriteScreen';

const Stack = createNativeStackNavigator();

const StackNav = () => {

    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                options={{ headerShown: false }}
                component={TabNav}
            />
            <Stack.Screen
                name='favorite list'
                component={FavoriteScreen}
            />
            <Stack.Screen
                name='Pokemon list'
                component={PokemonListScreen}
            />
            <Stack.Screen
            name='Pokemon details'
            component={PokemonDetailScreen}
            />
        </Stack.Navigator>
    )
}

export { StackNav };