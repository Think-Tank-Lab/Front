import React from "react";
import { View, Text, Button, StyleSheet, Image } from "react-native";

const GetStartedScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Aici ar trebui să adăugați ilustrația */}
      <Image
        source={require("../assets/imagini/Captura_de_ecran_2024-03-13_134324-removebg-preview.png")} // înlocuiește cu calea către imaginea ta
        style={styles.image}
      />
      <Text style={styles.title}>Lorem ipsum dolor sit amet, consectetur</Text>
      <Button
        title="Get started"
        onPress={() => navigation.navigate("ExpenseScreen")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#ADD8E6",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
});

export default GetStartedScreen;
