import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

interface Props {
  title: string;
  description: string;
}
const FaqsCard = ({ title, description }: Props) => {
  const [textVisibility, setTextVisibility] = useState(true);
  return (
    <View className="mt-5 ml-5 ">
      <View className="p-4 border border-[#B3B3B3] rounded-[15px]">
        <View className="flex-row pb-4 border-b border-[#B3B3B3] justify-between">
          <Text className="text-[14px] font-bold p-1">{title}</Text>
          <TouchableOpacity onPress={() => setTextVisibility(!textVisibility)}>
            {textVisibility ? (
              <Image
                source={require("assets/icons/up-arrow.png")}
                // className="w-[10px] h-[15px]"
                resizeMode="contain"
              />
            ) : (
              <Image
                source={require("assets/icons/down-arrow (1).png")}
                // className="w-[20px] h-[20px]"
                resizeMode="contain"
              />
            )}
          </TouchableOpacity>
        </View>
        <Text
          className={`${textVisibility ? "" : "hidden"} mt-4 text-[#B3B3B3]`}
          style={{ lineHeight: 24 }}
        >
          {description}
        </Text>
      </View>
    </View>
  );
};

export default FaqsCard;
