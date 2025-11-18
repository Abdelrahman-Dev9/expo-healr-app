import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

const PrivacyPolicies = () => {
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
        <Text className="ml-[34%] font-bold text-[20px]">Privacy Policy</Text>
      </View>
      <View className="mt-10">
        <Text className="text-[18px] text-[#2673A6] font-semibold">
          AI healr. bot policy
        </Text>
        <Text className="mt-5 text-[#666666]">
          Lorem ipsum dolor sit amet consectetur. Lorem diam nibh metus elit id
          pulvinar in pellentesque. Sociis eu quam sem ornare quam dolor enim
          justo. Ut sit tempor dolor sapien morbi. Diam dignissim condimentum
          curabitur sit tincidunt nullam ac sed.
        </Text>
        <Text className="mt-4 text-[#666666]">
          Lorem ipsum dolor sit amet consectetur. Lorem diam nibh metus elit id
          pulvinar in pellentesque.
        </Text>
      </View>
      <View className="mt-10">
        <Text className="text-[18px] text-[#2673A6] font-semibold">
          Terms & Conditions
        </Text>
        <Text className="mt-5 text-[#666666]">
          Lorem ipsum dolor sit amet consectetur. Faucibus vulputate egestas leo
          quis sit in pellentesque dui ut. Integer mollis enim vitae netus
          ornare dictumst morbi accumsan. Euismod facilisis semper dictum quam
          dictum fermentum congue amet. Quisque cursus habitasse viverra non
          sed. Commodo pellentesque tellus mauris erat. Lectus sed vel
          adipiscing malesuada. Condimentum fermentum purus viverra quam mi
          posuere.
        </Text>
        <Text className="mt-4 text-[#666666]">
          Lorem ipsum dolor sit amet consectetur. Faucibus vulputate egestas leo
          quis sit in pellentesque dui ut. Integer mollis enim vitae netus
          ornare dictumst morbi accumsan. Euismod facilisis semper dictum quam
          dictum fermentum congue amet. Quisque cursus habitasse viverra non
          sed. Commodo pellentesque tellus mauris erat. Lectus sed vel
          adipiscing malesuada. Condimentum fermentum purus viverra quam mi
          posuere.
        </Text>
        <Text className="mt-8 text-[#666666]">
          Lorem ipsum dolor sit amet consectetur. Lorem diam nibh metus elit id
          pulvinar in pellentesque.
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default PrivacyPolicies;
