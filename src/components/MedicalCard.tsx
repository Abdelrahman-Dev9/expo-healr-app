import { View, Text } from "react-native";
import React from "react";

interface Props {
  visitType: string;
  data: string;
  doctor: string;
  docSpecialist: string;
  note: string;
  btn: string;
}
const MedicalCard = ({ visitType, data, doctor, docSpecialist, note, btn }) => {
  return (
    <View className="bg-[#EFF6FFB2] rounded-[24px] mt-8 p-4">
      <View className="flex-row justify-between">
        <Text className="border border-[#3A95D2] p-2 rounded-full">
          {visitType}
        </Text>
        <Text>{data}</Text>
      </View>
      <Text className="mt-4 tex-[16px]">
        <Text className="font-semibold">{doctor}</Text>({docSpecialist})
      </Text>
      <Text className="mt-4 text-[14px] text-[#666666]">{note}</Text>
      <View className="flex-row">
        <Text className="border border-[#1A1A1A] p-2 rounded-full mt-4">
          {btn}
        </Text>
      </View>
    </View>
  );
};

export default MedicalCard;
