import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

const HealthInsuranceSuccess = () => {
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
      <View className="items-center flex-1 mt-[100px] gap-4 mx-4">
        <Image source={require("assets/icons/right--icon.png")} />
        <Text className="text-[20px] font-semibold text-center">
          Health Insurance Card {"\n"} successfully added!
        </Text>
        <Text className="text-center text-[14px] border-b pb-5 border-[#CCCCCC]">
          Your health insurance card has been verified and saved. It will now be
          automatically applied to all future booking requests.
        </Text>
        <Text className="text-center text-[#666666] text-[14px]">
          You can view or update your insurance details {"\n"} anytime in:
          Profile {">"} Health Insurance
        </Text>
        <View className="flex-row items-center justify-center gap-4 mx-4 mt-[40px]">
          <TouchableOpacity>
            <Text className="text-[14px] text-[#3A95D2] border border-[#3A95D2] py-3 px-6 rounded-[15px]">
              Go to Profile
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => router.push("/(tabs)/home/BookingAppointment")}
          >
            <Text className="text-[14px] bg-[#3A95D2] text-white py-3 px-6 rounded-[15px]">
              Book an appointment
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HealthInsuranceSuccess;
