import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";

import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

export function Cart() {

    return (
        <View className="bg-white h-full w-full">

            <ScrollView 
                showsVerticalScrollIndicator={false} 
                className="bg-white h-full w-10/12 m-auto "
            >
                <View className="h-14 justify-end">
                    <Text className="text-black text-2xl font-semibold">Carrinho</Text>
                </View>



                <View className=" h-full mt-4 flex-col">
                    <View className="flex-row bg-slate-100  h-28 rounded-2xl mt-2 ">
                        <View className=" w-24">
                            <Image
                                className="object-cover"
                                source={require('../assets/cart.png')}
                            />
                        </View>
                        <View className=" rounded-r-lg">
                            <View className="h-16  justify-center ml-4 flex-col">
                                <Text className="font-semibold text-sm">Pizza de Frango com Catupiry</Text>
                            </View>
                            <View className="flex-row">
                                <View className="flex-row items-center  w-28 justify-evenly">
                                    <TouchableOpacity>
                                        <Ionicons name="md-remove-circle" size={24} color="black" />
                                    </TouchableOpacity>
                                    <Text className="text-xl font-semibold">1</Text>
                                    <TouchableOpacity>
                                        <Ionicons name="md-add-circle" size={24} color="black" />
                                    </TouchableOpacity>
                                </View>
                                <View className=" w-24 items-end justify-center">
                                    <TouchableOpacity>
                                        <Ionicons name="remove-circle-outline" size={24} color="red" />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>

                    </View>
                    <View className="flex-row bg-slate-100  h-28 rounded-2xl mt-2">
                        <View className=" w-24">
                            <Image
                                className="object-cover"
                                source={require('../assets/cart.png')}
                            />
                        </View>
                        <View className=" rounded-r-lg">
                            <View className="h-16  justify-center ml-4 flex-col">
                                <Text className="font-semibold text-sm">Pizza de Frango com Catupiry</Text>
                            </View>
                            <View className="flex-row">
                                <View className="flex-row items-center  w-28 justify-evenly">
                                    <TouchableOpacity>
                                        <Ionicons name="md-remove-circle" size={24} color="black" />
                                    </TouchableOpacity>
                                    <Text className="text-xl font-semibold">1</Text>
                                    <TouchableOpacity>
                                        <Ionicons name="md-add-circle" size={24} color="black" />
                                    </TouchableOpacity>
                                </View>
                                <View className=" w-24 items-end justify-center">
                                    <TouchableOpacity>
                                        <Ionicons name="remove-circle-outline" size={24} color="red" />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>

                    </View>
                    <View className="flex-row bg-slate-100  h-28 rounded-2xl mt-2">
                        <View className=" w-24">
                            <Image
                                className="object-cover"
                                source={require('../assets/cart.png')}
                            />
                        </View>
                        <View className=" rounded-r-lg">
                            <View className="h-16  justify-center ml-4 flex-col">
                                <Text className="font-semibold text-sm">Pizza de Frango com Catupiry</Text>
                            </View>
                            <View className="flex-row">
                                <View className="flex-row items-center  w-28 justify-evenly">
                                    <TouchableOpacity>
                                        <Ionicons name="md-remove-circle" size={24} color="black" />
                                    </TouchableOpacity>
                                    <Text className="text-xl font-semibold">1</Text>
                                    <TouchableOpacity>
                                        <Ionicons name="md-add-circle" size={24} color="black" />
                                    </TouchableOpacity>
                                </View>
                                <View className=" w-24 items-end justify-center">
                                    <TouchableOpacity>
                                        <Ionicons name="remove-circle-outline" size={24} color="red" />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>

                    </View>
                    <View className="flex-row bg-slate-100  h-28 rounded-2xl mt-2">
                        <View className=" w-24">
                            <Image
                                className="object-cover"
                                source={require('../assets/cart.png')}
                            />
                        </View>
                        <View className=" rounded-r-lg">
                            <View className="h-16  justify-center ml-4 flex-col">
                                <Text className="font-semibold text-sm">Pizza de Frango com Catupiry</Text>
                            </View>
                            <View className="flex-row">
                                <View className="flex-row items-center  w-28 justify-evenly">
                                    <TouchableOpacity>
                                        <Ionicons name="md-remove-circle" size={24} color="black" />
                                    </TouchableOpacity>
                                    <Text className="text-xl font-semibold">1</Text>
                                    <TouchableOpacity>
                                        <Ionicons name="md-add-circle" size={24} color="black" />
                                    </TouchableOpacity>
                                </View>
                                <View className=" w-24 items-end justify-center">
                                    <TouchableOpacity>
                                        <Ionicons name="remove-circle-outline" size={24} color="red" />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>

                    </View>
                    <View className="flex-row bg-slate-100  h-28 rounded-2xl mt-2">
                        <View className=" w-24">
                            <Image
                                className="object-cover"
                                source={require('../assets/cart.png')}
                            />
                        </View>
                        <View className=" rounded-r-lg">
                            <View className="h-16  justify-center ml-4 flex-col">
                                <Text className="font-semibold text-sm">Pizza de Frango com Catupiry</Text>
                            </View>
                            <View className="flex-row">
                                <View className="flex-row items-center  w-28 justify-evenly">
                                    <TouchableOpacity>
                                        <Ionicons name="md-remove-circle" size={24} color="black" />
                                    </TouchableOpacity>
                                    <Text className="text-xl font-semibold">1</Text>
                                    <TouchableOpacity>
                                        <Ionicons name="md-add-circle" size={24} color="black" />
                                    </TouchableOpacity>
                                </View>
                                <View className=" w-24 items-end justify-center">
                                    <TouchableOpacity>
                                        <Ionicons name="remove-circle-outline" size={24} color="red" />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>

                    </View>
                    <View className="flex-row bg-slate-100  h-28 rounded-2xl mt-2">
                        <View className=" w-24">
                            <Image
                                className="object-cover"
                                source={require('../assets/cart.png')}
                            />
                        </View>
                        <View className=" rounded-r-lg">
                            <View className="h-16  justify-center ml-4 flex-col">
                                <Text className="font-semibold text-sm">Pizza de Frango com Catupiry</Text>
                            </View>
                            <View className="flex-row">
                                <View className="flex-row items-center  w-28 justify-evenly">
                                    <TouchableOpacity>
                                        <Ionicons name="md-remove-circle" size={24} color="black" />
                                    </TouchableOpacity>
                                    <Text className="text-xl font-semibold">1</Text>
                                    <TouchableOpacity>
                                        <Ionicons name="md-add-circle" size={24} color="black" />
                                    </TouchableOpacity>
                                </View>
                                <View className=" w-24 items-end justify-center">
                                    <TouchableOpacity>
                                        <Ionicons name="remove-circle-outline" size={24} color="red" />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>

                    </View>
                    
                    <View>
                        <TouchableOpacity className="bg-yellow-400 h-20 items-center justify-center rounded-xl flex-row  mt-4">
                            <Text className="text-white text-base font-semibold">
                                FINALIZAR COMPRA
                            </Text>
                            <MaterialIcons name="attach-money" size={24} color="white" />
                        </TouchableOpacity>
                    </View>

                </View>

            </ScrollView>
        </View>
    )
}