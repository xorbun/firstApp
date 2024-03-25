import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [input, setinput] = useState("");
  const [reachedGoals, setreachedGoals] = useState([]);
  const goalImputHandler = (enteredText) => {
    setinput(enteredText);
  };
  const addGoalHandler = () => {
    setreachedGoals((currentReachedGoals) => [...currentReachedGoals, input]);
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
      <View>
        {reachedGoals && reachedGoals.length > 0 ? (
          reachedGoals.map((goal, index) => (
            <View style={styles.goalElement} key={index}>
              <Text style={styles.goalText}>{goal}</Text>
            </View>
          ))
        ) : (
          <Text>Non ci sono elementi</Text>
        )}
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
    flex: 0.3,
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

  goalElement: {
    padding: 8,
    margin: 8,
    backgroundColor: "purple",
  },
  goalText: {
    color: "white",
  },
  delete: {
    flex: 0.2,
  },
});
