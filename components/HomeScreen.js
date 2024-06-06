import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen({ navigation, todos, setTodos }) {
  const currentTodos = todos.filter((todo) => !todo.isDone);
  const completedTodos = todos.filter((todo) => todo.isDone);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Current Todos</Text>
      <FlatList
        style={styles.todolist}
        data={currentTodos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Details", { todo: item, setTodos })
              }
              style={styles.item}
            >
              <Text style={styles.todotitle}>{item.title}</Text>
            </TouchableOpacity>
          </View>
        )}
      />
      <Text style={styles.title}>Completed Todos</Text>
      <FlatList
        style={styles.todolist}
        data={completedTodos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Details", { todo: item, setTodos })
            }
            style={styles.item}
          >
            <Text style={styles.todotitle}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </ScrollView>
  );
}

const width80 = "80%";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  item: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 15,
    width: width80,
    alignSelf: "center",
    margin: 5,
  },
  todotitle: {
    fontSize: 24,
    alignSelf: "center",
  },
  title: {
    fontSize: 34,
    alignSelf: "center",
    margin: 10,
  },
});
