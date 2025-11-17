import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

const HealthInsurance = () => {
  return (
    <SafeAreaView className="mx-4 mt-5 ">
      <View className="flex-row ">
        <TouchableOpacity onPress={() => router.back()}>
          <Image
            source={require("assets/icons/left-arrow.png")}
            className="w-6 h-6 p-1 ml-4 bg-[#F2F2F2] rounded-full left-0 absolute"
            tintColor="#1C567D"
            resizeMode="contain"
          />
        </TouchableOpacity>
        <Text className="ml-[31%] font-bold text-[20px]">Health Insurance</Text>
      </View>
      <View className="p-4 mt-10 bg-white rounded-[15px] border border-[#E6E6E6]">
        <View className="flex-row gap-4">
          <Image
            source={require("assets/icons/20231126093830!الهيئة_العامة_للتأمين_الصحي_الشامل_(مصر) 1 (1).png")}
            resizeMode="contain"
          />
          <View>
            <Text className="text-[14px] text-[#666666]">
              Insurance Provider:
            </Text>
            <Text className="mt-3 text-[16px] font-semibold">
              The General Authority for Health {"\n"} Insurance in Egypt
            </Text>
          </View>
        </View>
        <View className="flex-row justify-between mt-8">
          <Text className="text-[14px] text-[#666666]">Health unit</Text>
          <Text className="text-[14px] font-semibold">El-Rahma</Text>
        </View>
        <View className="flex-row justify-between mt-8">
          <Text className="text-[14px] text-[#666666]">File number</Text>
          <Text className="text-[14px] font-semibold">5607-23</Text>
        </View>
        <View className="flex-row justify-between mt-8">
          <Text className="text-[14px] text-[#666666]">Head of the Family</Text>
          <Text className="text-[14px] font-semibold">
            Mahmoud Mohamed Ahmed
          </Text>
        </View>
        <View className="flex-row justify-between mt-8">
          <Text className="text-[14px] text-[#666666]">Beneficiary name</Text>
          <Text className="text-[14px] font-semibold">
            Ahmed Mahmoud Mohamed
          </Text>
        </View>
      </View>
      <TouchableOpacity className="border border-[#EF4444] p-4 mt-8 rounded-[15px]">
        <Text className="text-[#EF4444] text-center font-bold text-[17px]">
          Remove Health Insurance
        </Text>
      </TouchableOpacity>
      <View className="flex-row gap-4 mt-10">
        <Image source={require("assets/icons/information-circle (1).png")} />
        <Text className="text-[14px] text-[#666666]">
          This card will be applied automatically to all future {"\n"} booking
          requests that require insurance.
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default HealthInsurance;
