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
}
const SearchCard = ({ icon, title }: Props) => {
  return (
    <TouchableOpacity
      onPress={() => router.push("/(tabs)/search/FilterByField")}
    >
      <View className="flex-row items-center gap-4 pb-2 border-b border-[#B3B3B3] justify-between mt-9">
        <View className="flex-row items-center justify-center gap-2">
          <Image source={icon} resizeMode="contain" />
          <Text className="text-[16px] font-semibold p-1">{title}</Text>
        </View>
        <Image
          source={require("assets/icons/right-arrow.png")}
          resizeMode="contain"
          className="w-[20px] h-[20px] ml-[-10px] "
        />
      </View>
    </TouchableOpacity>
  );
};

export default SearchCard;
