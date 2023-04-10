import { View } from "react-native";
import { Entypo } from '@expo/vector-icons';
import colors from 'tailwindcss/colors'

export function NewOrderButton({ color, size, focused }) {

    if (focused) {
        return (
            <View className="bg-orange w-14 h-14 rounded-full items-center justify-center shadow-md shadow-orange transition duration-100 ease-in-out">
                <Entypo name="plus" size={size} color={colors.white} />
            </View>
        )
    } else {
        return (
            <View className="bg-orange w-14 h-14 rounded-full items-center justify-center">
                <Entypo name="plus" size={size} color={colors.white} />
            </View>
        )
    }


}