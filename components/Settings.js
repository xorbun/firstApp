import { useState } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import Goalimput from "./Goalimput";
import DeleteAll from "./DeleteAll";
import Goalitem from "./Goalitems";
const Settings = () => {
  const [reachedGoals, setreachedGoals] = useState([]);

  const addGoalHandler = (input) => {
    setreachedGoals((currentReachedGoals) => [
      ...currentReachedGoals,
      { text: input, id: Math.random().toString() },
    ]);
  };
  const deleteAllGoals = () => {
    setreachedGoals("");
  };
  const deleter = (id) => {
    setreachedGoals((currentReachedGoals) => {
      return currentReachedGoals.filter((goal) => goal.id !== id);
    });
  };
  return (
    <View style={styles.appContainer}>
      <Goalimput onAddGoal={addGoalHandler} />
      <View style={styles.goalContainer}>
        <FlatList
          data={reachedGoals}
          renderItem={(itemData) => {
            return (
              <Goalitem
                text={itemData.item.text}
                deletedItem={deleter}
                id={itemData.item.id}
              />
            );
          }}
          keyExtractor={(item) => {
            return item.id;
          }}
        />
      </View>
      <DeleteAll input={deleteAllGoals} />
    </View>
  );
};
export default Settings;
const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 12,
    backgroundColor: "#F8F8FF",
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
    backgroundColor: "white",
  },
  buttonimput: {
    backgroundColor: "#1E90FF",
    borderRadius: 6,
  },
  goalContainer: {
    flex: 0.6,
  },
});
