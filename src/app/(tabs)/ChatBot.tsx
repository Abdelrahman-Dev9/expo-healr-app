import { View, Text, TextInput, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const ChatBot = () => {
  return (
    <SafeAreaView className="items-center justify-center flex-1 mx-4 ">
      <View className="absolute bottom-1">
        <Text className="text-center text-[16px] font-semibold">
          Meet healr bot, Your caregiver
        </Text>
        <Text className="mt-4 text-center text-[14px] text-[#666666]">
          healr cares for you—learn about booking appointments, describe how you
          feel to give you health advice
        </Text>
        <View className="flex-row flex-wrap gap-x-4">
          <Text className="mt-4 text-center text-[14px] bg-[#3A95D2] rounded-full px-4 py-2 text-white font-semibold">
            Book appointment
          </Text>
          <Text className="mt-4 text-center text-[14px] bg-[#3A95D2] rounded-full px-4 py-2 text-white font-semibold">
            Height and weight?
          </Text>
          <Text className="mt-4 text-center text-[14px] bg-[#3A95D2] rounded-full px-4 py-2 text-white font-semibold">
            Do you smoke?
          </Text>
          <Text className="mt-4 text-center text-[14px] bg-[#3A95D2] rounded-full px-4 py-2 text-white font-semibold">
            Feeling stressed?
          </Text>
          <Text className="mt-4 text-center text-[14px] bg-[#3A95D2] rounded-full px-4 py-2 text-white font-semibold">
            Add your health insurance
          </Text>
        </View>
        <View className="flex-row items-center mt-4 ">
          <TextInput
            placeholder="Any symptoms bothering you?"
            placeholderTextColor="#B3B3B3"
            className="p-4 border border-[#CCCCCC] w-full rounded-full"
          />
          <Image
            source={require("assets/icons/sent.png")}
            className="absolute justify-center p-1 bg-[#3A95D2] rounded-full right-2 w-[30px] h-[30px]"
            resizeMode="contain"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ChatBot;
