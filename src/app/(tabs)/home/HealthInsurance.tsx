import { View, Text, TouchableOpacity, Image, TextInput } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

const HealthInsurance = () => {
  return (
    <SafeAreaView className="flex-1 mt-5 ">
      <View className="flex-row bg-[#EFF6FF] p-5">
        <TouchableOpacity onPress={() => router.back()}>
          <Image
            source={require("assets/icons/left-arrow.png")}
            className="w-[32px] h-[32px] p-1 ml-4 bg-[#F8F8F8] rounded-full left-0 top-4 absolute border border-[#3A95D2]"
            tintColor="#3A95D2"
            resizeMode="contain"
          />
        </TouchableOpacity>
        <View className="items-center justify-center w-full gap-4">
          <Image
            source={require("assets/icons/20231126093830!الهيئة_العامة_للتأمين_الصحي_الشامل_(مصر) 1 (1).png")}
          />
          <Text className=" font-bold text-[20px]">
            Health insurance submission
          </Text>
        </View>
      </View>
      <View className="mx-4 mt-10">
        <View>
          <Text className="text-[18px] font-semibold">Head of the family</Text>
          <TextInput
            placeholder="Mahmoud Mohamed Hamada Hemeda"
            placeholderTextColor={"#B3B3B3"}
            className="px-2 py-3 mt-5 border-2 rounded-[10px]  border-[#CCCCCC]"
          />
        </View>
        <View className="mt-9">
          <Text className="text-[18px] font-semibold">Beneficiary name</Text>
          <TextInput
            placeholder="Ahmed Mahmoud Mohamed Hamada"
            placeholderTextColor={"#B3B3B3"}
            className="px-2 py-3 mt-5 border-2 rounded-[10px]  border-[#CCCCCC]"
          />
        </View>
        <View className="mt-9">
          <Text className="text-[18px] font-semibold">Health unit</Text>
          <TextInput
            placeholder="El-Rahma"
            placeholderTextColor={"#B3B3B3"}
            className="px-2 py-3 mt-5 border-2 rounded-[10px]  border-[#CCCCCC]"
          />
        </View>
        <View className="mt-9">
          <Text className="text-[18px] font-semibold">File number</Text>
          <TextInput
            placeholder="5607-23"
            placeholderTextColor={"#B3B3B3"}
            className="px-2 py-3 mt-5 border-2 rounded-[10px]  border-[#CCCCCC]"
          />
        </View>
      </View>
      <TouchableOpacity
        className="bg-[#3A95D2] rounded-[15px] p-4 items-center  mx-4 mt-[100px] "
        onPress={() => router.push("/(tabs)/home/HealthInsuranceSuccess")}
      >
        <Text className="font-bold text-[18px] text-white">Sign in</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default HealthInsurance;
