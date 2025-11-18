import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageSourcePropType,
} from "react-native";
import React from "react";

interface Props {
  icon: ImageSourcePropType;
  title: string;
  description1?: string;
  description2?: string;
  description3?: string;
  data: string;
  bgColor?: string;
  bgIcon?: string;
}
const NotificationsCard = ({
  icon,
  title,
  description1,
  description2,
  description3,
  data,
  bgColor,
  bgIcon,
}: Props) => {
  return (
    <View className="flex-row gap-10 p-5 " style={{ backgroundColor: bgColor }}>
      <Image
        source={icon}
        resizeMode="contain"
        className="p-2 rounded-full w-[40px] h-[40px]"
        style={{ backgroundColor: bgIcon }}
      />
      <View>
        <Text className="text-[16px] font-semibold">{title}</Text>
        <Text className="mt-2" style={{ lineHeight: 20 }}>
          Reminder:
          <Text className="font-bold text-[14px]"> {description1}</Text> of
          {"\n"}
          <Text className="font-bold text-[14px]">{description2} </Text>
          at
          <Text className="font-bold text-[14px]">{description3}</Text>
        </Text>
        <View className="flex-row hidden gap-4 mt-4">
          <TouchableOpacity className="flex-row items-center gap-3 p-3 rounded-[15px] bg-[#3A95D2]">
            <Image
              source={require("assets/icons/right-icon.png")}
              tintColor="white"
            />
            <Text className="text-white text-[16px] font-semibold">Taken</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <View className="flex-row items-center gap-2 p-3 rounded-[15px] border border-[#3A95D2]">
              <Image source={require("assets/icons/false.png")} />
              <Text className="text-[16px] font-semibold">Skipped</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <Text className="text-[#666666] text-[14px]">{data}</Text>
    </View>
  );
};

export default NotificationsCard;
