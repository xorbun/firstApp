import { View,Button,StyleSheet } from "react-native"
const DeleteAll=(props)=>{
   return(
    <View style={styles.delete}>
        <View style={styles.deleteButton}>
          <Button
            color="white"
            onPress={props.input}
            title="cancella lista"
          />
        </View>
      </View>
   )
}
export default DeleteAll

const styles=StyleSheet.create({
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
})