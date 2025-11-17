import { View, Text } from "react-native";
import React from "react";
import OnBoardingScreen from "@/components/OnBoardingScreen";
import { useRouter } from "expo-router";

const ScreenThree = () => {
  const router = useRouter();
  return (
    <OnBoardingScreen
      backgroundImage1={require("assets/images/clock.png")}
      icon={require("assets/icons/progress indicator 1 (3).png")}
      nextPage={() => router.push("/(onBoarding)/ScreenTwo")}
    />
  );
};

export default ScreenThree;
