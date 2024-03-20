import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import NavBar from "../components/NavBar"; // asigurați-vă că calea este corectă

const ExpenseScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Total expenses</Text>
        <Text style={styles.subtitle}>100 RON monthly</Text>
        <View style={styles.expenseItem}>
          <Text style={styles.expenseTitle}>Netflix</Text>
          <Text style={styles.expenseSubtitle}>50RON/month 3 days left</Text>
        </View>
        {/* Adaugă aici alte elemente de cheltuieli */}
      </View>
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
  content: {
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
  },
  expenseItem: {
    width: "100%",
    marginBottom: 10,
  },
  expenseTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  expenseSubtitle: {
    fontSize: 16,
  },
});

export default ExpenseScreen;
