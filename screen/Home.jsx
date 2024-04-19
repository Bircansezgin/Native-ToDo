    import {
      View,
      Text,
      FlatList,
      StyleSheet,
      Button,
      TouchableOpacity,
    } from "react-native";
    import React, { useContext } from "react";
    import ToDoContext from "../context/ToDoContex";
    import { useNavigation } from "@react-navigation/native";
    import CustomButton  from "../components/CustomButton";
    import ToDoList  from "../components/ToDoList";
    import { SafeAreaView } from "react-native-safe-area-context";
    import SearchBar from "../components/SearchBar";
    import SegmentButton from "../components/SegmentButton";


    export default function Home() {
      const { data, addToDo, deleteToDo} = useContext(ToDoContext);
      const navigation = useNavigation();

  
      const handleAddButton = () => {
        navigation.navigate("Create");
      };


      // FUNCTIONAL COMPONENT
      return (

        <View style={styles.container}>

          <View>
          <SegmentButton />
          </View>

          <View>
            <SearchBar />
          </View>

          <FlatList
            data={data}
            keyExtractor={(toDo) => toDo.id.toString()}
            renderItem={({ item }) => (
              <ToDoList 
                title={item.title}
                description={item.description}
                id={item.id}
                deleteReturn={(e) => {
                deleteToDo(e);
              } } />
            )}
          />



    <CustomButton labelStyle={{
            color: "white",
            fontWeight: "bold",
            fontSize: 16,
          }}
            style={styles.CustomButton}
            onPress={handleAddButton}
            buttonTitle={"Add New ToDo"}
          />

        </View>
      );
    }

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: "white",
      },

      addButton: {
        backgroundColor: "blue",
        padding: 10,
        margin: 10,
        borderRadius: 5,
        alignItems: "center",
      },

      newB: {
        backgroundColor: "blue",
        padding: 10,
        margin: 10,
        borderRadius: 5,
        alignItems: "center",
      },

      CustomButton: {
        padding: 5,
        margin: 10,
        marginBottom: 40,
        borderRadius: 5,
        alignItems: "center",
        backgroundColor: "black",
        width: "90%",
      },
    });
