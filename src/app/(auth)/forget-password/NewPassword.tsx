import { View, Text, TouchableOpacity, Image, TextInput } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

const NewPassword = () => {
  return (
    <SafeAreaView className="mx-4 mt-4">
      <TouchableOpacity onPress={() => router.back()}>
        <Image
          source={require("assets/icons/left-arrow.png")}
          className="w-6 h-6 p-1 ml-4 bg-[#F2F2F2] rounded-full"
          tintColor="#1C567D"
          resizeMode="contain"
        />
      </TouchableOpacity>
      <View className="mt-10">
        <Text className="text-[28px] w-full  text-center font-bold">
          Create new password
        </Text>
      </View>
      <View className="mt-10">
        <Text className="text-[18px] text-[#666666] font-semibold">
          Password
        </Text>
        <View className="flex-row justify-between">
          <TextInput
            placeholder="•••••••••••••••"
            placeholderTextColor={"#B3B3B3"}
            className="px-2 py-3 mt-3 border-2 rounded-[10px] border-[#079903] w-full"
          />
          <Image
            source={require("assets/icons/eye.png")}
            className="absolute right-5 bottom-3"
          />
        </View>
      </View>
      <View className="gap-4 ml-6 mt-7">
        <View className="flex-row gap-4">
          <Image
            source={require("assets/icons/right-icon.png")}
            className="w-[18px] h-[18px]"
            resizeMode="contain"
            tintColor="#666666"
          />
          <Text className="text-[12px] text-[#666666]">
            Password should be at least 8 characters long
          </Text>
        </View>
        <View className="flex-row gap-4">
          <Image
            source={require("assets/icons/right-icon.png")}
            className="w-[18px] h-[18px]"
            resizeMode="contain"
            tintColor="#666666"
          />
          <Text className="text-[12px] text-[#666666]">
            Include one uppercase letter
          </Text>
        </View>
        <View className="flex-row gap-4">
          <Image
            source={require("assets/icons/right-icon.png")}
            className="w-[18px] h-[18px]"
            resizeMode="contain"
            tintColor="#666666"
          />
          <Text className="text-[12px] text-[#666666]">
            Add a number and a special character ‘’**
          </Text>
        </View>
      </View>
      <View className="mt-10">
        <Text className="text-[18px] text-[#666666] font-semibold">
          Confirm password
        </Text>
        <View className="flex-row justify-between">
          <TextInput
            placeholder="•••••••••••••••"
            placeholderTextColor={"#B3B3B3"}
            className="px-2 py-3 mt-3 border-2 rounded-[10px] border-[#079903] w-full"
          />
          <Image
            source={require("assets/icons/eye.png")}
            className="absolute right-5 bottom-3"
          />
        </View>
      </View>
      <TouchableOpacity
        className="bg-[#3A95D2] rounded-[10px] p-4 items-center mt-10"
        onPress={() => router.push("/(auth)/forget-password/BackLogin")}
      >
        <Text className="font-bold text-[18px] text-white">Reset Password</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default NewPassword;
