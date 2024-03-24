import React from "react";
import {
  View,
  Text,
  Image,
  Button,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import NavBar from "../components/NavBar"; // asigurați-vă că calea este corectă

const ProfileScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.profileImage}
        source={require("../assets/imagini/imagine_2024-03-13_134544554-removebg-preview.png")} // înlocuiește cu calea către imaginea de profil
      />
      <View>
        <Text style={styles.username}>Username</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate("EditProfileScreen")}
          style={[styles.button, styles.buttonOutline]}
        >
          <Text style={styles.buttonOutlineText}>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("SettingsScreen")}
          style={[styles.button, styles.buttonOutline]}
        >
          <Text style={styles.buttonOutlineText}>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("HelpScreen")}
          style={[styles.button, styles.buttonOutline]}
        >
          <Text style={styles.buttonOutlineText}>Help</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Intro3")}
          style={[styles.button, styles.buttonOutline]}
        >
          <Text style={styles.buttonOutlineText}>Log Out</Text>
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
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  username: {
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
    backgroundColor: "#0782F9",
    width: "50%",
    paddingVertical: 15, // Adjusted padding to increase button height
    paddingHorizontal: 50, // Adjusted padding to increase button width
    borderRadius: 40,
    alignItems: "center",
    marginBottom: 40, // Adjusted marginBottom for spacing between buttons
  },
  buttonOutline: {
    backgroundColor: "white",
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

export default ProfileScreen;
