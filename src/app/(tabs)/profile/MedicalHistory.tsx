import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import MedicalCard from "@/components/MedicalCard";

const MedicalHistory = () => {
  return (
    <SafeAreaView className="flex-1 mx-4 mt-5 ">
      <View className="flex-row ">
        <TouchableOpacity onPress={() => router.back()}>
          <Image
            source={require("assets/icons/left-arrow.png")}
            className="w-6 h-6 p-1 ml-4 bg-[#F2F2F2] rounded-full left-0 absolute"
            tintColor="#1C567D"
            resizeMode="contain"
          />
        </TouchableOpacity>
        <Text className="ml-[31%] font-bold text-[20px]">Medical History</Text>
      </View>

      <View className="flex-row justify-between p-3 mt-10 border border-[#999999] rounded-[15px]">
        <View className="flex-row gap-4">
          <Image source={require("assets/icons/search.png")} />
          <TextInput placeholder="Search your records" />
        </View>
        <Image source={require("assets/icons/mic.png")} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <MedicalCard
          visitType=" Consultation"
          data="2025-03-16"
          doctor="Dr. Mariam Mohamed "
          docSpecialist="Dermatologist"
          note=" Monthly routine checkup, Updated prescriptions."
          btn=" Download reprort"
        />
        <MedicalCard
          visitType=" Consultation"
          data="2025-03-16"
          doctor="Dr. Mariam Mohamed "
          docSpecialist="Dermatologist"
          note=" Monthly routine checkup, Updated prescriptions."
          btn=" Download reprort"
        />
        <MedicalCard
          visitType=" Consultation"
          data="2025-03-16"
          doctor="Dr. Mariam Mohamed "
          docSpecialist="Dermatologist"
          note=" Monthly routine checkup, Updated prescriptions."
          btn=" Download reprort"
        />
        <TouchableOpacity className="border border-[#3A95D2] p-3 rounded-full mt-5">
          <Text className="text-center text-[#3A95D2]  font-semibold text-[18px]">
            Export Full History
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MedicalHistory;
