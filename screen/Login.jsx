import { Text, View } from "react-native";
import React, { useState } from "react";
import CustomTextInput from "../components/CustomTextInput";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (

      <View className="bg-white">
        <View>
          <Text>Email</Text>
        </View>

        <View>
          <CustomTextInput
            label={"Email"}
            description={"Enter here Header"}
            returnText={(e) => setEmail(e)}
          />
        </View>

        <View>
          <Text>Password</Text>
        </View>

        <View>
          <CustomTextInput
            label={"Password"}
            description={"Enter here Header"}
            returnText={(e) => setPassword(e)}
          />
        </View>
      </View>

  );
}

//const styles = StyleSheet.create({});
