import { View, Text, ScrollView, TextInput, TouchableOpacity, Image } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';


export function Order() {

    return (

        <ScrollView className="bg-white">
            <View className=" h-24 w-10/12 m-auto justify-center">
                <Text className="text-black text-2xl font-semibold">Monte seu pedido</Text>
            </View>
            <TextInput placeholder="Oque quer comer hoje?" className="bg-gray-100 rounded-lg p-2 m-auto h-12 w-10/12" />
            <ScrollView
                horizontal={true}
                className="flex-row w-full h-16 mt-3"
                showsHorizontalScrollIndicator={false}
            >
                <View className="flex-row  items-center gap-3 ml-6">
                    <TouchableOpacity className="items-center justify-center bg-orange w-24 h-12 rounded-md ">
                        <Text className="text-white font-medium text-sm ">FRANGO</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="items-center justify-center bg-orange w-24 h-12 rounded-md">
                        <Text className="text-white font-medium text-sm ">CARNE</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="items-center justify-center bg-orange w-24 h-12 rounded-md ">
                        <Text className="text-white font-medium text-sm ">BEBIDAS</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="items-center justify-center bg-orange w-24 h-12 rounded-md">
                        <Text className="text-white font-medium text-sm ">CARNE</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="items-center justify-center bg-orange w-24 h-12 rounded-md ">
                        <Text className="text-white font-medium text-sm ">BEBIDAS</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="items-center justify-center bg-orange w-24 h-12 rounded-md">
                        <Text className="text-white font-medium text-sm ">FRANGO</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            <View className="w-10/12 m-auto h-16 justify-center">
                <Text className="text-black font-semibold text-base">Pizza Salgadas</Text>
            </View>

            <TouchableOpacity className="mt-2">
                <View className="flex-row bg-slate-100  h-28 rounded-2xl m-auto w-10/12 ">
                    <View className=" w-24">
                        <Image
                            className="object-cover"
                            source={require('../assets/cart.png')}
                        />
                    </View>
                    <View className=" rounded-r-lg">
                        <View className="h-7  justify-center ml-4 flex-col ">
                            <Text className="font-semibold text-xs">Pizza de Frango com Catupiry</Text>
                        </View>
                        <View className="flex-row w-60">
                            <View className="flex-row items-start  w-40 ml-4">
                                <Text className="text-xs text-start ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo veniam eius labore iste p </Text>
                            </View>
                        </View>
                        <View className="w-48 flex-row justify-between m-auto ">
                            <Text className="text-orange font-bold">$ 50,00</Text>
                            <Entypo name="add-to-list" size={20} color='green' />
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity className="mt-2">
                <View className="flex-row bg-slate-100  h-28 rounded-2xl m-auto w-10/12 ">
                    <View className=" w-24">
                        <Image
                            className="object-cover"
                            source={require('../assets/cart.png')}
                        />
                    </View>
                    <View className=" rounded-r-lg">
                        <View className="h-7  justify-center ml-4 flex-col ">
                            <Text className="font-semibold text-xs">Pizza de Frango com Catupiry</Text>
                        </View>
                        <View className="flex-row w-60">
                            <View className="flex-row items-start  w-40 ml-4">
                                <Text className="text-xs text-start ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo veniam eius labore iste p </Text>
                            </View>
                        </View>
                        <View className="w-48 flex-row justify-between m-auto ">
                            <Text className="text-orange font-bold">$ 50,00</Text>
                            <Entypo name="add-to-list" size={20} color='green' />
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity className="mt-2">
                <View className="flex-row bg-slate-100  h-28 rounded-2xl m-auto w-10/12 ">
                    <View className=" w-24">
                        <Image
                            className="object-cover"
                            source={require('../assets/cart.png')}
                        />
                    </View>
                    <View className=" rounded-r-lg">
                        <View className="h-7  justify-center ml-4 flex-col ">
                            <Text className="font-semibold text-xs">Pizza de Frango com Catupiry</Text>
                        </View>
                        <View className="flex-row w-60">
                            <View className="flex-row items-start  w-40 ml-4">
                                <Text className="text-xs text-start ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo veniam eius labore iste p </Text>
                            </View>
                        </View>
                        <View className="w-48 flex-row justify-between m-auto ">
                            <Text className="text-orange font-bold">$ 50,00</Text>
                            <Entypo name="add-to-list" size={20} color='green' />
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity className="mt-2">
                <View className="flex-row bg-slate-100  h-28 rounded-2xl m-auto w-10/12 ">
                    <View className=" w-24">
                        <Image
                            className="object-cover"
                            source={require('../assets/cart.png')}
                        />
                    </View>
                    <View className=" rounded-r-lg">
                        <View className="h-7  justify-center ml-4 flex-col ">
                            <Text className="font-semibold text-xs">Pizza de Frango com Catupiry</Text>
                        </View>
                        <View className="flex-row w-60">
                            <View className="flex-row items-start  w-40 ml-4">
                                <Text className="text-xs text-start ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo veniam eius labore iste p </Text>
                            </View>
                        </View>
                        <View className="w-48 flex-row justify-between m-auto ">
                            <Text className="text-orange font-bold">$ 50,00</Text>
                            <Entypo name="add-to-list" size={20} color='green' />
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity className="mt-2">
                <View className="flex-row bg-slate-100  h-28 rounded-2xl m-auto w-10/12 ">
                    <View className=" w-24">
                        <Image
                            className="object-cover"
                            source={require('../assets/cart.png')}
                        />
                    </View>
                    <View className=" rounded-r-lg">
                        <View className="h-7  justify-center ml-4 flex-col ">
                            <Text className="font-semibold text-xs">Pizza de Frango com Catupiry</Text>
                        </View>
                        <View className="flex-row w-60">
                            <View className="flex-row items-start  w-40 ml-4">
                                <Text className="text-xs text-start ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo veniam eius labore iste p </Text>
                            </View>
                        </View>
                        <View className="w-48 flex-row justify-between m-auto ">
                            <Text className="text-orange font-bold">$ 50,00</Text>
                            <Entypo name="add-to-list" size={20} color='green' />
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity className="mt-2">
                <View className="flex-row bg-slate-100  h-28 rounded-2xl m-auto w-10/12 ">
                    <View className=" w-24">
                        <Image
                            className="object-cover"
                            source={require('../assets/cart.png')}
                        />
                    </View>
                    <View className=" rounded-r-lg">
                        <View className="h-7  justify-center ml-4 flex-col ">
                            <Text className="font-semibold text-xs">Pizza de Frango com Catupiry</Text>
                        </View>
                        <View className="flex-row w-60">
                            <View className="flex-row items-start  w-40 ml-4">
                                <Text className="text-xs text-start ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo veniam eius labore iste p </Text>
                            </View>
                        </View>
                        <View className="w-48 flex-row justify-between m-auto ">
                            <Text className="text-orange font-bold">$ 50,00</Text>
                            <Entypo name="add-to-list" size={20} color='green' />
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
            <View className="w-10/12 m-auto h-16 justify-center">
                <Text className="text-black font-semibold text-base">Pizza Doces</Text>
            </View>
            <TouchableOpacity className="mt-2">
                <View className="flex-row bg-slate-100  h-28 rounded-2xl m-auto w-10/12 ">
                    <View className=" w-24">
                        <Image
                            className="object-cover"
                            source={require('../assets/cart.png')}
                        />
                    </View>
                    <View className=" rounded-r-lg">
                        <View className="h-7  justify-center ml-4 flex-col ">
                            <Text className="font-semibold text-xs">Pizza de Frango com Catupiry</Text>
                        </View>
                        <View className="flex-row w-60">
                            <View className="flex-row items-start  w-40 ml-4">
                                <Text className="text-xs text-start ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo veniam eius labore iste p </Text>
                            </View>
                        </View>
                        <View className="w-48 flex-row justify-between m-auto ">
                            <Text className="text-orange font-bold">$ 50,00</Text>
                            <Entypo name="add-to-list" size={20} color='green' />
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity className="mt-2">
                <View className="flex-row bg-slate-100  h-28 rounded-2xl m-auto w-10/12 ">
                    <View className=" w-24">
                        <Image
                            className="object-cover"
                            source={require('../assets/cart.png')}
                        />
                    </View>
                    <View className=" rounded-r-lg">
                        <View className="h-7  justify-center ml-4 flex-col ">
                            <Text className="font-semibold text-xs">Pizza de Frango com Catupiry</Text>
                        </View>
                        <View className="flex-row w-60">
                            <View className="flex-row items-start  w-40 ml-4">
                                <Text className="text-xs text-start ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo veniam eius labore iste p </Text>
                            </View>
                        </View>
                        <View className="w-48 flex-row justify-between m-auto ">
                            <Text className="text-orange font-bold">$ 50,00</Text>
                            <Entypo name="add-to-list" size={20} color='green' />
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity className="mt-2">
                <View className="flex-row bg-slate-100  h-28 rounded-2xl m-auto w-10/12 ">
                    <View className=" w-24">
                        <Image
                            className="object-cover"
                            source={require('../assets/cart.png')}
                        />
                    </View>
                    <View className=" rounded-r-lg">
                        <View className="h-7  justify-center ml-4 flex-col ">
                            <Text className="font-semibold text-xs">Pizza de Frango com Catupiry</Text>
                        </View>
                        <View className="flex-row w-60">
                            <View className="flex-row items-start  w-40 ml-4">
                                <Text className="text-xs text-start ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo veniam eius labore iste p </Text>
                            </View>
                        </View>
                        <View className="w-48 flex-row justify-between m-auto ">
                            <Text className="text-orange font-bold">$ 50,00</Text>
                            <Entypo name="add-to-list" size={20} color='green' />
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity className="mt-2">
                <View className="flex-row bg-slate-100  h-28 rounded-2xl m-auto w-10/12 ">
                    <View className=" w-24">
                        <Image
                            className="object-cover"
                            source={require('../assets/cart.png')}
                        />
                    </View>
                    <View className=" rounded-r-lg">
                        <View className="h-7  justify-center ml-4 flex-col ">
                            <Text className="font-semibold text-xs">Pizza de Frango com Catupiry</Text>
                        </View>
                        <View className="flex-row w-60">
                            <View className="flex-row items-start  w-40 ml-4">
                                <Text className="text-xs text-start ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo veniam eius labore iste p </Text>
                            </View>
                        </View>
                        <View className="w-48 flex-row justify-between m-auto ">
                            <Text className="text-orange font-bold">$ 50,00</Text>
                            <Entypo name="add-to-list" size={20} color='green' />
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
            

        </ScrollView >
    )
}