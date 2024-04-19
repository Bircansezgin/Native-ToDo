import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Home";
import CreateToDo from "./CreateToDo";
import { ToDoProvider } from "../context/ToDoContex";
import Login from "./Login";

const Stack = createNativeStackNavigator();

export const Navigator = () => {
  return (
    <ToDoProvider>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerTitle: "To Do List",
            headerShadowVisible: false,
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="Create"
          component={CreateToDo}
          options={{
            headerTitle: "Create To Do",
            headerShadowVisible: false,
          }}
        />

        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerTitle: "Login",
            headerShadowVisible: false,
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerTransparent: true,
            headerLargeTitle: true,
          }}
        />
      </Stack.Navigator>
    </ToDoProvider>
  );
};
