import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

const NavBar = ({ navigation }) => {
  return (
    <View style={styles.navBar}>
      <TouchableOpacity onPress={() => navigation.navigate("ExpenseScreen")}>
        <Text style={styles.navItem}>Home </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("NotificationScreen")}
      >
        <Text style={styles.navItem}>Notifications </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("AddSubscriptionScreen")}
      >
        <Text style={styles.navItem}>Add Expense </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("StatsScreen")}>
        <Text style={styles.navItem}>Stats </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("ProfileScreen")}>
        <Text style={styles.navItem}>Profile </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#ADD8E6",
    padding: 20,
    width: "100%",
  },
  navItem: {
    fontSize: 16,
  },
});

export default NavBar;
