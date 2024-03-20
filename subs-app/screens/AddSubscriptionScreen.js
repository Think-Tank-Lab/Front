import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import NavBar from "../components/NavBar"; // asigurați-vă că calea este corectă

const AddSubscriptionScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [paymentCycle, setPaymentCycle] = useState("");
  const [nextPayment, setNextPayment] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add subscription</Text>
      <TextInput
        style={styles.input}
        onChangeText={setName}
        value={name}
        placeholder="Name"
      />
      <TextInput
        style={styles.input}
        onChangeText={setCategory}
        value={category}
        placeholder="Category"
      />
      <TextInput
        style={styles.input}
        onChangeText={setPrice}
        value={price}
        placeholder="Price"
      />
      <TextInput
        style={styles.input}
        onChangeText={setPaymentCycle}
        value={paymentCycle}
        placeholder="Payment cycle"
      />
      <TextInput
        style={styles.input}
        onChangeText={setNextPayment}
        value={nextPayment}
        placeholder="Next Payment"
      />
      <Button
        title="Save"
        onPress={() => {
          /* Implementează funcționalitatea de salvare aici */
        }}
      />
      <Button title="Cancel" onPress={() => navigation.goBack()} />
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
});

export default AddSubscriptionScreen;
