import { StyleSheet, Text, View, Button } from "react-native";
import { useEffect } from "react";

export default function DetailsScreen({ route, navigation }) {
  const { todo, setTodos } = route.params;

  useEffect(() => {
    navigation.setOptions({
      title: todo.title,
    });
  }, [todo.title]);

  function handleComplete() {
    todo.isDone = true;

    setTodos((todos) =>
      todos.map((todo) => (todo.id === todo.id ? todo : todo))
    );

    navigation.navigate("Home");
  }

  function handleUndo() {
    todo.isDone = false;

    setTodos((prevTodos) =>
      prevTodos.map((todo) => (todo.id === todo.id ? todo : todo))
    );

    navigation.navigate("Home");
  }

  function handleDelete() {
    setTodos((prevTodos) =>
      prevTodos.filter((prevTodo) => prevTodo.id !== todo.id)
    );

    navigation.navigate("Home");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Description</Text>
      <Text style={styles.desc}>{todo.desc}</Text>
      <Text style={styles.date}>Added: {todo.date}</Text>
      <Button
        title={todo.isDone ? "Undo" : "Complete"}
        onPress={todo.isDone ? handleUndo : handleComplete}
      />
      <Button title="Delete" onPress={handleDelete} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 32,
    fontWeight: 700,
    margin: 20,
    alignSelf: "center",
  },
  desc: {
    fontsize: 24,
    alignSelf: "center",
    margin: 20,
  },
  date: {
    fontsize: 16,
    alignSelf: "center",
    margin: 20,
  },
});
