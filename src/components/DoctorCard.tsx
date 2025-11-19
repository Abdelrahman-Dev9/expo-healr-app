import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageSourcePropType,
} from "react-native";
import React from "react";
import { router } from "expo-router";

interface Props {
  doctorImage: ImageSourcePropType;
  doctorName: string;
  location: string;
  appointment: string;
}
const DoctorCard = ({
  doctorImage,
  doctorName,
  location,
  appointment,
}: Props) => {
  return (
    <View className="p-4 mt-6 bg-white rounded-[15px]">
      <View className="flex-row gap-5">
        <Image source={doctorImage} />
        <View className="gap-2">
          <View className="flex-row gap-2 bg-[#D5E9F6] px-2 py-1 rounded-full">
            <Image source={require("assets/icons/checkmark-badge-01.png")} />
            <Text className="text-[#2673A6] text-[13px]">
              Professional Doctor
            </Text>
          </View>
          <Text className="text-[16px] font-semibold">{doctorName}</Text>
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
      <View className="gap-4 mt-2">
        <View className="flex-row gap-4">
          <Image
            source={require("assets/icons/location-06.png")}
            resizeMode="contain"
          />
          <Text className="text-[14px] font-semibold">{location}</Text>
        </View>
        <View className="flex-row gap-4">
          <Image
            source={require("assets/icons/dollar-circle.png")}
            resizeMode="contain"
          />
          <Text className="text-[14px] font-semibold">{appointment}</Text>
        </View>
      </View>
      <View className="flex-row gap-4 mt-4">
        <TouchableOpacity>
          <Text className="text-[14px] bg-[#D5E9F6] py-3 px-6 rounded-[15px]">
            Available today at 3:00PM
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => router.push("/(tabs)/home/BookingAppointment")}
        >
          <Text className="text-[14px] font-semibold bg-[#3A95D2] text-white py-3 px-6 rounded-[15px]">
            Book now
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DoctorCard;
