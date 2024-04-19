import { View, Text, StyleSheet, style } from "react-native";
import React, {useState, useEffect, useContext} from "react";
import CustomTextInput from "../components/CustomTextInput";
import CustomButton from "../components/CustomButton";
import Banner from "../components/Banner";
import Tooltip from "../components/Tooltip";
import Loading from "../components/Loading";
import toDoContex from "../context/ToDoContex";
import ToDoContext from "../context/ToDoContex";
import { useNavigation } from "@react-navigation/native";


export default function CreateToDo() {
  const [header, setheader] = useState("");
  const [description, setdescription] = useState("");
  
  const {setLoading, addToDo } = useContext(toDoContex)
  const navigator = useNavigation();

  return (
    <View style={styles.container}>

    

      <View style={styles.headerView}>
        <Banner />
      </View>

      <View style={styles.HeaderTextView}>
        <CustomTextInput
          style={styles.HeaderTextInput}
          label={"Header"}
          description={"Enter here Header"}
          returnText={(e) => setheader(e)}
        />
      </View>

      <View style={styles.DescriptionTextView}>
        <CustomTextInput
          style={styles.HeaderTextInput}
          label={"Description"}
          placeholder={"Enter here Description"}
          returnText={(e) => setdescription(e)}
        />
        <Text></Text>
      </View>

      <View>
        <CustomButton
          title={"Okey"}
          labelStyle={{
            color: "white",
            fontWeight: "bold",
            fontSize: 16,
          }}

          style={styles.CustomButton}
          buttonTitle={"Create ToDo"}
          onPress={() => {

            if (header === "" || description === "") {
              return alert("Please fill all the fields");
            }

            setLoading(true);
            setTimeout(() => {
              setLoading(false);
              addToDo(header, description);
            }, 2000);

          }}
        />
      </View>



    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },

  headerView: {
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },

  headerText: {
    fontSize: 20,
    fontWeight: "bold",
  },

  HeaderTextView: {
    alignItems: "center",
  },

  DescriptionTextView: {
    marginTop: 10,
    alignItems: "center",
  },

  HeaderTextInput: {
    width: "90%",
  },

  CustomButton: {
    padding: 5,
    margin: 10,
    marginBottom: 40,
    borderRadius: 5,
    alignItems: "center",
    backgroundColor: "black",
  },
});
