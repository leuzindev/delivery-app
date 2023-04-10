import { View, Text, TextInput, TouchableOpacity, ScrollView } from "react-native";
import { ContentRegistration } from "../screens/ContentRegistration";
import { useNavigation } from "@react-navigation/native";



export function RegistrationForm() {

    const { navigate } = useNavigation()

    return (

        <View className="bg-white w-screen h-screen flex-1 flex items-center justify-center">

            <View className=" h-4/5 w-3/4 flex ">
                <Text className="mt-2  text-xs text-gray-500">Nome</Text>
                <TextInput
                    className="border-none border-b-2 border-gray-400 w-full h-10 p-2"
                    placeholder="Marcos souza da silva"
                />
                <Text className="mt-2  text-xs text-gray-500">E-mail</Text>
                <TextInput
                    className="border-none border-b-2 border-gray-400 w-full p-2"
                    placeholder="exemplo@gmail.com"
                />
                <Text className="mt-2  text-xs text-gray-500">Senha</Text>
                <TextInput
                    className="border-none border-b-2 border-gray-400 w-full p-2"
                    placeholder="*****"
                    secureTextEntry={true}
                />
                <Text className="mt-2  text-xs text-gray-500">Confirmar senha</Text>
                <TextInput
                    className="border-none border-b-2 border-gray-400 w-full p-2"
                    placeholder="*****"
                    secureTextEntry={true}
                />
                <Text className="mt-2  text-xs text-gray-500">Número</Text>
                <TextInput
                    className="border-none border-b-2 border-gray-400 w-full p-2"
                    placeholder="+55 11 99290-3049"

                />
            </View>
            <TouchableOpacity className="items-center justify-center bg-orange h-16 w-3/4 rounded-3xl"
                onPress={() => navigate('HomePage')}
            >
                <Text className="text-white font-semibold">Registrar e acessar</Text>
            </TouchableOpacity>
        </View>

    )
}