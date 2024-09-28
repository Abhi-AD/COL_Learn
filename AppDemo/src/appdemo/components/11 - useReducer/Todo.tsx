import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React, { useReducer, useState } from "react";

interface Todo {
  id: string;
  text: string;
}

interface State {
  todos: Todo[];
}

interface AddTodoAction {
  type: "ADD_TODO";
  payload: string;
}

interface RemoveTodoAction {
  type: "REMOVE_TODO";
  payload: string;
}
type Action = AddTodoAction | RemoveTodoAction;
const initialState: State = { todos: [] };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        todos: [
          ...state.todos,
          { id: Date.now().toString(), text: action.payload },
        ],
      };
    case "REMOVE_TODO":
      return {
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    default:
      return state;
  }
};

const Todo = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [inputValue, setInputValue] = useState<string>("");

  const handleADDTODO = () => {
    if (inputValue.trim()) {
      dispatch({ type: "ADD_TODO", payload: inputValue });
      setInputValue("");
    }
  };
  const handleREMOVETODO = (id: string) => {
    dispatch({ type: "REMOVE_TODO", payload: id });
  };
  return (
    <View style={styles.conatiner}>
      <TextInput
        placeholder="Enter a Todo"
        value={inputValue}
        onChangeText={setInputValue}
        style={styles.input}
      />
      <Button title="ADD TODO" onPress={handleADDTODO} />
      <FlatList
        data={state.todos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.todoItem}>
            <Text style={styles.todoText}>{item.text}</Text>
            <TouchableOpacity onPress={() => handleREMOVETODO(item.id)}>
              <Text style={styles.removeButton}>Remove</Text>
            </TouchableOpacity>
          </View>
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  conatiner: {
    padding: 20,
    justifyContent: "center",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 6,
  },
  todoItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  todoText: {
    fontSize: 16,
  },
  removeButton: {
    color: "red",
  },
});

export default Todo;
