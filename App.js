import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import HomeScreen from "./components/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState } from "react";
import AddScreen from "./components/AddScreen";
import DetailsScreen from "./components/DetailsScreen";

const Stack = createNativeStackNavigator();

const testTodo = { id: 1, title: "Handla", desc: "Handla mat", isDone: false };

export default function App() {
  const [todos, setTodos] = useState([testTodo]);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          options={({ navigation }) => ({
            title: "My Todos",
            headerRight: () => (
              <Button
                title="+"
                onPress={() => navigation.navigate("CreateTodo", { setTodos })}
              />
            ),
          })}
        >
          {(props) => (
            <HomeScreen {...props} todos={todos} setTodos={setTodos} />
          )}
        </Stack.Screen>
        <Stack.Screen
          name="CreateTodo"
          component={AddScreen}
          options={{ title: "Add new todo" }}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{ title: "Details" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
