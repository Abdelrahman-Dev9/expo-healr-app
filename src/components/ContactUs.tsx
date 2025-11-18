import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageSourcePropType,
} from "react-native";
import React, { useState } from "react";

interface Props {
  icon: ImageSourcePropType;
  title: string;
}
const ContactUs = ({ icon, title }: Props) => {
  const [textVisibility, setTextVisibility] = useState(true);

  return (
    <View className="flex-row pb-4 border-b border-[#B3B3B3] justify-between mt-8">
      <View className="flex-row items-center justify-center gap-4">
        <Image
          source={icon}
          resizeMode="contain"
          className="w-[20px] h-[20px]"
        />
        <Text className="text-[16px] font-semibold p-1">{title}</Text>
      </View>
      <TouchableOpacity onPress={() => setTextVisibility(!textVisibility)}>
        {textVisibility ? (
          <Image
            source={require("assets/icons/down-arrow (1).png")}
            resizeMode="contain"
          />
        ) : (
          <Image
            source={require("assets/icons/up-arrow.png")}
            resizeMode="contain"
          />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default ContactUs;
