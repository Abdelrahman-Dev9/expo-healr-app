import {
  View,
  Text,
  Image,
  ImageSourcePropType,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { router } from "expo-router";

interface Props {
  icon: ImageSourcePropType;
  title: string;
  color?: string;
  nextRoute?: string;
}
const ProfileInfo = ({ icon, title, color, nextRoute }: Props) => {
  return (
    <TouchableOpacity onPress={() => router.push(nextRoute)}>
      <View className="flex-row justify-between p-4 mt-6 border-b border-gray-300 ">
        <View className="flex-row gap-4 ">
          <Image source={icon} resizeMode="contain" />
          <Text className="text-[18px] font-bold" style={{ color: color }}>
            {title}
          </Text>
        </View>
        <Image
          source={require("assets/icons/right-arrow.png")}
          resizeMode="contain"
        />
      </View>
    </TouchableOpacity>
  );
};

export default ProfileInfo;
