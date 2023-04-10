import { View, Text, Image, TouchableOpacity, TextInput, Button } from "react-native";
import { ContentRegistration } from "../screens/ContentRegistration";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";


export function LoginForm() {

    const [isLogin, setIsLogin] = useState(true)

    const { navigate } = useNavigation()

    return (
        <View className="bg-white w-screen flex-1 flex items-center justify-around ">

            <View className=" h-2/4 w-3/4 flex ">
                <Text className="text-base text-gray-500">E-mail</Text>
                <TextInput
                    className="mt-2 border-none border-b-2 border-gray-400 w-full p-2"
                    placeholder="exemplo@gmail.com"
                />
                <Text className="text-base mt-7 text-gray-500">Senha</Text>
                <TextInput
                    className="mt-2 border-none border-b-2 border-gray-400 w-full p-2"
                    placeholder="*****"
                    secureTextEntry={true} 
                />
                <View>
                    <Text className="text-orange text-base font-semibold mt-8">Esqueceu a senha?</Text>
                </View>
            </View>
            <TouchableOpacity className="items-center justify-center bg-orange h-16 w-3/4 rounded-3xl"
                onPress={() => navigate('HomePage')}
            >
                <Text className="text-white font-semibold">Acessar</Text>
            </TouchableOpacity>
        </View>
    )
}


