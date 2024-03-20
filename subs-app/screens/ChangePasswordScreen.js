import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const ChangePasswordScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Change password</Text>
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        placeholder="Email"
      />
      <TextInput
        style={styles.input}
        onChangeText={setNewPassword}
        value={newPassword}
        placeholder="New password"
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        onChangeText={setConfirmPassword}
        value={confirmPassword}
        placeholder="Confirm password"
        secureTextEntry
      />
      <Button
        style={{ ...styles.butonul, marginBottom: 20 }}
        title="Change password"
        onPress={() => {
          /* Implementează funcționalitatea de schimbare a parolei aici */
        }}
      />
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
  input: {
    width: "100%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    backgroundColor: "#fff",
    paddingHorizontal: 10,
  },
  butonul: { marginBottom: 20 },
});

export default ChangePasswordScreen;
