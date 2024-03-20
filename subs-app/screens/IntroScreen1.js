import React from "react";
import { View, Text, Button, StyleSheet, Image } from "react-native";
const IntroScreen1 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Button title="Skip" onPress={() => navigation.navigate("Intro3")} />
      </View>
      <View style={styles.content}>
        <Image
          source={require("../assets/imagini/imagine_2024-03-13_134544554-removebg-preview.png")} // înlocuiește cu calea către imaginea ta
          style={styles.image}
        />
        <Text style={styles.title}>Ecranul 1</Text>
        <Text style={styles.text}>
          Salutare, acesta este ecranul 1 de bun venit.
        </Text>
      </View>
      <View style={styles.footer}>
        <Button title="Next" onPress={() => navigation.navigate("Intro2")} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  headerText: {
    fontSize: 16,
    textAlign: "right",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 400, // ajustează dimensiunile conform necesităților tale
    height: 200, // ajustează dimensiunile conform necesităților tale
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  text: {
    fontSize: 16,
    textAlign: "center",
  },
  footer: {
    width: "100%",
  },
});

export default IntroScreen1;
