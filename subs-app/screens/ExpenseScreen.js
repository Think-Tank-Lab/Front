import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import NavBar from "../components/NavBar"; // Make sure the path is correct

const expenses = [
  { title: "Netflix", cost: 10, daysLeft: 5 },
  { title: "Spotify", cost: 5, daysLeft: 10 },
  { title: "Gym Membership", cost: 30, daysLeft: 15 },
  { title: "Internet Subscription", cost: 20, daysLeft: 7 },
  { title: "Mobile Phone Plan", cost: 25, daysLeft: 3 },
  { title: "Electricity Bill", cost: 50, daysLeft: 25 },
  { title: "Water Bill", cost: 15, daysLeft: 20 },
  { title: "Rent", cost: 500, daysLeft: 10 },
  { title: "Groceries", cost: 50, daysLeft: 2 },
  { title: "Car Insurance", cost: 100, daysLeft: 30 },
  // Add more expenses as needed
];

// Funcție pentru a trunchia numele dacă depășește lungimea dorită
const truncateName = (name, maxLength) => {
  if (name.length > maxLength) {
    return name.substring(0, maxLength) + "...    ";
  }
  return name;
};

// Calculate total expenses for the month
const ExpenseScreen = ({ navigation }) => {
  const totalExpenses = expenses.reduce(
    (total, expense) => total + expense.cost,
    0
  );

  return (
    <View style={styles.container}>
      <View style={styles.fixedContent}>
        <Text style={styles.title}>Total Expenses </Text>
        <Text style={styles.title}> - ${totalExpenses} this month - </Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.headerSpacer} />
        {expenses.map((expense, index) => (
          <View key={index} style={styles.expenseItem}>
            <View style={styles.expenseColumn}>
              <Text style={styles.expenseTitle}>
                {truncateName(expense.title, 13)}
              </Text>
            </View>
            <View style={styles.expenseColumn}>
              <Text style={styles.expenseInfo}>
                {expense.cost}$ / month {"   "}
              </Text>
            </View>
            <View style={styles.expenseColumn}>
              <Text style={styles.expenseInfo}>
                {expense.daysLeft} days left
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
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
  scrollContainer: {
    paddingTop: 80,
    paddingBottom: 100,
  },
  headerSpacer: {
    height: 70,
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  expenseItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  expenseColumn: {
    // flex: 1,
    alignItems: "flex-start",
  },
  expenseTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
  },
  expenseInfo: {
    fontSize: 16,
  },
});

export default ExpenseScreen;
