import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import HomeCard from "@/components/HomeCard";
import HomeServicesCard from "@/components/HomeServicesCard";

const Home = () => {
  return (
    <SafeAreaView className="mx-4 mt-5">
      <View className="flex-row items-center justify-between mx-5 ">
        <View>
          <Text className="mt-5 font-semibold text-[15px] text-[#B3B3B3]">
            Hello,
          </Text>
          <Text className=" mt-2 font-semibold text-[16px] text-[#1A1A1A]">
            Ahmed Mahmoud
          </Text>
        </View>

        <Image
          source={require("assets/icons/Layer 1.png")}
          className="w-[56px] h-[53px] ml-4 mt-4"
          resizeMode="contain"
        />
      </View>
      <View className="flex-row justify-between p-4 mt-5 border border-dashed border-[#1C567D]">
        <View>
          <View>
            <Text>Ahead of you in line:</Text>
            <Text className="text-[18px] font-bold mt-1">5 people waiting</Text>
          </View>
          <Text className="mt-4">
            The waiting time for your appointment {"\n"} is about one hour.
          </Text>
        </View>
        <Image
          source={require("assets/images/Waiting-pana 1.png")}
          resizeMode="contain"
        />
      </View>
      <TouchableOpacity
        onPress={() => router.push("/(tabs)/home/HealthInsurance")}
      >
        <View className="mt-4 rounded-[15px] p-5 bg-[#1C567D] flex-row items-center gap-5 justify-between">
          <View>
            <Text className="text-[16px] text-[#F8F8F8] font-semibold">
              Add your Health Insurance Card
            </Text>
            <Text className="mt-2 text-[12px] text-[#F2F2F2]">
              Book now and save consultation fees with insurance.
            </Text>
          </View>
          <Image
            source={require("assets/icons/add-circle.png")}
            className="w-[40px] h-[40px]"
            resizeMode="contain"
          />
        </View>
      </TouchableOpacity>

      <Text className="mt-6 text-[18px] font-semibold">
        What Would You Like to Do?
      </Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <View className="flex-row flex-wrap gap-5 mt-6">
            <HomeCard
              icon={require("assets/icons/Booking.png")}
              title="Book appointment"
              description="Just a few taps to book your next appointment."
            />
            <HomeCard
              icon={require("assets/icons/Testing.png")}
              title="Test/scans results"
              description="View your test results and scans instantly."
            />
            <HomeCard
              icon={require("assets/icons/approvals.png")}
              title="My approvals"
              description="Medication and tests approvals from insurance."
            />
            <HomeCard
              icon={require("assets/icons/doctor.png")}
              title="Test/scans results"
              description="View your test results and scans"
            />
          </View>
        </View>
        <View className="flex-row flex-wrap justify-center gap-4 mt-4">
          <HomeServicesCard
            icon={require("assets/icons/location.png")}
            title="Find Hospital"
          />
          <HomeServicesCard
            icon={require("assets/icons/head.png")}
            title="ENT care"
          />
          <HomeServicesCard
            icon={require("assets/icons/Dentistry.png")}
            title="Dental care"
          />
          <HomeServicesCard
            icon={require("assets/icons/Mental.png")}
            title="Mental health"
          />
          <HomeServicesCard
            icon={require("assets/icons/Mental.png")}
            title="Neurology"
          />
          <HomeServicesCard
            icon={require("assets/icons/eyes.png")}
            title="Neurology"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
