import React, { useState } from "react";
import {
  Button,
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { DataJobs } from "../utils/jobs";
import Job from "../components/Job";

const Jobs = () => {
  const [selectedId, setSelectedId] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.search}>
        <TextInput
          style={styles.inputSearch}
          placeholder="Senior Developer.."
          value=""
          placeholderTextColor={"lightgrey"}
        />
        <TouchableOpacity style={styles.find}>
          <Text style={styles.textFind}>Find</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <FlatList
          data={DataJobs}
          renderItem={({ item }) => (
            <Job item={item} onPress={() => setSelectedId(item.job_id)} />
          )}
          keyExtractor={(item) => item.job_id}
          scrollEnabled={false}
        />
      </ScrollView>
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
  search: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 5,
    margin: 10,
  },
  inputSearch: {
    flex: 3,
    borderWidth: 0.5,
    borderRadius: 5,
    width: 100,
    paddingVertical: 10,
  },
  find: {
    flex: 1,
    backgroundColor: "darkblue",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  textFind: {
    color: "#fff",
    fontSize: 16,
  },
});

export default Jobs;
