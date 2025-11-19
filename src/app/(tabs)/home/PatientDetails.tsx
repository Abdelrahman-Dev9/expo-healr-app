import { View, Text, TouchableOpacity, Image, TextInput } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

const PatientDetails = () => {
  return (
    <SafeAreaView className="flex-1 mx-4 mt-5 ">
      <View className="flex-row ">
        <TouchableOpacity
          onPress={() => router.back()}
          className="bg-[#F2F2F2] items-center justify-center"
        >
          <Image
            source={require("assets/icons/left-arrow.png")}
            className="absolute left-0 w-6 h-6 p-1 ml-4 rounded-full"
            tintColor="#1C567D"
            resizeMode="contain"
          />
        </TouchableOpacity>
        <Text className="ml-[34%] font-bold text-[20px]">Patient details</Text>
      </View>
      <View className="mt-10">
        <Text className="text-[18px] font-semibold">Booking for</Text>

        <View className="flex-row justify-between mt-5">
          <TextInput
            placeholder="Self (User name)"
            placeholderTextColor={"#B3B3B3"}
            className="px-2 py-3 mt-3 border-2 rounded-[10px] border-[#CCCCCC] w-full"
          />
          <Image
            source={require("assets/icons/down-arrow.png")}
            tintColor="#1C567D"
            className="absolute right-5 bottom-3"
          />
        </View>
        <Text className="mt-10 text-[18px] font-semibold">Gender</Text>
        <View className="flex-row justify-between ">
          <TextInput
            placeholder="Male"
            placeholderTextColor={"#B3B3B3"}
            className="px-2 py-3 mt-3 border-2 rounded-[10px] border-[#CCCCCC] w-full"
          />
          <Image
            source={require("assets/icons/down-arrow.png")}
            tintColor="#1C567D"
            className="absolute right-5 bottom-3"
          />
        </View>
        <Text className="mt-10 text-[18px] font-semibold">
          Write your Problem
        </Text>
        <View className="flex-row justify-between ">
          <TextInput
            placeholder="Write how you feel... "
            placeholderTextColor={"#B3B3B3"}
            className="px-2 py-3 mt-3 border-2 rounded-[10px] border-[#CCCCCC] w-full h-[100px]"
          />
        </View>
      </View>
      <TouchableOpacity
        className="bg-[#3A95D2] rounded-[15px] p-4 items-center mt-[90px] absolute bottom-5 w-full"
        onPress={() => router.push("/(tabs)/home/BookingSummery")}
      >
        <Text className="font-bold text-[18px] text-white">Next</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default PatientDetails;
