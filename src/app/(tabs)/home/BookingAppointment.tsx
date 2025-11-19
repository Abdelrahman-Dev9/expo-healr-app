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
import SearchCard from "@/components/SearchCard";
import DoctorCard from "@/components/DoctorCard";

const BookingAppointment = () => {
  return (
    <SafeAreaView className="flex-1 mx-4 mt-5 ">
      <View className="flex-row ">
        <TouchableOpacity
          onPress={() => router.back()}
          className="bg-[#F2F2F2] items-center justify-center"
        >
          <Image
            source={require("assets/icons/left-arrow.png")}
            className="absolute left-0 w-6 h-6 p-1 ml-4 rounded-full"
            tintColor="#1C567D"
            resizeMode="contain"
          />
        </TouchableOpacity>
        <Text className="ml-[31%] font-bold text-[20px]">Book appointment</Text>
      </View>
      <View>
        <Text className="text-[#3A95D2] text-[18px] font-semibold mt-5">
          Doctors near you, available now!
        </Text>
        <View className="flex-row justify-between items-center px-3 py-1 mt-5 border border-[#999999] rounded-[15px]">
          <View className="flex-row gap-4">
            <Image source={require("assets/icons/search.png")} />
            <TextInput placeholder="Search your records" />
          </View>
          <Image source={require("assets/icons/container.png")} />
        </View>
      </View>
      <View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <DoctorCard
            doctorImage={require("assets/images/doctor1.png")}
            doctorName="Dr. Melissa Wright"
            location="Ismailia, SCU Hospital"
            appointment="Appointment price: 300 L.E."
          />
          <DoctorCard
            doctorImage={require("assets/images/doctor2.png")}
            doctorName="Dr. Mohamed Amin"
            location="Ismailia Medical Complex"
            appointment="Appointment price: 250 L.E."
          />
          <DoctorCard
            doctorImage={require("assets/images/doctor3.png")}
            doctorName="Dr. Melissa Wright"
            location="Ismailia, SCU Hospital"
            appointment="Appointment price: 300 L.E."
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default BookingAppointment;
