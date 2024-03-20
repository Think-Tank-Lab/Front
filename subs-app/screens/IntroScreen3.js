import React from "react";
import { View, Text, Button, StyleSheet, Image } from "react-native";

const IntroScreen3 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}></View>
      <View style={styles.content}>
        <Image
          source={require("../assets/imagini/Captura_de_ecran_2024-03-13_134324-removebg-preview.png")} // înlocuiește cu calea către imaginea ta
          style={styles.image}
        />
        <Text style={styles.title}>Ecranul 3</Text>
        <Text style={styles.text}>
          Salutare, acesta este ecranul 3 de bun venit.
        </Text>
      </View>
      <View style={styles.footer}>
        <Button title="Login" onPress={() => navigation.navigate("Login")} />
        <Button
          title="Create account"
          onPress={() => navigation.navigate("SignUp")}
        />
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
    flexDirection: "row",
    justifyContent: "space-between",
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

export default IntroScreen3;
