import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

const BookingSummery = () => {
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
        <Text className="ml-[31%] font-bold text-[20px]">Book appointment</Text>
      </View>
      <View className="mt-5">
        <View className="flex-row gap-4 border-b border-[#CCCCCC] pb-4">
          <Image
            source={require("assets/images/doctor-man.png")}
            className="rounded-full w-[80px] h-[80px] bg-[#D5E9F6]"
            resizeMode="contain"
          />
          <View className="justify-center gap-2">
            <Text className="text-[20px] font-semibold">Dr. Benjamin Reed</Text>
            <Text className="text-[16px] text-[#666666]">Dentist</Text>
            <View className="flex-row gap-2">
              <Image
                source={require("assets/icons/location-06.png")}
                className="w-5 h-5"
                resizeMode="contain"
              />
              <Text className="text-[14px]">
                Ismailia, Suez Canal University Hospital
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View className="mt-8 border-b border-[#cccccc] pb-6">
        <View className="flex-row justify-between">
          <Text className="text-[16px] text-[#666666]">Date & hour</Text>
          <Text className="text-[16px] font-semibold">
            June 1st, 2025 | 03:00PM{" "}
          </Text>
        </View>
        <View className="flex-row justify-between mt-5">
          <Text className="text-[16px] text-[#666666]">Type</Text>
          <Text className="text-[16px] font-semibold">
            In Person Consultation
          </Text>
        </View>
        <View className="flex-row justify-between mt-5">
          <Text className="text-[16px] text-[#666666]">Booking for</Text>
          <Text className="text-[16px] font-semibold">Self</Text>
        </View>
      </View>
      <View className="mt-8 border-b border-[#cccccc] pb-6">
        <View className="flex-row justify-between">
          <Text className="text-[16px] text-[#666666]">Amount</Text>
          <Text className="text-[16px] font-semibold">300 L.E.</Text>
        </View>
        <View className="flex-row justify-between mt-5">
          <Text className="text-[16px] text-[#666666]">
            Health Insurance discount
          </Text>
          <Text className="text-[16px] font-semibold ">300 L.E. 260 l.E.</Text>
        </View>
      </View>
      <View className="mt-8 border-b border-[#cccccc] pb-6">
        <View className="flex-row justify-between">
          <Text className="text-[16px] text-[#666666]">Total</Text>
          <Text className="text-[16px] font-semibold">260 L.E.</Text>
        </View>
      </View>

      <View className="flex-row gap-4 mt-5">
        <Image source={require("assets/icons/cash.png")} />
        <Text className="text-[16px] font-semibold">Payment with Cash</Text>
      </View>
      <View className="absolute gap-5 bottom-5">
        <TouchableOpacity
          className="bg-[#3A95D2] rounded-[15px] p-4 items-center mt-[90px]  w-full"
          onPress={() => router.push("/(tabs)/home/BookingSummerySuccess")}
        >
          <Text className="font-bold text-[18px] text-white">
            Confirm Booking
          </Text>
        </TouchableOpacity>
        <Text className="text-[14px] text-[#666666] text-center">
          You will receive a reminder 24 hours prior to your appointment.
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default BookingSummery;
