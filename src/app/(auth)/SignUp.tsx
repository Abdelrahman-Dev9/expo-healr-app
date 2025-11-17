import { View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

const SignUp = () => {
  return (
    <SafeAreaView className="mx-4 mt-10">
      <View className="flex items-center">
        <Text className="font-semibold text-[27px]">Create an account</Text>
      </View>
      <View className="mt-10">
        <Text className="text-[18px]">National number</Text>
        <TextInput
          placeholder="Enter your 14-digit national number."
          placeholderTextColor={"#B3B3B3"}
          className="px-2 py-3 mt-3 border-2 rounded-[10px] border-[#2673A6]"
        />
      </View>
      <View className="mt-10">
        <Text className="text-[18px]">Phone number</Text>
        <TextInput
          placeholder="eg. 0122222222"
          placeholderTextColor={"#B3B3B3"}
          className="px-2 py-3 mt-3 border-2 rounded-[10px] border-[#2673A6]"
        />
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
      <View className="mt-10">
        <Text className="text-[18px]">Confirm password</Text>
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
        <Text className="font-semibold text-[18px] text-white">Sign up</Text>
      </TouchableOpacity>
      <View className="flex-row items-center justify-center mt-8">
        <Text className="text-[16px]">Already have an account?</Text>
        <TouchableOpacity>
          <Text className="text-[#2673A6] font-semibold "> Sign in </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;
