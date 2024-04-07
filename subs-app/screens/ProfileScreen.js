import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  Button,
  TouchableOpacity,
  StyleSheet,
  Dimensions, // Import Dimensions from react-native
} from "react-native";
import NavBar from "../components/NavBar";
import { auth } from "../firebase";

const ProfileScreen = ({ navigation }) => {
  const [userEmail, setUserEmail] = useState(""); // State to store user email
  const [emailPrefix, setEmailPrefix] = useState(""); // State to store email prefix

  useEffect(() => {
    // Fetch user data on component mount
    const currentUser = auth.currentUser;
    if (currentUser) {
      setUserEmail(currentUser.email); // Set user email in state

      // Extract email prefix before "@" symbol
      const prefix = currentUser.email.split("@")[0];
      setEmailPrefix(prefix);
    }
  }, []);

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login");
      })
      .catch((error) => alert(error.message));
  };

  const screenWidth = Dimensions.get("window").width; // Get the screen width

  return (
    <View style={styles.container}>
      <Image
        style={styles.profileImage}
        source={require("../assets/imagini/Image_Editor.png")} // înlocuiește cu calea către imaginea de profil
      />
      <View>
        <Text style={styles.email}>{emailPrefix}</Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate("ChangePasswordScreen")}
          style={styles.button} // Set button style for all buttons
        >
          <Text style={styles.buttonText}>Change Password</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("PrivacyScreen")}
        >
          <Text style={styles.buttonText}>Privacy</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("HelpScreen")}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Help</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            handleSignOut();
            navigation.navigate("Intro3");
          }}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Log Out</Text>
        </TouchableOpacity>
      </View>
      <NavBar navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    padding: 0,
    marginTop: 30,
  },
  profileImage: {
    marginTop: 100,
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
    borderColor: "#000",
    borderWidth: 2,
  },
  email: {
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 0,
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20, // Adjusted marginTop for spacing between image and buttons
  },
  button: {
    backgroundColor: "#FFF100",
    paddingVertical: 15, // Adjusted padding to increase button height
    paddingHorizontal: 50, // Adjusted padding to increase button width
    borderRadius: 40,
    alignItems: "center",
    marginBottom: 20, // Adjusted marginBottom for spacing between buttons
    width: Dimensions.get("window").width * 0.7, // Set button width to 70% of screen width
  },
  buttonText: {
    color: "black",
    fontWeight: "700",
    fontSize: 16,
  },
});

export default ProfileScreen;
