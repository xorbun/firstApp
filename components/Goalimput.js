import { View, TextInput, Button, Keyboard, Modal, Image } from "react-native";
import { StyleSheet } from "react-native";
import { useState } from "react";
const Goalimput = (props) => {
  const [input, setinput] = useState("");
  const goalImputHandler = (enteredText) => {
    setinput(enteredText);
  };

  const addGoalHandler = () => {
    props.onAddGoal(input);
    setinput("");
  };
  const hideKeyboard = () => {
    Keyboard.dismiss();
  };
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
       
        <TextInput
          style={styles.TextInput}
          placeholder="risultati"
          onChangeText={goalImputHandler}
          value={input}
        />
        <View style={styles.bottomOrientation}>
          <View style={styles.buttonimput}>
            <Button
              color={"white"}
              title="aggiungi"
              onPress={() => {
                addGoalHandler(), hideKeyboard();
              }}
            />
          </View>
          <View style={styles.deleteBottom}>
            <Button title="chiudi" color={"white"} onPress={props.onclose} />
          </View>
        </View>
        <Image
          style={styles.image}
          source={require("../assets/images/daily-tasks-2578976-2147145.png")}
        />
      </View>
    </Modal>
  );
};
export default Goalimput;
const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
    backgroundColor: "#311b6b",
  },

  TextInput: {
    borderWidth: 1,
    borderColor: "black",
    width: "100%",
    padding: 16,
    backgroundColor: "#e4d0ff",
  },
  buttonimput: {
    backgroundColor: "#5e0acc",
    borderRadius: 6,
    marginBottom: 2,
    marginRight: 5,
    width: "40%",
  },
  deleteBottom:{
    backgroundColor: "#f31282",
    borderRadius: 6,
    marginBottom: 2,
    marginRight: 5,
    width: "40%",
  },
  bottomOrientation: {
    flexDirection: "row",
    marginTop: 20,
  },
  image: {
    width: 300,
    height: 300,
    margin: 20,
  },
});
