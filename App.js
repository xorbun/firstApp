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
  const deleteAllGoals=()=>{
    setreachedGoals("")
  }
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
      <View style={styles.goals}>
        {reachedGoals ? (
        reachedGoals.map((goal, index) => (
          <Text key={index}>{goal}</Text>
        ))):''}
      </View>
      <View>
        <Button style={styles.delete} onPress={deleteAllGoals} title="cancella lista"/>
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
  goals: {
    flex: 0.6,
  },
  delete:{
    flex:0.2
  }

});
