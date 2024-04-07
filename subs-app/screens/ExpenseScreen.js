import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Modal } from "react-native";
import { ref, onValue, set, remove } from "firebase/database";
import { db } from "../firebase.js";
import NavBar from "../components/NavBar";

const ExpenseScreen = ({ navigation }) => {
  const [expenses, setExpenses] = useState([]);
  const [selectedExpense, setSelectedExpense] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const subscriptionsRef = ref(db, "subscriptions");
    onValue(subscriptionsRef, (snapshot) => {
      const data = snapshot.val();
      const subs = [];
      for (let key in data) {
        subs.push({ id: key, ...data[key] });
      }
      setExpenses(subs);
    });
  }, []);

  const totalExpenses = expenses.reduce(
    (total, expense) => total + parseFloat(expense.price),
    0
  );
  const today = new Date();
  const currentDay = today.getDate();

  const daysLeft = (currentDay, paymentDay, paymentCycle) => {
    let days;
    switch (paymentCycle) {
      case "Weekly":
        days = 7 - ((currentDay - paymentDay) % 7);
        break;
      case "Bi-weekly":
        days = 14 - ((currentDay - paymentDay) % 14);
        break;
      case "Monthly":
        const lastDayOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
        if (currentDay < paymentDay) {
          days = paymentDay - currentDay;
        } else {
          days = lastDayOfMonth - currentDay + paymentDay;
        }
        break;
      case "Every 3 months":
        const currentMonth = today.getMonth();
        const monthsUntilNextPayment = (currentMonth + paymentDay - 1) % 3;
        days = (3 - monthsUntilNextPayment) * 30 - currentDay;
        break;
      case "Every 6 months":
        days = 180 - currentDay + paymentDay;
        break;
      case "Yearly":
        days = 365 - currentDay + paymentDay;
        break;
      default:
        days = 30; // Setăm o valoare implicită în cazul în care paymentCycle-ul nu este definit corect
    }
    return days;
  };

  const openModal = (expense) => {
    setSelectedExpense(expense);
    setModalVisible(true);
  };

  const closeModal = () => {
    setSelectedExpense(null);
    setModalVisible(false);
  };

  const handleUpdate = () => {
    const { id, ...updatedExpense } = selectedExpense;
    const expenseRef = ref(db, `subscriptions/${id}`);
    set(expenseRef, updatedExpense)
      .then(() => {
        console.log("Subscription updated successfully");
        closeModal();
      })
      .catch((error) => {
        console.error("Error updating subscription: ", error);
      });
  };

  const handleDelete = () => {
    const expenseRef = ref(db, `subscriptions/${selectedExpense.id}`);
    remove(expenseRef)
      .then(() => {
        console.log("Subscription deleted successfully");
        closeModal();
      })
      .catch((error) => {
        console.error("Error deleting subscription: ", error);
      });
  };

  const truncateName = (name, maxLength) => {
    if (name.length > maxLength) {
      return name.substring(0, maxLength) + "...    ";
    }
    return name;
  };

  return (
    <View style={styles.container}>
      <View style={styles.fixedContent}>
        <Text style={styles.title}>Total Expenses </Text>
        <Text style={styles.title}> - ${totalExpenses} this month - </Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.headerSpacer} />
        {expenses.map((expense, index) => (
          <TouchableOpacity key={index} onPress={() => openModal(expense)}>
            <View style={styles.expenseItem}>
              <View style={styles.expenseColumn}>
                <Text style={styles.expenseTitle}>{truncateName(expense.name, 7)}</Text>
              </View>
  
              <View style={styles.expenseColumn}>
                <Text style={styles.expenseInfo}>{expense.price}$ / {expense.paymentCycle}</Text>
              </View>
              <View style={styles.expenseColumn}>
                <Text style={styles.expenseInfo}>{daysLeft(currentDay, expense.paymentDay, expense.paymentCycle)} days left</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <Modal visible={modalVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>{selectedExpense && selectedExpense.name}</Text>
          {/* Alte detalii despre abonament */}
          <TouchableOpacity style={styles.modalButton} onPress={handleUpdate}>
            <Text style={styles.buttonText}>Modify</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.modalButton} onPress={handleDelete}>
            <Text style={styles.buttonText}>Delete</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.modalButton} onPress={closeModal}>
            <Text style={styles.buttonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
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
  headerSpacer: {
    height: 70,
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  scrollContainer: {
    paddingTop: 80,
    paddingBottom: 100,
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
  bottomNav: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  modalButton: {
    backgroundColor: "#fff323",
    width: "90%",
    height: 60,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "blue",
  },
});

export default ExpenseScreen;
