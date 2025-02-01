import { View, Text, TextInput } from "react-native";
import React from "react";
import { Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome"; // Import the search icon
import personImageUrl from "@/assets/images/unknown-person.png";

export default function Home() {
  return (
    <View className="flex-1 p-4">
      {/* Header */}
      <View className="flex-row justify-between items-center mt-4">
        <Text className="text-2xl font-bold">KID SHOE</Text>
        <View className="h-10 w-10 border border-1 rounded-full overflow-hidden">
          <Image
            className="h-full w-full"
            source={personImageUrl}
            resizeMode="cover"
          />
        </View>
      </View>

      {/* Search Bar */}
      <View className="flex-row items-center bg-gray-200 p-2 rounded-full mt-3">
        <Icon name="search" size={18} color="gray" className="ml-2" />
        <TextInput placeholder="Search shoes..." className="flex-1 ml-2" />
      </View>
    </View>
  );
}
