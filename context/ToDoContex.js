import React, { useState, useReducer } from "react";
import { View, Text } from "react-native";
import Loading from "../components/Loading";

const ToDoContext = React.createContext();

export const ToDoProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);


  const [toDo, setToDo] = useState([


    { id: 1, title: "React Native", description: "Context Yapisi" },
    { id: 2, title: "TypeScript", description: "Devam dayi" },


  ]);

  const addToDo = (title, description) => {
    setToDo([...toDo, { id: toDo.length + 1, title, description }]);
  }

  const deleteToDo = (id) => {
    setToDo(toDo.filter((item) => item.id !== id));
  }

  return (
    <ToDoContext.Provider value={{data: toDo, addToDo, loading, setLoading, deleteToDo}}>

      {loading && <Loading/>}
      {children}

      
    </ToDoContext.Provider>
  );
};

export default ToDoContext;
