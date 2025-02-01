import React from "react";
import { Tabs } from "expo-router";
import Icon from "react-native-vector-icons/FontAwesome";
import { Colors } from "@/constants/Colors";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarInactiveTintColor: "gray",
        tabBarActiveTintColor: Colors.primary.text,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <Icon name="home" size={20} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="Cart"
        options={{
          tabBarLabel: "Cart",
          tabBarIcon: ({ color }) => (
            <Icon name="cart" size={20} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
