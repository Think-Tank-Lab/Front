import React from "react";
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
const IntroScreen1 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.buttonContainerSkip}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Intro3")}
            style={styles.buttonSkip}
          >
            <Text style={styles.buttonText}>Skip</Text>
          </TouchableOpacity>
        </View>
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
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Intro2")}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        </View>
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
  buttonContainerSkip: {
    width: "20%", // Adjust the width as needed
    justifyContent: "center",
    alignItems: "flex-end",
    marginTop: 20,
  },
  buttonSkip: {
    backgroundColor: "#0782F9",
    width: "100%", // Adjust the width as needed
    paddingVertical: 10, // Adjust the padding as needed
    paddingHorizontal: 20, // Adjust the padding as needed
    borderRadius: 40,
    alignItems: "center",
  },
  buttonContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  button: {
    backgroundColor: "#0782F9",
    width: "100%",
    padding: 15,
    borderRadius: 40,
    alignItems: "center",
  },
  buttonOutline: {
    backgroundColor: "white",
    marginTop: 5,
    borderColor: "#0782F9",
    borderWidth: 2,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
  buttonOutlineText: {
    color: "#0782F9",
    fontWeight: "700",
    fontSize: 16,
  },
});

export default IntroScreen1;
