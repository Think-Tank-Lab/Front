import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import NavBar from "../components/NavBar"; // Make sure the path is correct

const HelpScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.fixedContent}>
        <Text style={styles.title}>Help</Text>
      </View>
      <View style={styles.secondContent}>
        <TouchableOpacity
          style={[styles.button, styles.buttonOutline]}
          onPress={() => navigation.navigate("ContactSupportScreen")}
        >
          <Text style={styles.buttonOutlineText}>Contact Support</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.buttonOutline]}
          onPress={() => navigation.navigate("FAQScreen")}
        >
          <Text style={styles.buttonOutlineText}>FAQ</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.buttonOutline]}
          onPress={() => navigation.navigate("SendFeedbackScreen")}
        >
          <Text style={styles.buttonOutlineText}>Send Feedback</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomNav}>
        <NavBar navigation={navigation} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 35,
    borderTopWidth: 1,
    borderColor: "#000",
  },
  fixedContent: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: "#fff",
    zIndex: 1,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  secondContent: {
    marginTop: 150, // Adjust as needed
    alignItems: "center",
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  button: {
    width: "100%",
    paddingVertical: 20,
    paddingHorizontal: 40,
    marginBottom: 40,
    backgroundColor: "#0782F9",
    borderRadius: 40,
    borderWidth: 2,
    borderColor: "#0782F9",
  },
  buttonOutline: {
    backgroundColor: "white",
  },
  buttonOutlineText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "#0782F9",
  },
  bottomNav: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default HelpScreen;
