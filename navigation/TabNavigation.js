import { React } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen';
import PokemonListScreen from '../screens/PokemonListScreen';

const Tab = createBottomTabNavigator();

const TabNav = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'HomeTab') {
                        iconName = 'md-home';
                    } else if (route.name === 'PokemonListTab') {
                        iconName = 'list';
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
                name="PokemonListTab"
                options={{ headerShown: false, tabBarShowLabel: false }}
                component={PokemonListScreen}
            />
        </Tab.Navigator>
    );
}

export { TabNav };