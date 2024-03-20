import React from "react";
import { View, Text, Button, StyleSheet, Image } from "react-native";

const IntroScreen2 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Button title="Skip" onPress={() => navigation.navigate("Intro3")} />
      </View>
      <View style={styles.content}>
        <Image
          source={require("../assets/imagini/Captura_de_ecran_2024-03-13_134250-removebg-preview.png")} // înlocuiește cu calea către imaginea ta
          style={styles.image}
        />
        <Text style={styles.title}>Ecranul 2</Text>
        <Text style={styles.text}>
          Salutare, acesta este ecranul 2 de bun venit.
        </Text>
      </View>
      <View style={styles.footer}>
        <Button title="Next" onPress={() => navigation.navigate("Intro3")} />
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
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 400, // ajustează dimensiunile conform necesităților tale
    height: 400, // ajustează dimensiunile conform necesităților tale
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

export default IntroScreen2;
