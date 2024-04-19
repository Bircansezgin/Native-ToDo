import * as React from "react";
import { Button } from "react-native-paper";
import { View, Text, StyleSheet } from "react-native";

const CustomButton = ({ style, labelStyle, buttonTitle ,...props }) => (
  <Button
    icon="send"
    mode="contained-tonal"
    onPress={() => console.log("sd")}
    style={[styles.buttonStyle, style]} 
    labelStyle={labelStyle}
    {...props}
  >
  {buttonTitle}
  </Button>
);

const styles = StyleSheet.create({
});

export default CustomButton;