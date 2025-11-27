import { View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// ------------------
// ZOD VALIDATION
// ------------------
const loginSchema = z.object({
  email: z.string().email("Enter a valid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type LoginType = z.infer<typeof loginSchema>;

const Login = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginType>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginType) => {
    console.log("Login data: ", data);
    router.push("/(tabs)/Home");
  };

  return (
    <SafeAreaView className="mx-4 mt-10">
      <View className="flex items-center">
        <Text className="font-semibold text-[27px]">Sign in</Text>
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
              placeholderTextColor={"#B3B3B3"}
              value={value}
              onChangeText={onChange}
              className={`px-2 py-3 mt-3 border-2 rounded-[10px] 
                ${errors.email ? "border-red-500" : "border-[#2673A6]"}`}
            />
          )}
        />
        {errors.email && (
          <Text className="mt-1 text-red-500">{errors.email.message}</Text>
        )}
      </View>

      {/* PASSWORD */}
      <View className="mt-10">
        <View className="flex-row justify-between">
          <Text className="text-[18px]">Password</Text>
          <TouchableOpacity
            onPress={() =>
              router.push("/(auth)/forget-password/ForgetPassword")
            }
          >
            <Text className="text-[14px] text-[#666666]">Forgot password?</Text>
          </TouchableOpacity>
        </View>

        <View className="flex-row justify-between">
          <Controller
            control={control}
            name="password"
            render={({ field: { value, onChange } }) => (
              <TextInput
                placeholder="•••••••••••••••"
                placeholderTextColor={"#B3B3B3"}
                secureTextEntry
                value={value}
                onChangeText={onChange}
                className={`px-2 py-3 mt-3 border-2 rounded-[10px] w-full
                  ${errors.password ? "border-red-500" : "border-[#2673A6]"}`}
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

      {/* SIGN IN BUTTON */}
      <TouchableOpacity
        className="bg-[#3A95D2] rounded-full p-4 items-center mt-10"
        onPress={handleSubmit(onSubmit)}
      >
        <Text className="font-bold text-[18px] text-white">Sign in</Text>
      </TouchableOpacity>

      {/* OR DIVIDER */}
      <View className="flex-row items-center justify-center gap-2 m-8">
        <Text className="w-[15%] h-[1px] bg-[#000000]" />
        <Text className="text-[15px] font-semibold text-[#1A1A1A]">Or</Text>
        <Text className="w-[15%] h-[1px] bg-[#000000]" />
      </View>

      {/* NATIONAL ID BUTTON */}
      <View className="flex-row justify-between">
        <Image
          source={require("assets/icons/id.png")}
          className="absolute left-[60px] top-4"
        />
        <TouchableOpacity className="items-center p-4  border-2 rounded-[15px] border-[#3A95D2] w-full">
          <Text className="font-bold text-[18px] text-[#3A95D2] ">
            Sign in with National ID
          </Text>
        </TouchableOpacity>
      </View>

      {/* FOOTER */}
      <View className="flex-row justify-center gap-2 mt-6">
        <Text className="text-[16px] text-[#666666]">New Here?</Text>
        <TouchableOpacity onPress={() => router.push("/(auth)/SignUp")}>
          <Text className="text-[16px] text-[#2673A6] font-semibold">
            Create an Account
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;
