import { StyleSheet, View,Text,Pressable } from "react-native"

const Goalitem=(props)=>{
return (
  <Pressable onPress={props.deletedItem.bind(this,props.id)}>
    <View style={styles.goalElement}>
      <Text style={styles.goalText}>{props.text}</Text>
    </View>
  </Pressable>
);
}
export default Goalitem

const styles=StyleSheet.create({
    goalElement: {
        padding: 8,
        margin: 8,
        backgroundColor: "#5e0acc",
        borderRadius: 6,
      },
      goalText: {
        color: "white",
      },
});