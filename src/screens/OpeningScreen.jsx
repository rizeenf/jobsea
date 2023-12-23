import React from "react";
import ship from "../../assets/ship.png";
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  SafeAreaView,
  StatusBar,
  TouchableHighlight,
  ScrollView,
} from "react-native";
import { useState } from "react";

const OpeningScreen = ({ navigation }) => {
  const [text, setText] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView aria-disabled automaticallyAdjustKeyboardInsets={true}>
        <StatusBar />
        <View style={styles.wrapper}>
          <View>
            <Text style={styles.title}>
              Jobsea <Text style={styles.circle}>.</Text>
            </Text>
            <Text style={styles.subTitle}>Exploring jobs. </Text>
            <Text style={styles.subTitle}>Sailing to success.</Text>
          </View>
          <Image source={ship} style={styles.mainImg} />
        </View>
        <View style={styles.wrapInput}>
          <TextInput
            placeholder="Your name .."
            style={styles.input}
            onChangeText={(newText) => setText(newText)}
            defaultValue={text}
            placeholderTextColor={"#aaa"}
            clearTextOnFocus
            inputMode="text"
          />
          <TouchableHighlight
            style={styles.btn}
            onPress={() => navigation.navigate("Tabs")}
          >
            <Text>Next</Text>
          </TouchableHighlight>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2AAAFA",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
  },
  wrapper: {
    alignItems: "start",
    flexDirection: "column",
  },
  title: {
    fontSize: 60,
    color: "#fff",
    fontWeight: "bold",
  },
  circle: {
    fontSize: 200,
  },
  subTitle: {
    fontSize: 18,
    color: "#fafafa",
  },
  mainImg: {
    width: 300,
    height: 300,
  },
  wrapInput: {
    flexDirection: "column",
    alignItems: "center",
    gap: 25,
  },
  input: {
    justifyContent: "center",
    alignItems: "center",
    fontSize: 20,
    color: "#000",
    backgroundColor: "#fff",
    padding: 15,
    width: 250,
    maxHeight: 60,
    borderRadius: 10,
  },
  btn: {
    alignItems: "center",
    backgroundColor: "#e9ebfd",
    width: 100,
    marginVertical: 5,
    padding: 10,
    borderRadius: 25,
  },
});

export default OpeningScreen;
