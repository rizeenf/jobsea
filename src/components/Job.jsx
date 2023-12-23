import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ship from "../../assets/ship.png";

const Job = ({ item }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <TouchableOpacity style={styles.wrapper}>
        <View style={styles.companyInfo}>
          <Image
            source={{
              uri: item.employer_logo,
            }}
            style={styles.img}
          />
          <View>
            <Text style={styles.mainTitle}>{item.job_title}</Text>
            <Text style={styles.title}>{item.employer_name}</Text>
          </View>
        </View>
        <View style={styles.jobDesc}>
          <Text numberOfLines={6}>{item.job_description}</Text>
        </View>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    borderWidth: 0.5,
    borderColor: "lightgrey",
    borderRadius: 5,
    padding: 10,
  },
  wrapper: {
    flexDirection: "column",
    gap: 10,
  },
  companyInfo: {
    flexDirection: "row",
    gap: 10,
    width: "85%",
  },
  mainTitle: {
    fontSize: 18,
  },
  title: {
    fontSize: 12,
  },
  img: {
    width: 50,
    height: 50,
  },
  jobDesc: { width: "100%" },
});

export default Job;
