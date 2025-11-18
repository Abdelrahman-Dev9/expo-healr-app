import { View, Text, Image, ImageSourcePropType } from "react-native";
import React from "react";

interface Props {
  icon: ImageSourcePropType;
  title: string;
  description: string;
}
const HomeCard = ({ icon, title, description }: Props) => {
  return (
    <View className="p-4 rounded-[15px] bg-[#EFF6FF] w-[192px] border border-gray-300">
      <Image source={icon} resizeMode="contain" />
      <Text className="text-[15px] font-semibold mt-3">{title}</Text>
      <Text className="text-[13px] text-[#666666] mt-2">{description}</Text>
    </View>
  );
};

export default HomeCard;
