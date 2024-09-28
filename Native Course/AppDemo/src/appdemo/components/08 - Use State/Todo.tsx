import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

interface Todo {
  id: string;
  text: string;
}

interface TodoItemProps {
  item: Todo;
}
const Todo = () => {
  const [text, setText] = useState<string>("");
  const [todo, setTodo] = useState<Todo[]>([]);

  const addTodo = () => {
    if (text.trim()) {
      setTodo([...todo, { id: Date.now().toString(), text }]);
      setText("");
    }
  };

  const handleSubmit = () => {
    addTodo();
  };

  const removeTodo = (id: string) => {
    setTodo(todo.filter((todo) => todo.id !== id));
  };

  const renderTodo = ({ item }: TodoItemProps) => {
    return (
      <TouchableOpacity
        onPress={() => removeTodo(item.id)}
        style={styles.todoItem}
      >
        <Text style={styles.todoText}>{item.text}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Todo List</Text>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={setText}
        placeholder="Add a new Task"
        onSubmitEditing={handleSubmit}
        returnKeyType="done"
      />
      <Button title="Add Task" onPress={addTodo} />
      <FlatList
        data={todo}
        keyExtractor={(item) => item.id}
        renderItem={renderTodo}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  todoItem: {
    padding: 15,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  todoText: {
    fontSize: 18,
  },
});
export default Todo;
