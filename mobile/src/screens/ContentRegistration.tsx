import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { LoginForm } from "../components/LoginForm";
import { RegistrationForm } from "../components/RegistrationForm"




export function ContentRegistration() {

    const [isLogin, setIsLogin] = useState(true)

    const { navigate } = useNavigation()

    return (
        <>
            <View className="bg-white h-2/5 justify-end items-center rounded-b-2xl shadow-md shadow-grey z-10">
                <Image source={require('../assets/logo.png')} />
                <View className="flex-row w-9/12 h-10 items-center justify-around mt-10">
                    <TouchableOpacity
                        onPress={() => {
                            setIsLogin(true)
                        }}
                    >
                        <Text className="text-base font-medium">Logar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            setIsLogin(false)
                        }}
                    >
                        <Text className="text-base font-medium">Registrar</Text>
                    </TouchableOpacity>
                </View>
                {isLogin === true ? (

                    <View className=" w-9/12 h-1 rounded-full items-start transition-  duration-1000 ease-in-out">
                        <View className=" bg-orange w-3/6 h-1 rounded-full" />
                    </View>

                ) : (
                    <View className=" w-9/12 h-1 rounded-full items-end transition duration-1000 ease-in-out">
                        <View className=" bg-orange w-3/6 h-1 rounded-full" />
                    </View>
                )}
            </View>
            {isLogin === true ? (
                <LoginForm />
            ) : (
                <RegistrationForm />
            )

            }
        </>
    )
}