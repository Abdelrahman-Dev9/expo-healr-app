import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

const UpdateProfile = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
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
          <Text className="ml-[37%] font-bold text-[20px]">Your profile</Text>
        </View>
        <View className="items-center justify-center gap-8 mt-5">
          <View className="flex-row ">
            <Image source={require("assets/images/user-image.png")} />
            <Image
              source={require("assets/icons/edit-02.png")}
              className="absolute bg-[#3A95D2] top-[45px] left-[53px] p-2 rounded-full w-[35px] h-[35px]"
              tintColor="white"
              resizeMode="contain"
            />
          </View>
        </View>
        <View className="mt-10">
          <Text className="text-[18px]">Full name</Text>
          <TextInput
            placeholder="Ahmed Mahmoud"
            placeholderTextColor={"#B3B3B3"}
            className="px-2 py-3 mt-3 border-2 rounded-[10px] border-[#CCCCCC]"
          />
        </View>
        <View className="mt-10">
          <Text className="text-[18px]">Email address</Text>
          <TextInput
            placeholder="ahmed.mahmoud@example.com"
            placeholderTextColor={"#B3B3B3"}
            className="px-2 py-3 mt-3 border-2 rounded-[10px] border-[#CCCCCC]"
          />
        </View>
        <View className="mt-10">
          <Text className="text-[18px]">Phone number</Text>
          <View className="flex-row">
            <TextInput
              placeholder="078 6439 0024 "
              placeholderTextColor={"#B3B3B3"}
              className="px-2 py-3 mt-3 border-2 rounded-[10px] border-[#CCCCCC] w-full"
            />
            <Text className="absolute right-5 top-6 text-[14px] text-[#3A95D2] font-semibold">
              Change
            </Text>
          </View>
        </View>
        <View className="mt-10">
          <Text className="text-[18px]">Date of birth</Text>
          <View className="flex-row">
            <TextInput
              placeholder="DD/MM/YY"
              placeholderTextColor={"#B3B3B3"}
              className="px-2 py-3 mt-3 border-2 rounded-[10px] border-[#CCCCCC] w-full"
            />

            <Image
              source={require("assets/icons/calendar-icon.png")}
              className="absolute right-5 top-6"
              tintColor="#666666"
            />
          </View>
        </View>
        <View className="mt-10">
          <Text className="text-[18px]">Gender</Text>
          <View className="flex-row">
            <TextInput
              placeholder="Male"
              placeholderTextColor={"#B3B3B3"}
              className="px-2 py-3 mt-3 border-2 rounded-[10px] border-[#CCCCCC] w-full"
            />

            <Image
              source={require("assets/icons/down-arrow.png")}
              className="absolute right-5 top-6"
              tintColor="#666666"
            />
          </View>
        </View>
        <View className="mt-10 ">
          <Text className="text-[18px]">Blood</Text>
          <View className="flex-row">
            <TextInput
              placeholder="A+"
              placeholderTextColor={"#B3B3B3"}
              className="px-2 py-3 mt-3 border-2 rounded-[10px] border-[#CCCCCC] w-full"
            />

            <Image
              source={require("assets/icons/down-arrow.png")}
              className="absolute right-5 top-6"
              tintColor="#666666"
            />
          </View>
        </View>
        <View className="mt-10 ">
          <Text className="text-[18px]">Additional notes</Text>
          <Text className="  w-full rounded-[15px] mt-4 text-[#666666] border border-[#CCCCCC] p-4 text-start">
            Persistent chest discomfort, taking {"\n"} Naproxen 500mg twice a
            day for joint {"\n"} pain, taking Lisinopril 10mg for blood {"\n"}
            pressure.
          </Text>
        </View>
        <TouchableOpacity className="bg-[#3A95D2] rounded-full p-4 items-center mt-10">
          <Text className="font-semibold text-[18px] text-white">
            Update Profile
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    </ScrollView>
  );
};

export default UpdateProfile;
