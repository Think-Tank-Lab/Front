import React from "react";
import { View, Text, Image, Button, StyleSheet } from "react-native";
import NavBar from "../components/NavBar"; // asigurați-vă că calea este corectă

const ProfileScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.profileImage}
        source={require("../assets/imagini/imagine_2024-03-13_134544554-removebg-preview.png")} // înlocuiește cu calea către imaginea de profil
      />
      <Text style={styles.name}>Name</Text>
      <Button
        title="Edit profile"
        onPress={() => navigation.navigate("EditProfile")}
      />
      <Button
        title="Settings"
        onPress={() => navigation.navigate("Settings")}
      />
      <Button title="Help" onPress={() => navigation.navigate("Help")} />
      <Button
        title="Log out"
        onPress={() => {
          /* Implementează funcționalitatea de deconectare aici */
        }}
      />
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
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
});

export default ProfileScreen;
