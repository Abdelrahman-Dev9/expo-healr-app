import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Button,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

const DoctorInformation = () => {
  const [visibility, setVisibility] = useState(false);
  const [daySelected, setDaySelected] = useState(true);
  const [timeSelected, setTimeSelected] = useState(true);
  const [appointmentType, setAppointmentType] = useState(true);

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
      <View className="mt-5">
        <View className="flex-row gap-4 border-b border-[#CCCCCC] pb-4">
          <Image
            source={require("assets/images/doctor-man.png")}
            className="rounded-full w-[80px] h-[80px] bg-[#D5E9F6]"
            resizeMode="contain"
          />
          <View className="justify-center gap-2">
            <Text className="text-[20px] font-semibold">Dr. Benjamin Reed</Text>
            <Text className="text-[16px] text-[#666666]">Dentist</Text>
            <View className="flex-row gap-2">
              <Image
                source={require("assets/icons/location-06.png")}
                className="w-5 h-5"
                resizeMode="contain"
              />
              <Text className="text-[14px]">
                Ismailia, Suez Canal University Hospital
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View className="flex-row justify-between mt-5">
        <View className="items-center">
          <View className="p-4 bg-[#D5E9F6] rounded-full">
            <Image source={require("assets/icons/user-multiple-02.png")} />
          </View>
          <Text className="text-[16px] text-[#3A95D2] text-center mt-2 font-semibold">
            1,200+
          </Text>
          <Text className="text-[16px] text-[#666666] mt-2">Patients</Text>
        </View>
        <View className="items-center">
          <View className="p-4 bg-[#D5E9F6] rounded-full">
            <Image source={require("assets/icons/work-history.png")} />
          </View>
          <Text className="text-[16px] text-[#3A95D2] text-center mt-2 font-semibold">
            8+
          </Text>
          <Text className="text-[16px] text-[#666666] mt-2">Years Exp.</Text>
        </View>
        <View className="items-center">
          <View className="p-4 bg-[#D5E9F6] rounded-full">
            <Image source={require("assets/icons/star (1).png")} />
          </View>
          <Text className="text-[16px] text-[#3A95D2] text-center mt-2 font-semibold">
            4.5+
          </Text>
          <Text className="text-[16px] text-[#666666] mt-2">rating</Text>
        </View>
        <View className="items-center">
          <View className="p-4 bg-[#D5E9F6] rounded-full">
            <Image source={require("assets/icons/comment-01.png")} />
          </View>
          <Text className="text-[16px] text-[#3A95D2] text-center mt-2 font-semibold">
            850
          </Text>
          <Text className="text-[16px] text-[#666666] mt-2">review</Text>
        </View>
      </View>

      {visibility ? (
        <View>
          <View className="mt-4">
            <Text className="text-[18px] font-semibold">About Doctor:</Text>
            <View className="flex-row">
              <Text
                className="text-[14px] text-[#666666] mt-4"
                style={{ lineHeight: 20 }}
              >
                Lorem ipsum dolor sit amet consectetur. Consequat tristique diam
                elementum praesent nisi mollis non. Ante vitae dapibus tellus
                scelerisque laoreet volutpat urna diam.
              </Text>
              <Text className="text-[14px] text-[#3A95D2] font-semibold border-b border-[#3A95D2] absolute bottom-0 right-10 ">
                Read more
              </Text>
            </View>
          </View>
          <View className="mt-8">
            <Text className="text-[20px] font-semibold border-b border-[#CCCCCC] pb-4">
              Working hours:
            </Text>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View className="flex-row justify-between mt-6">
                <Text className="text-[14px] text-[#666666]">Saturday</Text>
                <Text className="text-[14px] font-semibold">
                  09:18PM - 06:09PM
                </Text>
              </View>
              <View className="flex-row justify-between mt-3">
                <Text className="text-[14px] text-[#666666]">Saturday</Text>
                <Text className="text-[14px] font-semibold">
                  09:18PM - 06:09PM
                </Text>
              </View>
              <View className="flex-row justify-between mt-3">
                <Text className="text-[14px] text-[#666666]">Saturday</Text>
                <Text className="text-[14px] font-semibold">
                  09:18PM - 06:09PM
                </Text>
              </View>
              <View className="flex-row justify-between mt-3">
                <Text className="text-[14px] text-[#666666]">Saturday</Text>
                <Text className="text-[14px] font-semibold">
                  09:18PM - 06:09PM
                </Text>
              </View>
              <View className="flex-row justify-between mt-3">
                <Text className="text-[14px] text-[#666666]">Saturday</Text>
                <Text className="text-[14px] font-semibold">
                  09:18PM - 06:09PM
                </Text>
              </View>
              <View className="flex-row justify-between mt-3">
                <Text className="text-[14px] text-[#666666]">Saturday</Text>
                <Text className="text-[14px] font-semibold">
                  09:18PM - 06:09PM
                </Text>
              </View>
              <View className="flex-row justify-between mt-3">
                <Text className="text-[14px] text-[#666666]">Saturday</Text>
                <Text className="text-[14px] font-semibold">
                  09:18PM - 06:09PM
                </Text>
              </View>
              <View className="flex-row justify-between mt-3">
                <Text className="text-[14px] text-[#666666]">Saturday</Text>
                <Text className="text-[14px] font-semibold">
                  09:18PM - 06:09PM
                </Text>
              </View>
            </ScrollView>
          </View>
          <TouchableOpacity
            className="bg-[#3A95D2] rounded-[15px] p-4 items-center mt-10"
            onPress={() => router.push("/(tabs)/Home")}
          >
            <Text className="font-bold text-[18px] text-white">
              Book Appointment
            </Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View className="mt-8">
          <Text className="text-[14px] text-[#666666]">Book Appointment</Text>
          <Text className="text-[18px] font-semibold mt-6">Day</Text>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            className="mt-5"
          >
            <View
              className={`rounded-[25px] py-4 px-6 ${
                daySelected ? "bg-[#3A95D2]" : "border border-[#CCCCCC]"
              } mr-5`}
            >
              <TouchableOpacity onPress={() => setDaySelected(!daySelected)}>
                <Text className="text-[14px] text-[#666666]">Today</Text>
                <Text className="text-[14px] font-semibold">28 Apr</Text>
              </TouchableOpacity>
            </View>
            <View
              className={`rounded-[25px] py-4 px-6  ${
                daySelected ? "border border-[#CCCCCC]" : "bg-[#3A95D2]"
              } mr-5`}
            >
              <TouchableOpacity onPress={() => setDaySelected(!daySelected)}>
                <Text className="text-[14px] text-[#666666]">Today</Text>
                <Text className="text-[14px] font-semibold">28 Apr</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
          <Text className="text-[18px] font-semibold mt-6">Time</Text>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            className="mt-5"
          >
            <View
              className={`rounded-[25px] py-4 px-6 ${
                timeSelected ? "bg-[#3A95D2]" : "border border-[#CCCCCC]"
              } mr-5`}
            >
              <TouchableOpacity onPress={() => setTimeSelected(!timeSelected)}>
                <Text
                  className={`text-[14px] ${
                    timeSelected ? "text-[white]" : ""
                  }`}
                >
                  10:00 AM
                </Text>
              </TouchableOpacity>
            </View>
            <View
              className={`rounded-[25px] py-4 px-6  ${
                timeSelected ? "border border-[#CCCCCC]" : "bg-[#3A95D2]"
              } mr-5`}
            >
              <TouchableOpacity onPress={() => setTimeSelected(!timeSelected)}>
                <Text
                  className={`text-[14px] ${
                    timeSelected ? "" : "text-[white]"
                  }`}
                >
                  10:00 AM
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>

          <View className="flex-row mt-10 ">
            <View
              className={`rounded-[25px] py-4 px-6 ${
                appointmentType ? "bg-[#3A95D2]" : "border border-[#CCCCCC]"
              } mr-5`}
            >
              <TouchableOpacity
                onPress={() => setAppointmentType(!appointmentType)}
              >
                <Text
                  className={`text-[14px] ${
                    appointmentType ? "text-[white]" : ""
                  }`}
                >
                  In Person visit
                </Text>
              </TouchableOpacity>
            </View>
            <View
              className={`rounded-[25px] py-4 px-6  ${
                appointmentType ? "border border-[#CCCCCC]" : "bg-[#3A95D2]"
              } mr-5`}
            >
              <TouchableOpacity
                onPress={() => setAppointmentType(!appointmentType)}
              >
                <Text
                  className={`text-[14px] ${
                    appointmentType ? "" : "text-[white]"
                  }`}
                >
                  Voice Call
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity
            className="bg-[#3A95D2] rounded-[15px] p-4 items-center mt-[90px]"
            onPress={() => router.push("/(tabs)/home/PatientDetails")}
          >
            <Text className="font-bold text-[18px] text-white">
              Make Appointment
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
};

export default DoctorInformation;
