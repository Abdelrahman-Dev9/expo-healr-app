import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

const BookingSummerySuccess = () => {
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
        <Text className="ml-[15%] text-[20px]">Back to Home</Text>
      </View>
      <View className="items-center flex-1 mt-[100px] gap-4 mx-4">
        <Image source={require("assets/icons/right--icon.png")} />
        <Text className="text-[20px] font-semibold text-center">
          Appointment Confirmed
        </Text>
        <Text className="text-center text-[16px] ">
          Your visit with Dr. Ahmed is scheduled for May 10, at 3:00 PM.
        </Text>

        <View className="w-full p-4 bg-white rounded-[15px] border border-[#CCCCCC]">
          <View className="flex-row items-center gap-5">
            <Image
              source={require("assets/icons/hash-icon.png")}
              className="w-7 h-7"
            />
            <View className="gap-2">
              <Text>Appointment ID</Text>
              <Text>#502</Text>
            </View>
          </View>
          <View className="flex-row items-center gap-5 mt-5">
            <Image source={require("assets/icons/profile-clock.png")} />
            <View className="gap-2">
              <Text>Time</Text>
              <Text>May 10, at 3:00 PM.</Text>
            </View>
          </View>
          <View className="flex-row items-center gap-5 mt-5">
            <Image
              source={require("assets/icons/location.png")}
              className="w-7 h-7"
            />
            <View className="gap-2">
              <Text>Location</Text>
              <Text>Ismailia Medical Complex</Text>
            </View>
          </View>
        </View>

        <View className="flex-row items-center justify-center gap-4 mx-4 mt-5">
          <TouchableOpacity>
            <Text className="text-[14px] text-[#3A95D2] border border-[#3A95D2] py-3 px-6 rounded-[15px]">
              Reschedule
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => router.push("/(tabs)/home/BookingAppointment")}
          >
            <Text className="text-[14px] bg-[#3A95D2] text-white py-3 px-6 rounded-[15px]">
              View Appointment Details
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BookingSummerySuccess;
