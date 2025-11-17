import { View, Text } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import OnBoardingScreen from "@/components/OnBoardingScreen";

const ScreenTwo = () => {
  const router = useRouter();
  return (
    <View>
      <OnBoardingScreen
        backgroundImage1={require("assets/images/doctor-woman-2.png")}
        icon={require("assets/icons/progress indicator 1 (2).png")}
        nextPage={() => router.push("/(onBoarding)/ScreenTwo")}
      />
    </View>
  );
};

export default ScreenTwo;
