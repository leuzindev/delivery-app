import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";

import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export function Cards() {
    return (
        <ScrollView className="bg-white">
            <View className="h-24 justify-center ml-7">
                <Text className="text-xl font-semibold">Seus Cartões</Text>
            </View>
            <View className="mb-4 ">
                <TouchableOpacity
                    className="border-2 border-purple-500 items-center justify-center rounded-md w-72 h-14 m-auto flex-row"
                >
                    <Text className="text-purple-500 mr-2">Adicionar um novo Cartão</Text>
                    <AntDesign name="plus" size={15} color="purple"/>
                </TouchableOpacity>
            </View>
            <View className="w-3/4 h-11 m-auto justify-between items-center flex-row">
                <Text className="font-semibold text-base ">Credito Leo</Text>
                <TouchableOpacity>
                    <Feather name="trash-2" size={24} color="red" />
                </TouchableOpacity>
            </View>
            <View className="w-3/4 m-auto   h-44">
                <Image className="m-auto" source={require('../assets/cartao.png')} />
            </View>

            <View className="w-3/4 h-11 m-auto justify-between items-center flex-row">
                <Text className="font-semibold text-base ">Debito Leo</Text>
                <TouchableOpacity>
                    <Feather name="trash-2" size={24} color="red" />
                </TouchableOpacity>
            </View>
            <View className="w-3/4 m-auto   h-44">
                <Image className="m-auto" source={require('../assets/cartao.png')} />
            </View>
           
        </ScrollView>
    )
}