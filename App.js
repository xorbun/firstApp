import { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  FlatList,
  Keyboard,
} from "react-native";
import Goalitem from "./components/Goalitems";

export default function App() {
  const [input, setinput] = useState("");
  const [reachedGoals, setreachedGoals] = useState([]);
  const goalImputHandler = (enteredText) => {
    setinput(enteredText);
  };
  const addGoalHandler = () => {
    setreachedGoals((currentReachedGoals) => [
      ...currentReachedGoals,
      { text: input, id: Math.random().toString() },
    ]);
  };
  const deleteAllGoals = () => {
    setreachedGoals("");
  };
  const hideKeyboard=()=>{
    Keyboard.dismiss()
  }
  return (
    
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.TextInput}
          placeholder="risultati"
          onChangeText={goalImputHandler}
        />
        <View style={styles.buttonimput}>
        <Button color={'white'} title="aggiungi" onPress={()=>{addGoalHandler(),hideKeyboard()}} />
        </View>
      </View>
      <View style={styles.goalContainer}>
        <FlatList
          data={reachedGoals}
          renderItem={(itemData) => {
            return (
              <Goalitem text={itemData.item.text}/>
            );
          }}
          keyExtractor={(item) => {
            return item.id;
          }}
        />
      </View>
      <View style={styles.delete}>
        <View style={styles.deleteButton}>
          <Button color="white" onPress={deleteAllGoals} title="cancella lista" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 12,
    backgroundColor:'#F8F8FF'
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
    backgroundColor:'white'
  },
  buttonimput:{
    backgroundColor:'#1E90FF',
    borderRadius:6
  },
  goalContainer: {
    flex: 0.6,
  },


  delete: {
    flex: 0.2,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  deleteButton: {
    backgroundColor: "red",
    color: "white",
    width: 160,
    borderRadius: 6,
  },
  
});
