import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchDoctorFilter from "@/components/SearchDoctorFilter";

const FilterByField = () => {
  const [selected, setSelected] = useState(true);
  return (
    <SafeAreaView className="mx-4 mt-5">
      <View className="flex-row justify-between p-3  border border-[#999999] rounded-[15px]">
        <View className="flex-row gap-4">
          <Image source={require("assets/icons/search.png")} />
          <TextInput placeholder="Search your records" />
        </View>
        <Image source={require("assets/icons/mic.png")} />
      </View>

      <View className="flex-row gap-x-4">
        <TouchableOpacity onPress={() => setSelected(!selected)}>
          <Text
            className={`text-[16px] font-semibold mt-4 ${
              selected
                ? "bg-[#3A95D2] text-[#F8F8F8]"
                : " border border-[#B3B3B3]"
            }   rounded-full p-4`}
          >
            Otolaryngology (ENT)
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelected(!selected)}>
          <Text
            className={`text-[16px] font-semibold mt-4 ${
              selected
                ? " border border-[#B3B3B3]"
                : "bg-[#3A95D2] text-[#F8F8F8]"
            }   rounded-full p-4`}
          >
            Otolaryngology (ENT)
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <SearchDoctorFilter />
        <SearchDoctorFilter />
        <SearchDoctorFilter />
        <SearchDoctorFilter />
      </ScrollView>
    </SafeAreaView>
  );
};

export default FilterByField;
