import { View, Text, TouchableOpacity, Image, ScrollView, TextInput } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Carrosel } from "../components/Carrosel";
import { Categories } from "../components/Categories";
import { Feed } from "../components/Feed";


export function Home() {

    return (
        
        <ScrollView className="bg-white">
            <View className="bg-white flex-1 h-full w-screen items-center pt-4">
                <View className=" w-10/12 ">
                    <View className=" flex-row justify-between items-center">
                        <Text className="text-3xl font-semibold" >Olá Fulano !</Text>

                        <TouchableOpacity>
                            <MaterialIcons name="logout" size={24} color="orange" />
                        </TouchableOpacity>

                    </View>
                    <View className="flex-row flex items-center ">
                        <Image className="mr-2" source={require('../assets/location.png')} />
                        <Text className="font-medium text-zinc-500 mr-2">Localição, Rua dos ipes 232</Text>
                        <AntDesign name="down" size={15} color="orange" />
                    </View>

                </View>
                <View className="h-20 w-10/12 flex-row items-center justify-between" >
                    <TextInput
                        className="bg-gray-100 rounded-xl p-2 h-3/5 w-52 "
                        placeholder="Oque voce quer comer hoje?"
                    />
                    <TouchableOpacity className="bg-orange rounded-xl p-2 w-1/3 h-3/5 items-center justify-center">
                        <Text className="text-white font-semibold">Fazer pedido</Text>
                    </TouchableOpacity>
                </View>
                <View className="w-full h-40 ">
                    <Carrosel />
                </View>
                <Categories />
                <Feed />
              
            
            </View>

        </ScrollView>


    )
}