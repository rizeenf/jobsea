import React from "react";
import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";

const ActivityScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>ACTIVITY </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 28,
  },
});

export default ActivityScreen;
