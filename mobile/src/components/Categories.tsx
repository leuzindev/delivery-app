
import { View, Text, ScrollView, Image } from 'react-native'

export function Categories() {

    return (
        <View className='mt-4 w-full h-36 items-center '>
            <View className='flex-row w-10/12 justify-between items-center '>
                <Text className='font-medium text-lg'>Categorias</Text>
                <Text className='text-blue-400'>Ver mais</Text>
            </View>
            
            <ScrollView 
                contentContainerStyle={{ overflow: 'visible' }} 
                horizontal={true} 
                showsHorizontalScrollIndicator={false}
                className='m-auto h-full w-full flex-row'
            >
                <View className=' items-center justify-center flex-col '>
                    <Image source={require('../assets/categories.png')} />
                    <Text className=''>Pizza</Text>
                </View>
                <View className=' items-center justify-center flex-col '>
                    <Image source={require('../assets/categories.png')} />
                    <Text className=''>Pizza</Text>
                </View>
                <View className=' items-center justify-center flex-col '>
                    <Image source={require('../assets/categories.png')} />
                    <Text className=''>Pizza</Text>
                </View>
                <View className=' items-center justify-center flex-col '>
                    <Image source={require('../assets/categories.png')} />
                    <Text className=''>Pizza</Text>
                </View>
                <View className=' items-center justify-center flex-col '>
                    <Image source={require('../assets/categories.png')} />
                    <Text className=''>Pizza</Text>
                </View>
                <View className=' items-center justify-center flex-col '>
                    <Image source={require('../assets/categories.png')} />
                    <Text className=''>Pizza</Text>
                </View>
                <View className=' items-center justify-center flex-col '>
                    <Image source={require('../assets/categories.png')} />
                    <Text className=''>Pizza</Text>
                </View>
                <View className=' items-center justify-center flex-col '>
                    <Image source={require('../assets/categories.png')} />
                    <Text className=''>Pizza</Text>
                </View>
                <View className=' items-center justify-center flex-col '>
                    <Image source={require('../assets/categories.png')} />
                    <Text className=''>Pizza</Text>
                </View>
            </ScrollView>
        </View>
    )
}