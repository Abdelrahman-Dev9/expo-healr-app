import {
  View,
  Text,
  Image,
  ImageBackground,
  ImageSourcePropType,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

interface Props {
  backgroundImage?: ImageSourcePropType;
  backgroundImage1: ImageSourcePropType;
  backgroundImage2?: ImageSourcePropType;
  icon: ImageSourcePropType;
  nextPage: () => void;
  stylingLeft?: string;
}
const OnBoardingScreen = ({
  backgroundImage,
  backgroundImage1,
  backgroundImage2,
  icon,
  nextPage,
}: Props) => {
  const router = useRouter();
  return (
    <SafeAreaView className="mt-5">
      {/* header screen */}
      <View className="flex-row justify-between mx-5 ">
        <View>
          <Image
            source={require("assets/icons/Layer 1.png")}
            className="w-[70px] h-[63px] ml-4"
            resizeMode="contain"
          />
          <Text className="text-[#3397D3] mt-2">
            healr
            <Text className="text-[#EE574A]"> Healthcare</Text>
          </Text>
        </View>
        <TouchableOpacity onPress={() => router.push("/(auth)/SignUp")}>
          <Text className="mt-5 font-semibold text-[18px] text-[#1C567D]">
            Skip
          </Text>
        </TouchableOpacity>
      </View>
      {/* background Image  */}
      <View className="flex-row justify-center  mt-[80px] ">
        <ImageBackground
          source={backgroundImage}
          className="w-[280px] h-[270px]"
          resizeMode="contain"
        >
          <View className="flex-row ml-[95px] mt-10">
            <Image
              source={backgroundImage1}
              resizeMode="contain"
              className={`w-[230px] h-[300px] absolute left-[-120px] `}
              style={{ zIndex: 10 }}
            />
            <Image
              source={backgroundImage2}
              resizeMode="contain"
              className="w-[230px] mt-6"
            />
          </View>
        </ImageBackground>
      </View>
      {/* Text area */}
      <View className=" bg-[#EFF6FF] mt-[15%] h-full  items-center rounded-tl-mdr-md">
        <Text className="flex items-center justify-center text-center text-[24px] p-4 pt-[80px] font-semibold">
          Welcome to <Text className="text-[#3A95D2]"> healr. </Text>
          {"\n"} Your health partner, anytime, {"\n"} anywhere.
        </Text>
        <TouchableOpacity onPress={nextPage}>
          <Image
            // source={require("assets/icons/progress indicator 1 (1).png")}
            source={icon}
            resizeMode="contain"
            className="mt-10 "
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default OnBoardingScreen;
