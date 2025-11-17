import { View, Text, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import ProfileInfo from "@/components/ProfileInfo";

const Profile = () => {
  return (
    <SafeAreaView className="flex-1 mx-4">
      <Text className="text-[32px] font-bold">Profile</Text>
      <View className="flex-row items-center gap-8 mt-5">
        <View className="flex-row ">
          <Image source={require("assets/images/user-image.png")} />
          <Image
            source={require("assets/icons/edit-02.png")}
            className="absolute bg-[#3A95D2] top-[45px] left-[53px] p-2 rounded-full w-[35px] h-[35px]"
            tintColor="white"
            resizeMode="contain"
          />
        </View>
        <View className="gap-3">
          <Text className="text-[20px] font-semibold text-[#1A1A1A]">
            Ahmed Mahmoud
          </Text>
          <Text className="text-[#666666] text-[14px]">
            File ID: 2974602-528
          </Text>
        </View>
      </View>

      <View className="p-2 mt-10  rounded-[15px] ">
        <ProfileInfo
          icon={require("assets/icons/profile icons (1).png")}
          title="Your profile"
          nextRoute={"/(tabs)/profile/UpdateProfile"}
        />
        <ProfileInfo
          icon={require("assets/icons/profile-card.png")}
          title="Health Insurance"
          nextRoute={"/(tabs)/profile/HealthInsurance"}
        />
        <ProfileInfo
          icon={require("assets/icons/profile-clock.png")}
          title="Medical History"
          nextRoute={"/(tabs)/profile/MedicalHistory"}
        />
        <ProfileInfo
          icon={require("assets/icons/profile-help.png")}
          title="Help Center"
          nextRoute={"/(tabs)/ChatBot"}
        />
        <ProfileInfo
          icon={require("assets/icons/profile-lock.png")}
          title="Privacy Policy"
          nextRoute={"/(tabs)/ChatBot"}
        />
        <ProfileInfo
          icon={require("assets/icons/profile-log-out.png")}
          title="Log out"
          color="#D80000"
          nextRoute={"/(tabs)/ChatBot"}
        />
      </View>
      <Text className="absolute bottom-5 left-[90px] text-[#B3B3B3] ">
        © 2025 healr. All rights reserved
      </Text>
    </SafeAreaView>
  );
};

export default Profile;
