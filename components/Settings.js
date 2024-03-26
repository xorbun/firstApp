import { useState } from "react";
import { View, FlatList, StyleSheet, Button, Image } from "react-native";
import Goalimput from "./Goalimput";

import Goalitem from "./Goalitems";
const Settings = () => {
  const [reachedGoals, setreachedGoals] = useState([]);
  const [modalShow, setmodalShow] = useState(false);
  const handleModalShow = () => {
    setmodalShow(true);
  };
  const closeModal = () => {
    setmodalShow(false);
  };
  const addGoalHandler = (input) => {
    setreachedGoals((currentReachedGoals) => [
      ...currentReachedGoals,
      { text: input, id: Math.random().toString() },
    ]);
  };

  const deleter = (id) => {
    setreachedGoals((currentReachedGoals) => {
      return currentReachedGoals.filter((goal) => goal.id !== id);
    });
  };
  return (
    <View style={styles.appContainer}>
      <View style={styles.buttonimput}>
        <Button
          title="aggiungi traguardo"
          color="white"
          onPress={handleModalShow}
        />
      </View>
      {
        <Goalimput
          visible={modalShow}
          onAddGoal={addGoalHandler}
          onclose={closeModal}
        />
      }
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
      <Image
        style={styles.image}
        source={require("../assets/images/4072714.png")}
      />
    </View>
  );
};
export default Settings;
const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 12,
    //backgroundColor: "#F8F8FF",
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
  buttonimput: {
    backgroundColor: "#5e0acc",
    borderRadius: 6,
    marginBottom: 2,
    marginTop: 15,
    marginLeft: "30%",
    
    marginRight: 5,
    width: "40%",
  },
  TextInput: {
    borderWidth: 1,
    borderColor: "black",
    width: "70%",
    marginRight: 8,
    padding: 8,
    backgroundColor: "white",
  },

  goalContainer: {
    flex: 0.6,
  },
  image: {
    justifyContent: "center",
    alignItems: "center",
    width: 300,
    height: 300,
  },
});
