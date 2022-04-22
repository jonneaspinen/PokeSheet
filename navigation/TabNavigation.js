import { React } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen';
import PokemonListScreen from '../screens/PokemonListScreen';
import FavoriteScreen from '../screens/FavoriteScreen';

const Tab = createBottomTabNavigator();

const TabNav = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'HomeTab') {
                        iconName = 'home';
                        color = focused ? 'dimgrey':'darkgrey';
                    } else if (route.name === 'PokemonListTab') {
                        iconName = 'list';
                        color = focused ? 'dimgrey':'darkgrey';
                    } else if (route.name === 'FavoriteTab') {
                        iconName = 'star';
                        color = focused ? 'dimgrey':'darkgrey';
                    }
                    return <Ionicons name={iconName} size={size} color={color} />;
                }
            })}>
            <Tab.Screen
                name="HomeTab"
                options={{ headerShown: false, tabBarShowLabel: false }}
                component={HomeScreen}
            />
            <Tab.Screen
                name="FavoriteTab"
                options={{ headerShown: false, tabBarShowLabel: false }}
                component={FavoriteScreen}
            />
            <Tab.Screen
                name="PokemonListTab"
                options={{ headerShown: false, tabBarShowLabel: false }}
                component={PokemonListScreen}
            />
        </Tab.Navigator>
    );
}

export { TabNav };