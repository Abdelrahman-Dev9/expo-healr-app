import { Tabs } from "expo-router";
import React from "react";
import { Image } from "react-native";

const _layout = () => {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="Home"
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("assets/icons/home.png")}
              style={{
                tintColor: focused ? "#3A95D2" : "#B3B3B3",
              }}
            />
          ),
          tabBarInactiveTintColor: "#B3B3B3",
          tabBarActiveTintColor: "#3A95D2",
        }}
      />
      <Tabs.Screen
        name="Search"
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("assets/icons/search.png")}
              style={{
                tintColor: focused ? "#3A95D2" : "#B3B3B3",
              }}
            />
          ),
          tabBarInactiveTintColor: "#B3B3B3",
          tabBarActiveTintColor: "#3A95D2",
        }}
      />
      <Tabs.Screen
        name="ChatBot"
        options={{
          // title: null,

          tabBarIcon: () => (
            <Image
              source={require("assets/icons/chat-bot.png")}
              style={{
                padding: 2,
                backgroundColor: "#3A95D2",
                borderRadius: 50,
              }}
            />
          ),
          tabBarInactiveTintColor: "#B3B3B3",
          tabBarActiveTintColor: "#3A95D2",
        }}
      />
      <Tabs.Screen
        name="Notifications"
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("assets/icons/notification-01.png")}
              style={{
                tintColor: focused ? "#3A95D2" : "#B3B3B3",
              }}
            />
          ),
          tabBarInactiveTintColor: "#B3B3B3",
          tabBarActiveTintColor: "#3A95D2",
        }}
      />
      <Tabs.Screen
        name="Profile"
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("assets/icons/profile.png")}
              style={{
                tintColor: focused ? "#3A95D2" : "#B3B3B3",
              }}
            />
          ),
          tabBarInactiveTintColor: "#B3B3B3",
          tabBarActiveTintColor: "#3A95D2",
        }}
      />
      <Tabs.Screen name="profile/UpdateProfile" options={{ href: null }} />
      <Tabs.Screen name="profile/HealthInsurance" options={{ href: null }} />
      <Tabs.Screen
        name="profile/EmptyHealthInsurance"
        options={{ href: null }}
      />
    </Tabs>
  );
};

export default _layout;
