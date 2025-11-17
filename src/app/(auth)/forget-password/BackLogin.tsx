import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

const BackLogin = () => {
  return (
    <SafeAreaView className="items-center justify-center flex-1 mx-5">
      <View className="items-center gap-4">
        <Image
          source={require("assets/icons/big-right-icon.png")}
          resizeMode="contain"
        />
        <Text className="text-[24px] font-semibold">Password changed!</Text>
        <Text className="text-[14px] text-[#666666]">
          Your password has been reset successfully
        </Text>
      </View>
      <TouchableOpacity
        className="bg-[#3A95D2] rounded-[10px] p-4 items-center w-full mt-5 "
        onPress={() => router.push("/(auth)/Login")}
      >
        <Text className="font-bold text-[18px] text-white ">
          Back to Sign in
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default BackLogin;
