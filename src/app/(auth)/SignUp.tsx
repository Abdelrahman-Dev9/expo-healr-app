import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// ------------------
// ZOD VALIDATION
// ------------------
const signUpSchema = z
  .object({
    nationalNumber: z
      .string()
      .length(14, "National number must be 14 digits")
      .regex(/^\d+$/, "Only digits allowed"),

    phone: z
      .string()
      .length(11, "Phone number must be 11 digits")
      .regex(/^\d+$/, "Only digits allowed"),

    email: z.string().email("Enter a valid email"),

    password: z.string().min(6, "Password must be at least 6 characters"),

    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type SignUpType = z.infer<typeof signUpSchema>;

const SignUp = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpType>({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = (data: SignUpType) => {
    console.log("Form submitted:", data);
    router.push("/(auth)/Login");
  };

  return (
    <SafeAreaView className="mx-4 mt-10">
      <View className="flex items-center">
        <Text className="font-semibold text-[27px]">Create an account</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* NATIONAL ID */}
        <View className="mt-10">
          <Text className="text-[18px]">National number</Text>

          <Controller
            control={control}
            name="nationalNumber"
            render={({ field: { value, onChange } }) => (
              <TextInput
                placeholder="Enter your 14-digit national number."
                placeholderTextColor="#B3B3B3"
                value={value}
                onChangeText={onChange}
                className={`px-2 py-3 border-2 rounded-[10px]
                  ${
                    errors.nationalNumber
                      ? "border-red-500 "
                      : "border-[#2673A6] mt-3"
                  }`}
              />
            )}
          />

          {errors.nationalNumber && (
            <Text className="mt-1 text-red-500">
              {errors.nationalNumber.message}
            </Text>
          )}
        </View>

        {/* PHONE */}
        <View className="mt-10">
          <Text className="text-[18px]">Phone number</Text>

          <Controller
            control={control}
            name="phone"
            render={({ field: { value, onChange } }) => (
              <TextInput
                placeholder="eg. 01222222222"
                placeholderTextColor="#B3B3B3"
                value={value}
                onChangeText={onChange}
                className={`px-2 py-3 border-2 rounded-[10px]
                  ${
                    errors.phone ? "border-red-500 " : "border-[#2673A6] mt-3"
                  }`}
              />
            )}
          />

          {errors.phone && (
            <Text className="mt-1 text-red-500">{errors.phone.message}</Text>
          )}
        </View>

        {/* EMAIL */}
        <View className="mt-10">
          <Text className="text-[18px]">Email address</Text>

          <Controller
            control={control}
            name="email"
            render={({ field: { value, onChange } }) => (
              <TextInput
                placeholder="Enter your email"
                placeholderTextColor="#B3B3B3"
                value={value}
                onChangeText={onChange}
                className={`px-2 py-3 border-2 rounded-[10px]
                  ${
                    errors.email ? "border-red-500 " : "border-[#2673A6] mt-3"
                  }`}
              />
            )}
          />

          {errors.email && (
            <Text className="mt-1 text-red-500">{errors.email.message}</Text>
          )}
        </View>

        {/* PASSWORD */}
        <View className="mt-10">
          <Text className="text-[18px]">Password</Text>

          <View className="flex-row justify-between">
            <Controller
              control={control}
              name="password"
              render={({ field: { value, onChange } }) => (
                <TextInput
                  placeholder="•••••••••••••••"
                  placeholderTextColor="#B3B3B3"
                  secureTextEntry
                  value={value}
                  onChangeText={onChange}
                  className={`px-2 py-3 border-2 rounded-[10px] w-full
                    ${
                      errors.password
                        ? "border-red-500 "
                        : "border-[#2673A6] mt-3"
                    }`}
                />
              )}
            />

            <Image
              source={require("assets/icons/eye.png")}
              className="absolute right-5 bottom-3"
            />
          </View>

          {errors.password && (
            <Text className="mt-1 text-red-500">{errors.password.message}</Text>
          )}
        </View>

        {/* CONFIRM PASSWORD */}
        <View className="mt-10">
          <Text className="text-[18px]">Confirm password</Text>

          <View className="flex-row justify-between">
            <Controller
              control={control}
              name="confirmPassword"
              render={({ field: { value, onChange } }) => (
                <TextInput
                  placeholder="•••••••••••••••"
                  placeholderTextColor="#B3B3B3"
                  secureTextEntry
                  value={value}
                  onChangeText={onChange}
                  className={`px-2 py-3 border-2 rounded-[10px] w-full
                    ${
                      errors.confirmPassword
                        ? "border-red-500 "
                        : "border-[#2673A6] mt-3"
                    }`}
                />
              )}
            />

            <Image
              source={require("assets/icons/eye.png")}
              className="absolute right-5 bottom-3"
            />
          </View>

          {errors.confirmPassword && (
            <Text className="mt-1 text-red-500">
              {errors.confirmPassword.message}
            </Text>
          )}
        </View>

        {/* SUBMIT BUTTON */}
        <TouchableOpacity
          className="bg-[#3A95D2] rounded-full p-4 items-center mt-10"
          onPress={handleSubmit(onSubmit)}
        >
          <Text className="font-semibold text-[18px] text-white">Sign up</Text>
        </TouchableOpacity>

        {/* FOOTER */}
        <View className="flex-row items-center justify-center mt-5">
          <Text className="text-[16px]">Already have an account?</Text>
          <TouchableOpacity onPress={() => router.push("/(auth)/Login")}>
            <Text className="text-[#2673A6] font-semibold "> Sign in </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
