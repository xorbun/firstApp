import { StyleSheet, View, Text, Pressable } from "react-native";

const Goalitem = (props) => {
  return (
    <View style={styles.goalElement}>
      <Pressable
        android_ripple={{ color: "gray" }}
        onPress={props.deletedItem.bind(this, props.id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
};
export default Goalitem;

const styles = StyleSheet.create({
  goalElement: {
    padding: 8,
    margin: 8,
    backgroundColor: "#5e0acc",
    borderRadius: 6,
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    color: "white",
  },
});
