import React from "react";
import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";
import BottomTab from "../components/BottomTab";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>HOME </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 28,
  },
});

export default HomeScreen;
