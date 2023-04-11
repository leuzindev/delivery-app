import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { Picker } from '@react-native-picker/picker';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from "@react-navigation/native";

export function Profile() {

    const [selectedLanguage, setSelectedLanguage] = useState();
    const { navigate } = useNavigation()

    return (

        <View className="bg-white w-screen h-screen i">

            <View className=" h-20 justify-center ml-6">
                <Text className="text-lg font-semibold">Fulano</Text>
            </View>
            <View className=" items-center h-full">
                <View className="w-3/4 ">
                    <Text className="text-base text-gray-500">E-mail</Text>
                    <TextInput
                        className="mt-2 border-none border-b-2 border-gray-400 w-full p-2"
                        placeholder="exemplo@gmail.com"
                        value="Leonardo@leonardo.com"
                        
                    />
                </View>
                <View className="w-3/4  mt-3 ">
                    <Text className="text-base text-gray-500">Nome</Text>
                    <TextInput
                        className="mt-2 border-none border-b-2 border-gray-400 w-full p-2"
                        placeholder="leonardo"
                        value="Leonardo"
                    />
                </View>
                <View className="w-3/4  mt-3 ">
                    <Text className="text-base text-gray-500">Endereços</Text>
                    <Picker

                        selectedValue={selectedLanguage}
                        onValueChange={(itemValue, itemIndex) =>
                            setSelectedLanguage(itemValue)
                        }>
                        <Picker.Item label="Rua mega cena1" value="java1" />
                        <Picker.Item label="Rua Almeida1" value="js1" />
                        <Picker.Item label="Rua mega cena2" value="java2" />
                        <Picker.Item label="Rua Almeida2" value="js2" />
                        <Picker.Item label="Rua mega cena3" value="java3" />
                        <Picker.Item label="Rua Almeida" value="js4" />
                    </Picker>
                    <TouchableOpacity className="items-center justify-center bg-black h-14 rounded-lg">
                        <Text
                            className="font-semibold text-white
                            "
                        >
                            Adicionar Endereço
                        </Text>
                    </TouchableOpacity>
                </View>
                <View className="w-3/4 items-center justify-end mt-5">
                    <TouchableOpacity
                        onPress={() => navigate('Cards')}
                        className="items-center justify-center h-14 rounded-md  w-full"
                    >
                        <LinearGradient
                            colors={['#3A49F9', '#9C2CF3']}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                            style={{
                                flex: 1,
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: 10,
                                width: '100%'
                            }}
                        >
                            <Text className="font-bold text-white">MEUS CARTÕES</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </View>
        </View >
    )
}