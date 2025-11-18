import { View, Text, Image, TextInput, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchCard from "@/components/SearchCard";

const Search = () => {
  return (
    <SafeAreaView className="mx-4 mt-5">
      <Text className="text-[24px] font-semibold">Search for a doctor</Text>
      <View className="flex-row justify-between p-3 mt-4 border border-[#999999] rounded-[15px]">
        <View className="flex-row gap-4">
          <Image source={require("assets/icons/search.png")} />
          <TextInput placeholder="Search your records" />
        </View>
        <Image source={require("assets/icons/mic.png")} />
      </View>
      <Text className="mt-4 text-[15px] font-semibold">
        Search by specialties
      </Text>
      <ScrollView>
        <View>
          <SearchCard
            icon={require("assets/icons/Otolaryngology.png")}
            title="Otolaryngology (ENT) (Ear, Nose & Throat)"
          />
          <SearchCard
            icon={require("assets/icons/Dentistry.png")}
            title="Dental Care (General Dentistry)"
          />
          <SearchCard
            icon={require("assets/icons/Digestive.png")}
            title="Gastroenterology (Digestive System)"
          />
          <SearchCard
            icon={require("assets/icons/eyes.png")}
            title="Ophthalmology (Eyes)"
          />
          <SearchCard
            icon={require("assets/icons/hair.png")}
            title="Dermatology (Skin, Hair & Nails)"
          />
          <SearchCard
            icon={require("assets/icons/Lung.png")}
            title="Pulmonology (Lungs & Respiratory System)"
          />
          <SearchCard
            icon={require("assets/icons/Otolaryngology.png")}
            title="Psychiatry (Mental Health)"
          />
          <SearchCard
            icon={require("assets/icons/Kidneys.png")}
            title="Nephrology (Kidneys)"
          />
          <SearchCard
            icon={require("assets/icons/bone.png")}
            title="Orthopedics (Bones & Joints)"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Search;
