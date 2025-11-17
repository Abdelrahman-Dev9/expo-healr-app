import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

const ForgetPassword = () => {
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
        <Text className="text-[28px] text-center font-bold">
          Forgot your password?
        </Text>
        <Text className="text-[18px] text-center text-[#666666] mt-3">
          Enter your email account to reset your password
        </Text>

        <View className="mt-10">
          <Text className="text-[18px]">Email address</Text>
          <TextInput
            placeholder="Enter your email"
            placeholderTextColor={"#B3B3B3"}
            className="px-2 py-3 mt-3 border-2 rounded-[10px] border-[#2673A6]"
          />
        </View>
        <TouchableOpacity
          className="bg-[#3A95D2] rounded-[10px] p-4 items-center mt-10"
          onPress={() =>
            router.push("/(auth)/forget-password/VerificationCode")
          }
        >
          <Text className="font-bold text-[18px] text-white">Next</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ForgetPassword;
