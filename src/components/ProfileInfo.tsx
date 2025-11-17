import { View, Text, Image, ImageSourcePropType } from "react-native";
import React from "react";

interface Props {
  icon: ImageSourcePropType;
  title: string;
  color?: string;
}
const ProfileInfo = ({ icon, title, color }: Props) => {
  return (
    <View>
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
    </View>
  );
};

export default ProfileInfo;
