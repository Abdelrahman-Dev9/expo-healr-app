import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

const EmptyHealthInsurance = () => {
  return (
    <SafeAreaView className="flex-1 mx-4 mt-5 ">
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
      <View className="items-center justify-center flex-1 ">
        <Image
          source={require("assets/icons/Empty-pana 1 (1).png")}
          resizeMode="contain"
        />
        <View className="flex-row items-center gap-4 mt-4">
          <Image source={require("assets/icons/help-icon.png")} />
          <Text className="text-[16px] font-semibold">
            No insurance card found.
          </Text>
        </View>
        <Text className="mt-4 text-center text-[14px]">
          Add a valid health insurance card to simplify your {"\n"} bookings and
          approvals.
        </Text>
        <TouchableOpacity className="mt-5 bg-[#3A95D2] p-4 rounded-[15px] w-full items-center">
          <View className="flex-row items-center gap-4">
            <Image source={require("assets/icons/add-circle.png")} />
            <Text className="font-bold text-white text-[16px]">
              Add Health Insurance Card
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default EmptyHealthInsurance;
