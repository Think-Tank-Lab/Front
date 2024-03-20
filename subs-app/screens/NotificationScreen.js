import React from "react";
import { View, Text, StyleSheet } from "react-native";
import NavBar from "../components/NavBar"; // asigurați-vă că calea este corectă

const NotificationScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Previous payments</Text>
      {/* Adaugă aici notificările tale */}
      <NavBar navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between", // modificat aici
    alignItems: "center",
    padding: 0,
    marginTop: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
});

export default NotificationScreen;
