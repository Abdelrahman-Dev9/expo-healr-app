import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";

const SearchDoctorFilter = () => {
  return (
    <View className="p-4 mt-6 bg-white rounded-[15px]">
      <View className="flex-row gap-5">
        <Image source={require("assets/images/docto-image.png")} />
        <View className="gap-2">
          <View className="flex-row gap-2 bg-[#D5E9F6] px-2 py-1 rounded-full">
            <Image source={require("assets/icons/checkmark-badge-01.png")} />
            <Text className="text-[#2673A6] text-[13px]">
              Professional Doctor
            </Text>
          </View>
          <Text className="text-[16px] font-semibold">Dr. Melissa Wright</Text>
          <Text className="text-[16px] text-[#666666]">ENT Specialist</Text>
          <View className="flex-row gap-2">
            <Text>4.5</Text>
            <View className="flex-row gap-1">
              <Image source={require("assets/icons/Star.png")} />
              <Image source={require("assets/icons/Star.png")} />
              <Image source={require("assets/icons/Star.png")} />
              <Image source={require("assets/icons/Star.png")} />
              <Image
                source={require("assets/icons/Star.png")}
                tintColor="#CCCCCC"
              />
            </View>
          </View>
        </View>
      </View>
      <View className="flex-row gap-4 mt-4">
        <TouchableOpacity className="py-2 px-4 bg-[#D5E9F6] rounded-[15px]">
          <Text className="text-[#666666] text-[16px]">
            Available today at 1:00PM
          </Text>
        </TouchableOpacity>
        <TouchableOpacity className="py-2 px-4 bg-[#3A95D2] rounded-[15px]">
          <Text className="text-white text-[16px]">Book Now!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SearchDoctorFilter;
