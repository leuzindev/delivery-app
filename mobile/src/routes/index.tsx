import colors from 'tailwindcss/colors';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Cart } from '../screens/Cart';
import { Home } from '../screens/Home';
import { Profile } from '../screens/Profile';
import { SafeScreen } from '../components/SafeScreen';
import { Ionicons } from "@expo/vector-icons";
import { Like } from '../screens/Like';
import { Order } from '../screens/Order';
import { NewOrderButton } from '../components/NewOrderButton';
import { ContentRegistration } from '../screens/ContentRegistration';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export function Routes() {

    return (

        <SafeScreen>

            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName='Registration'
                    screenOptions={{ headerShown: false }}
                >
                    <Stack.Screen name="Registration" component={ContentRegistration} />
                    <Stack.Screen name="HomePage">
                        {() => (
                            <Tab.Navigator
                                screenOptions={{
                                    headerShown: false,
                                    tabBarActiveTintColor: colors.orange[600],
                                    tabBarShowLabel: false,
                                    tabBarStyle: {
                                        borderTopWidth: 0,
                                        backgroundColor: "white",
                                        height: 100,
                                    },
                                }}

                            >
                                <Tab.Screen
                                    name="Home"
                                    component={Home}
                                    options={{
                                        headerShown: false,
                                        tabBarIcon: ({ color, size, focused }) => {
                                            if (focused) {
                                                return <Ionicons name="home" size={size} color={color} />;
                                            }
                                            return <Ionicons name="home-outline" size={size} color={color} />;
                                        },
                                    }}

                                />
                                <Tab.Screen
                                    name="Favoritos"
                                    component={Like}
                                    options={{
                                        headerShown: false,
                                        tabBarIcon: ({ color, size, focused }) => {
                                            if (focused) {
                                                return <Ionicons name="heart" size={size} color={color} />;
                                            }
                                            return <Ionicons name="heart-outline" size={size} color={color} />;
                                        },
                                    }}

                                />
                                <Tab.Screen
                                    name="Pedido"
                                    component={Order}
                                    options={{
                                        tabBarLabel: '',
                                        headerShown: false,
                                        tabBarIcon: ({ color, size, focused }) => (
                                            <NewOrderButton size={size} color={color} focused={focused}/>
                                        )
                                        ,
                                    }}

                                />
                                <Tab.Screen
                                    name="Carrinho"
                                    component={Cart}
                                    options={{
                                        headerShown: false,
                                        tabBarIcon: ({ color, size, focused }) => {
                                            if (focused) {
                                                return <Ionicons name="cart" size={size} color={color} />;
                                            }
                                            return <Ionicons name="cart-outline" size={size} color={color} />;
                                        },
                                    }}
                                />
                                <Tab.Screen
                                    name="Perfil"
                                    component={Profile}
                                    options={{
                                        headerShown: false,
                                        tabBarIcon: ({ color, size, focused }) => {
                                            if (focused) {
                                                return <Ionicons name="person" size={size} color={color} />;
                                            }
                                            return <Ionicons name="person-outline" size={size} color={color} />;
                                        },
                                    }}

                                />
                            </Tab.Navigator>
                        )}
                    </Stack.Screen>
                </Stack.Navigator>
            </NavigationContainer>
        </SafeScreen>
    )
}