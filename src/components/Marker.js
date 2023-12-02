import { StyleSheet } from "react-native";
import { View, Text } from "react-native";

function NumberMarker({number}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{number}</Text>
    </View>
  );
}

export default NumberMarker;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "rgb(119, 197, 226)",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "black",
    fontWeight: "bold",
    fontSize: 15,
  }
})