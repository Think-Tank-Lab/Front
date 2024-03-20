import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome</Text>
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        placeholder="Email"
      />
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        placeholder="Password"
        secureTextEntry
      />
      <Button
        title="Login"
        onPress={() => navigation.navigate("GetStartedScreen")}
      />
      {/* <Text style={styles.forgotPassword} onPress={() => navigation.navigate("ChangePasswordScreen")}>Forgotten password?</Text> */}
      <TouchableOpacity
        onPress={() => navigation.navigate("ChangePasswordScreen")}
      >
        <Text style={styles.forgotPassword}>Forgotten password?</Text>
      </TouchableOpacity>
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
  welcome: {
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
  forgotPassword: {
    marginTop: 15,
    color: "#000",
  },
});

export default LoginScreen;
