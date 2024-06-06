import { StyleSheet, Text, TextInput, View, Button } from "react-native";
import { useState, useEffect } from "react";
import uuid from "react-native-uuid";

export default function AddScreen({ route, navigation }) {
  const { setTodos } = route.params;
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  function handleAddTodo() {
    const newTodo = {
      id: uuid.v4(),
      title: title,
      desc: desc,
      date: new Date().toLocaleDateString(),
      isDone: false,
    };

    setTodos((prevTodos) => [...prevTodos, newTodo]);
    navigation.navigate("Home");
  }

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <Button onPress={handleAddTodo} title="Done" />,
    });
  }, [navigation, title, desc]);

  return (
    <View style={styles.container}>
      <Text>Create New Todo</Text>
      <TextInput
        style={styles.titleinput}
        keyboardType="default"
        onChangeText={(text) => setTitle(text)}
        value={title}
        placeholder="Title"
      />
      <TextInput
        style={styles.descinput}
        keyboardType="default"
        multiline={true}
        numberOfLines={4}
        onChangeText={(text) => setDesc(text)}
        value={desc}
        placeholder="Description"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  descinput: {
    height: 100,
    width: 200,
    borderWidth: 1,
    borderRadius: 5,
    margin: 20,
    padding: 10,
  },
  titleinput: {
    width: 200,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },
});
