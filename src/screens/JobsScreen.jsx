import React from "react";
import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";

const Jobs = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>JOBS </Text>
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

export default Jobs;
