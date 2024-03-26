import { View, TextInput, Button, Keyboard } from "react-native";
import { StyleSheet } from "react-native";
import { useState } from "react";
const Goalimput = (props) => {
  const [input, setinput] = useState("");
  const goalImputHandler = (enteredText) => {
    setinput(enteredText);
  };
  const addGoalHandler = () => {
    props.onAddGoal(input);
    setinput('');
  };
  const hideKeyboard = () => {
    Keyboard.dismiss();
  };
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.TextInput}
        placeholder="risultati"
        onChangeText={goalImputHandler}
        value={input}
      />
      <View style={styles.buttonimput}>
        <Button
          color={"white"}
          title="aggiungi"
          onPress={() => {
            addGoalHandler(), hideKeyboard();
          }}
        />
      </View>
    </View>
  );
};
export default Goalimput;
const styles = StyleSheet.create({
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
    backgroundColor: "white",
  },
  buttonimput: {
    backgroundColor: "#1E90FF",
    borderRadius: 6,
  },
});
