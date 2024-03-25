import { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  FlatList,
} from "react-native";

export default function App() {
  const [input, setinput] = useState("");
  const [reachedGoals, setreachedGoals] = useState([]);
  const goalImputHandler = (enteredText) => {
    setinput(enteredText);
  };
  const addGoalHandler = () => {
    setreachedGoals((currentReachedGoals) => [...currentReachedGoals, {text:input, id:Math.random().toString()}]);
  };
  const deleteAllGoals = () => {
    setreachedGoals("");
  };
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.TextInput}
          placeholder="risultati"
          onChangeText={goalImputHandler}
        />
        <Button title="aggiungi" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalContainer}>
        <FlatList
          data={reachedGoals}
          renderItem={(itemData) => {
            return (
              <View style={styles.goalElement} >
                <Text style={styles.goalText}>{itemData.item.text}</Text>
              </View>
            );
          }}
          keyExtractor={(item, index)=>{
            return item.id
          }}
        />
      </View>
      <View>
        <Button
          style={styles.delete}
          onPress={deleteAllGoals}
          title="cancella lista"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 12,
  },
  inputContainer: {
    flex: 0.2,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "black",
    marginBottom: 24,
  },
  TextInput: {
    borderWidth: 1,
    borderColor: "black",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
  goalContainer: {
    flex: 0.7,
  },

  goalElement: {
    padding: 8,
    margin: 8,
    backgroundColor: "#5e0acc",
    borderRadius: 6,
  },
  goalText: {
    color: "white",
  },
  delete: {
    flex: 0.1,
  },
});
