import { View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

const Login = () => {
  return (
    <SafeAreaView className="mx-4 mt-10">
      <View className="flex items-center">
        <Text className="font-semibold text-[27px]">Sign in</Text>
      </View>
      <View className="mt-10">
        <Text className="text-[18px]">Email address</Text>
        <TextInput
          placeholder="Enter your email"
          placeholderTextColor={"#B3B3B3"}
          className="px-2 py-3 mt-3 border-2 rounded-[10px] border-[#2673A6]"
        />
      </View>
      <View className="mt-10">
        <Text className="text-[18px]">Password</Text>
        <View className="flex-row justify-between">
          <TextInput
            placeholder="•••••••••••••••"
            placeholderTextColor={"#B3B3B3"}
            className="px-2 py-3 mt-3 border-2 rounded-[10px] border-[#2673A6] w-full"
          />
          <Image
            source={require("assets/icons/eye.png")}
            className="absolute right-5 bottom-3"
          />
        </View>
      </View>
      <TouchableOpacity
        className="bg-[#3A95D2] rounded-full p-4 items-center mt-10"
        onPress={() => router.push("/(auth)/Login")}
      >
        <Text className="font-bold text-[18px] text-white">Sign in</Text>
      </TouchableOpacity>
      <View className="flex-row items-center justify-center gap-2 m-8">
        <Text className="w-[15%] h-[1px] bg-[#000000]" />
        <Text className="text-[15px] font-semibold text-[#1A1A1A]">Or</Text>
        <Text className="w-[15%] h-[1px] bg-[#000000]" />
      </View>
      <View className="flex-row justify-between">
        <Image
          source={require("assets/icons/id.png")}
          className="absolute left-[60px] top-4"
        />
        <TouchableOpacity
          className="items-center p-4  border-2 rounded-[15px] border-[#3A95D2] w-full"
          // onPress={() => router.push("/(auth)/Login")}
        >
          <Text className="font-bold text-[18px] text-[#3A95D2] ">
            Sign in with National ID
          </Text>
        </TouchableOpacity>
      </View>

      <View className="flex-row justify-center gap-2 mt-6">
        <Text className="text-[16px] text-[#666666]">New Here?</Text>
        <Text className="text-[16px] text-[#2673A6] font-semibold">
          Create an Account
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Login;
