
import { Text, View, Image } from 'react-native'
import Swiper from 'react-native-swiper';


export function Carrosel() {
    return (
        <Swiper
            dotColor="rgba(128,128,128,0.4)"
            activeDotColor="rgba(255,66,0,1)"
            paginationStyle={{ bottom: 0 }}
            showsButtons={false}
            dotStyle={{
                width: 10,
                height: 10,
                borderRadius: 5,
                transform: [{ scale: 0.8 }]
            }}
            activeDotStyle={{
                width: 20,
                transform: [{ scale: 1.2 }]
            }}
        >
            <View className=' flex-1 items-center justify-start' >
                <Image source={require('../assets/carrosel1.png')} />
            </View>
            <View className=' flex-1 items-center justify-start'>
                <Image source={require('../assets/carrosel1.png')} />
            </View>
            <View className=' flex-1 items-center justify-start'>
                <Image source={require('../assets/carrosel1.png')} />
            </View>
        </Swiper>
    )
}