import { View, Text } from "react-native";
import React from "react";
import OnBoardingScreen from "components/OnBoardingScreen";
import { useRouter } from "expo-router";

const ScreenOne = () => {
  const router = useRouter();
  return (
    <View>
      <OnBoardingScreen
        backgroundImage1={require("assets/images/doctor-man.png")}
        backgroundImage2={require("assets/images/doctor-woman.png")}
        icon={require("assets/icons/progress indicator 1 (1).png")}
        nextPage={() => router.push("/")}
      />
    </View>
  );
};

export default ScreenOne;
