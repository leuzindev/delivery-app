
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Login } from '../screens/Login';
import { Register } from '../screens/Register';
import { Cart } from '../screens/Cart';
import { Home } from '../screens/Home';
import { Profile } from '../screens/Profile';
import { SafeScreen } from '../components/SafeScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export function Routes() {

    return (

        <SafeScreen>

            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName='HomePage'
                    screenOptions={{ headerShown: false }}
                >
                    <Stack.Screen name="Login" component={Login} />
                    <Stack.Screen name="Register" component={Register} />
                    <Stack.Screen name="HomePage">
                        {() => (
                            <Tab.Navigator

                            >
                                <Tab.Screen
                                    name="Home"
                                    component={Home}
                                    options={{ headerShown: false }}
                                />
                                <Tab.Screen
                                    name="Cart"
                                    component={Cart}
                                    options={{ headerShown: false }}
                                />
                                <Tab.Screen
                                    name="Profile"
                                    component={Profile}
                                    options={{ headerShown: false }}
                                />
                            </Tab.Navigator>
                        )}
                    </Stack.Screen>
                </Stack.Navigator>
            </NavigationContainer>
        </SafeScreen>
    )
}