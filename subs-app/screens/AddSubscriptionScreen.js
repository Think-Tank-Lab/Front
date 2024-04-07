import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Button,
  StyleSheet,
} from "react-native";
import NavBar from "../components/NavBar";
import { ref, set } from "firebase/database";
import { Picker } from "@react-native-picker/picker";

import { db } from "../firebase.js";

const AddSubscriptionScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [paymentCycle, setPaymentCycle] = useState("");
  const [paymentDay, setPaymentDay] = useState("");

  function AddSubscription() {
    set(ref(db, "subscriptions/" + name), {
      name: name,
      category: category,
      price: parseFloat(price),
      paymentCycle: paymentCycle,
      paymentDay: parseInt(paymentDay),
    })
      .then(() => {
        alert("data updated");
      })
      .catch((error) => {
        alert(error);
      });
  }

  return (
    <View style={styles.container}>
      {/* Fixed Header */}
      <View style={styles.fixedHeader}>
        <Text style={styles.title}>Add subscription</Text>
      </View>

      {/* Form Inputs */}
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={(name) => {
          setName(name);
        }}
        placeholder="Name"
      />
      <Picker
        style={styles.input}
        selectedValue={category}
        onValueChange={(itemValue) => setCategory(itemValue)}
      >
        <Picker.Item label="Select category" value="" />
        <Picker.Item label="Movies" value="Movies" />
        <Picker.Item label="Sports" value="Sports" />
        <Picker.Item label="Music" value="Music" />
      </Picker>
      <TextInput
        style={styles.input}
        value={price}
        onChangeText={(price) => {
          setPrice(price);
        }}
        placeholder="Price"
        keyboardType="numeric"
      />
      <Picker
        style={styles.input}
        selectedValue={paymentCycle}
        onValueChange={(itemValue) => setPaymentCycle(itemValue)}
      >
        <Picker.Item label="Select payment cycle" value="" />
        <Picker.Item label="Weekly" value="Weekly" />
        <Picker.Item label="Bi-weekly" value="Bi-weekly" />
        <Picker.Item label="Monthly" value="Monthly" />
        <Picker.Item label="Every 3 months" value="Every 3 months" />
        <Picker.Item label="Every 6 months" value="Every 6 months" />
        <Picker.Item label="Yearly" value="Yearly" />
      </Picker>
      <TextInput
        style={styles.input}
        value={paymentDay}
        onChangeText={(paymentDay) => {
          setPaymentDay(paymentDay);
        }}
        placeholder="Payment Day"
        keyboardType="numeric"
      />

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={AddSubscription} style={styles.button}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("ExpenseScreen")}
          style={[styles.button, styles.buttonOutline]}
        >
          <Text style={styles.buttonOutlineText}>Cancel</Text>
        </TouchableOpacity>
      </View>

      {/* NavBar */}
      <NavBar navigation={navigation} />
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
    paddingTop: 150,
  },
  fixedHeader: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: "#fff",
    zIndex: 1,
    elevation: 5,
    padding: 10,
    borderColor: "#000",
    borderWidth: 1,
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 30,
    marginBottom: 20,
  },
  input: {
    width: "90%",
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 20,
    marginTop: 5,
  },
  buttonContainer: {
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  button: {
    backgroundColor: "#FFF100",
    width: "100%",
    padding: 10,
    borderRadius: 40,
    alignItems: "center",
  },
  buttonOutline: {
    backgroundColor: "white",
    marginTop: 5,
    borderColor: "#FFF100",
    borderWidth: 2,
  },
  buttonText: {
    color: "black",
    fontWeight: "700",
    fontSize: 16,
  },
  buttonOutlineText: {
    color: "black",
    fontWeight: "700",
    fontSize: 16,
  },
});

export default AddSubscriptionScreen;
