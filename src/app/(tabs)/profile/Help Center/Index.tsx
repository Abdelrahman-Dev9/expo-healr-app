import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import FaqsCard from "@/components/FaqsCard";
import ContactUs from "@/components/ContactUs";

const Index = () => {
  const [contact, setContact] = useState(false);
  const [faqs, setFaqs] = useState(true);
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
        <Text className="ml-[36%] font-bold text-[20px]">Help Center</Text>
      </View>
      <View
        className={`flex-row mt-10 justify-evenly pb-4  ${
          contact
            ? "border-b-2 border-[#3A95D2]"
            : faqs
            ? "border-b-2 border-[#3A95D2]"
            : "border-b border-[#B3B3B3]"
        }
       
        `}
      >
        <TouchableOpacity
          onPress={() => {
            setFaqs(!faqs), setContact(false);
          }}
        >
          <Text
            className={`text-[16px] font-semibold ${
              faqs ? "text-[#3A95D2]" : ""
            }`}
          >
            FAQs
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setContact(!contact), setFaqs(false);
          }}
        >
          <Text
            className={`text-[16px] font-semibold ${
              contact ? "text-[#3A95D2]" : ""
            }`}
          >
            Contact us
          </Text>
        </TouchableOpacity>
      </View>

      {faqs ? (
        <ScrollView showsVerticalScrollIndicator={false} className=" mr-[10px]">
          <FaqsCard
            title="What is healr Chatbot, and how does it work?"
            description="The chatbot analyzes the symptoms that the user writes and suggests
          potential diseases based on those symptoms. It also directs the user
          to the appropriate medical specialty that he should consult."
          />
          <FaqsCard
            title="Can I reschedule or cancel an appointment?"
            description="Yes, you can easily reschedule or cancel appointments through the platform. Just go to your bookings, select the appointment, and make the necessary changes."
          />
          <FaqsCard
            title="Is healr Chatbot a replacement for a doctor?"
            description="Yes, you can easily reschedule or cancel appointments through the platform. Just go to your bookings, select the appointment, and make the necessary changes."
          />
          <FaqsCard
            title="What is healr Chatbot, and how does it work?"
            description="Yes, you can easily reschedule or cancel appointments through the platform. Just go to your bookings, select the appointment, and make the necessary changes."
          />
          <FaqsCard
            title="What is healr Chatbot, and how does it work?"
            description="Yes, you can easily reschedule or cancel appointments through the platform. Just go to your bookings, select the appointment, and make the necessary changes."
          />
        </ScrollView>
      ) : (
        <>
          <ContactUs
            icon={require("assets/icons/customer-service (1).png")}
            title="Customer Service"
          />
          <ContactUs
            icon={require("assets/icons/Email.png")}
            title="Email us"
          />
          <ContactUs
            icon={require("assets/icons/facebook.png")}
            title="Facebook"
          />
          <ContactUs icon={require("assets/icons/x.png")} title="X" />
          <ContactUs
            icon={require("assets/icons/instagram.png")}
            title="Instagram"
          />
        </>
      )}
    </SafeAreaView>
  );
};

export default Index;
