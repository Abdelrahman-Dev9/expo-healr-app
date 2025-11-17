import { View, Text, TouchableOpacity, Image, TextInput } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

const VerificationCode = () => {
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
          Enter verification code
        </Text>
        <Text className="text-[14px] text-center text-[#666666] mt-4">
          An OTP has been sent to your registered email {"\n"} address. Please
          enter the code below to proceed.
        </Text>
        <Text className="text-[14px] text-center text-[#666666] mt-10">
          The OTP is valid for 10 minutes.
        </Text>

        <View className="flex-row gap-10 mt-5">
          <TextInput
            placeholderTextColor={"#B3B3B3"}
            className=" mt-3 border-2 rounded-[10px] border-[#3A95D2] w-[70px] h-[72px] p-2"
          />
          <TextInput
            placeholderTextColor={"#B3B3B3"}
            className=" mt-3 border-2 rounded-[10px] border-[#3A95D2] w-[70px] h-[72px] p-2"
          />
          <TextInput
            placeholderTextColor={"#B3B3B3"}
            className=" mt-3 border-2 rounded-[10px] border-[#3A95D2] w-[70px] h-[72px] p-2"
          />
          <TextInput
            placeholderTextColor={"#B3B3B3"}
            className=" mt-3 border-2 rounded-[10px] border-[#3A95D2] w-[70px] h-[72px] p-2"
          />
        </View>
        <TouchableOpacity
          className="bg-[#B3B3B3] rounded-[10px] p-4 items-center mt-10"
          onPress={() => router.push("/(auth)/forget-password/NewPassword")}
        >
          <Text className="font-bold text-[18px] text-white">Verify</Text>
        </TouchableOpacity>

        <View className="flex-row justify-center gap-2 mt-8">
          <Text className=" text-[16px]">Didn’t receive a code?</Text>
          <Text className="text-[#2673A6] font-semibold text-[18px]">
            Resend code
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default VerificationCode;
