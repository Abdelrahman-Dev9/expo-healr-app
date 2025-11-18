import { View, Text, Image, ScrollView, Modal } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import NotificationsCard from "@/components/NotificationsCard";

const Notifications = () => {
  const [notifications] = useState(true);
  return (
    <SafeAreaView className="mt-5 ">
      <View className="flex-row justify-between mx-4">
        <Text className="text-[30px] font-semibold">Notifications</Text>
        <Image source={require("assets/icons/more-vertical.png")} />
      </View>
      {notifications ? (
        <View>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View>
              <View className="mx-4 mt-5">
                <Text className="text-gray-400 text-[18px] font-semibold">
                  Today
                </Text>
              </View>
              <View className="mt-5">
                <NotificationsCard
                  icon={require("assets/icons/pill.png")}
                  title="Medicine reminder"
                  description1="Take 1 capsule"
                  description2="Doxycycline (100 mg)"
                  description3=" 12:00 PM."
                  data="5m ago."
                  bgColor="#EFF6FF"
                  bgIcon="#ACD2EC"
                />
                <NotificationsCard
                  icon={require("assets/icons/medicine-02.png")}
                  title="New medicine added"
                  description1="You have a new prescription from "
                  description2="Dr. Rami, (Neurologist)"
                  description3=" , View details"
                  data="1h ago."
                  bgIcon="#ACD2EC"
                />
                <NotificationsCard
                  icon={require("assets/icons/checkmark.png")}
                  title="Medicine reminder"
                  description1="Take 1 capsule"
                  description2="Doxycycline (100 mg)"
                  description3=" 12:00 PM."
                  data="5m ago."
                  bgColor="#EFF6FF"
                  bgIcon="#BBF7D0"
                />
                <NotificationsCard
                  icon={require("assets/icons/reminder.png")}
                  title="Clinic appointment alert"
                  description1="Your appointment at the Neurology  "
                  description2="Clinic is on at March 15th"
                  description3="4:00PM."
                  data="5m ago."
                  bgColor="#EFF6FF"
                  bgIcon="#ACD2EC"
                />
              </View>
            </View>
            <View>
              <View className="mx-4 mt-5">
                <Text className="text-gray-400 text-[18px] font-semibold">
                  Yesterday
                </Text>
              </View>
              <View className="mt-5">
                <NotificationsCard
                  icon={require("assets/icons/pill.png")}
                  title="Medicine reminder"
                  description1="Take 1 capsule"
                  description2="Doxycycline (100 mg)"
                  description3=" 12:00 PM."
                  data="5m ago."
                  bgColor="#EFF6FF"
                  bgIcon="#ACD2EC"
                />
                <NotificationsCard
                  icon={require("assets/icons/medicine-02.png")}
                  title="New medicine added"
                  description1="You have a new prescription from "
                  description2="Dr. Rami, (Neurologist)"
                  description3=" , View details"
                  data="1h ago."
                  bgIcon="#ACD2EC"
                />
                <NotificationsCard
                  icon={require("assets/icons/checkmark.png")}
                  title="Medicine reminder"
                  description1="Take 1 capsule"
                  description2="Doxycycline (100 mg)"
                  description3=" 12:00 PM."
                  data="5m ago."
                  bgColor="#EFF6FF"
                  bgIcon="#BBF7D0"
                />
                <NotificationsCard
                  icon={require("assets/icons/reminder.png")}
                  title="Clinic appointment alert"
                  description1="Your appointment at the Neurology  "
                  description2="Clinic is on at March 15th"
                  description3="4:00PM."
                  data="5m ago."
                  bgColor="#EFF6FF"
                  bgIcon="#ACD2EC"
                />
              </View>
            </View>
          </ScrollView>
        </View>
      ) : (
        <View className="items-center justify-center mx-4 mt-[150px]">
          <Image source={require("assets/icons/big-notification-icon.png")} />
          <Text className="text-[18px] font-semibold mt-2">
            No new notifications right now.
          </Text>
          <Text className="text-[14px] text-[#666666] text-center mt-2">
            You’re all caught up! We’ll notify you when there’s {"\n"} something
            new.
          </Text>
        </View>
      )}
    </SafeAreaView>
  );
};

export default Notifications;
