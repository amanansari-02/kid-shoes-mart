import React, { useState } from "react";
import "../global.css";
import {
  ImageBackground,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import { useRouter } from "expo-router";

export default function App() {
  const router = useRouter();
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <ImageBackground
        className="flex-1 bg-cover"
        source={require("@/assets/images/home-shoe.jpg")}
      >
        <SafeAreaView className="flex-1">
          <View>
            <Text className="mt-14 px-4 text-5xl font-bold text-center">
              Step into the Future of Fashion
            </Text>
          </View>
          <View className="flex-1 justify-end items-center mb-8 mx-2 ">
            <View className="flex-row  items-center w-full px-4">
              {/* <Link> */}
              <TouchableOpacity
                onPress={() => router.push("home")}
                className="bg-black w-28 h-12 rounded-xl flex flex-row items-center justify-center"
              >
                <MaterialIcon
                  name="arrow-forward-ios"
                  size={10}
                  color="white"
                />
                <MaterialIcon
                  name="arrow-forward-ios"
                  size={20}
                  color="white"
                />
                <MaterialIcon
                  name="arrow-forward-ios"
                  size={25}
                  color="white"
                />
              </TouchableOpacity>
              {/* </Link> */}
              <Text className="text-black text-xl ml-6 font-semibold">
                Let's Get Shopping
              </Text>
            </View>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </>
  );
}
