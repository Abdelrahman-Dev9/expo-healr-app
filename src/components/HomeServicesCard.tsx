import { View, Text, Image, ImageSourcePropType } from "react-native";
import React from "react";

interface Props {
  icon: ImageSourcePropType;
  title: string;
}
const HomeServicesCard = ({ icon, title }) => {
  return (
    <View className="border border-[#666666] p-4 rounded-[15px] gap-2  w-[100px] h-[81px] justify-center items-center">
      <Image source={icon} />
      <Text className="text-center">{title}</Text>
    </View>
  );
};

export default HomeServicesCard;
