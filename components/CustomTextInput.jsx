import * as React from 'react';
import { TextInput } from 'react-native-paper';
import { View, Text, StyleSheet } from "react-native";

const CustomTextInput = ({style, label, placeholder, returnText, ...props}) => {
  const [text, setText] = React.useState('');

  const limit = 20;

  const handleTextChange = (inputText) => {
    if (inputText.length <= limit) {
      setText(inputText);
      returnText(inputText);
    }
  };

  return (
    <TextInput
      mode="outlined"
      theme={{ colors: { primary: text.length === limit ? "red" : "black" } }}
      label={label}
      placeholder={placeholder}
      value={text}
      onChangeText={handleTextChange}
      right={<TextInput.Affix text={`${limit}/${text.length}`} />}
      style={style}
      {...props}
    />
  );
};

export default CustomTextInput;