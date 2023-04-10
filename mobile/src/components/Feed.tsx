import { Text, View, Image } from "react-native"



export function Feed() {

    return (
        <>
            <View className=" w-full mt-4 items-center">
                <View className='flex-row w-10/12 justify-between items-center '>
                    <Text className='font-medium text-lg'>Pizzas</Text>
                    <Text className='text-blue-400'>Ver mais</Text>
                </View>
                <View className="w-10/12 h-56 bg-white mt-3 rounded-lg shadow-gray-600 shadow-lg">
                    <View>
                        <Image
                            className="object-cover w-full"
                            source={require('../assets/feed.png')}
                        />
                    </View>
                    <View className="">
                        <View className=" h-10 justify-center">
                            <Text className="ml-4">Pizza de Frango</Text>
                        </View>
                        <View className="flex-row items-center justify-between  ml-4 w-40 ">
                            <View className="flex-row items-center">
                                <Image
                                    source={require('../assets/star.png')}
                                />
                                <Text className="ml-2 text-zinc-400">4.5</Text>
                            </View>
                            <View className="flex-row items-center">
                                <Image

                                    source={require('../assets/clock.png')}
                                />
                                <Text className="ml-2 text-zinc-400">25-30 mins</Text>
                            </View>
                        </View>
                    </View>

                </View>
            </View>
            <View className="w-10/12 h-56 bg-white mt-3 rounded-lg shadow-gray-600 shadow-lg">
                    <View>
                        <Image
                            className="object-cover w-full"
                            source={require('../assets/feed.png')}
                        />
                    </View>
                    <View className="">
                        <View className=" h-10 justify-center">
                            <Text className="ml-4">Pizza de Frango</Text>
                        </View>
                        <View className="flex-row items-center justify-between  ml-4 w-40 ">
                            <View className="flex-row items-center">
                                <Image
                                    source={require('../assets/star.png')}
                                />
                                <Text className="ml-2 text-zinc-400">4.5</Text>
                            </View>
                            <View className="flex-row items-center">
                                <Image

                                    source={require('../assets/clock.png')}
                                />
                                <Text className="ml-2 text-zinc-400">25-30 mins</Text>
                            </View>
                        </View>
                    </View>

                </View>
            
                <View className="w-10/12 h-56 bg-white mt-3 rounded-lg shadow-gray-600 shadow-lg">
                    <View>
                        <Image
                            className="object-cover w-full"
                            source={require('../assets/feed.png')}
                        />
                    </View>
                    <View className="">
                        <View className=" h-10 justify-center">
                            <Text className="ml-4">Pizza de Frango</Text>
                        </View>
                        <View className="flex-row items-center justify-between  ml-4 w-40 ">
                            <View className="flex-row items-center">
                                <Image
                                    source={require('../assets/star.png')}
                                />
                                <Text className="ml-2 text-zinc-400">4.5</Text>
                            </View>
                            <View className="flex-row items-center">
                                <Image

                                    source={require('../assets/clock.png')}
                                />
                                <Text className="ml-2 text-zinc-400">25-30 mins</Text>
                            </View>
                        </View>
                    </View>

                </View>

        </>

    )
}