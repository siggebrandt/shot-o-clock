import "./App.css";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-web";

export default function App() {
  return (
    <>
      <Text>Shot´oClock</Text>
      <View style={styles.container}>
        <View style={style1.container}>
          <Text style={style1.text}>hej</Text>
        </View>
        <View style={style1.container}>
          <Text style={style1.text}>hej</Text>
        </View>
        <View style={style1.container}>
          <Text style={style1.text}>hej</Text>
        </View>
        <View style={style1.container}>
          <Text style={style1.text}>hej</Text>
        </View>
        <View style={style1.container}>
          <Text style={style1.text}>hej</Text>
        </View>
        <View style={style1.container}>
          <Text style={style1.text}>hej</Text>
        </View>
        <View style={style1.container}>
          <Text style={style1.text}>hej</Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "auto",
    backgroundColor: "black",
    height: 1000,
    width: 450,
  },
});

const style1 = StyleSheet.create({
  container: {
    backgroundColor: "black",
    height: 100,
    width: 350,
    padding: 30,
    margin: 15,
    borderRadius: 30,
    borderWidth: 10,
    borderColor: "pink",
    shadowColor: "red",
    shadowOffset: { width: 5, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
  },
  text: {
    color: "green",
    fontSize: 50,
    textAlign: "center",
  },
});
