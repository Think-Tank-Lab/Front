import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import NavBar from "../components/NavBar";

const notifications = [
  { title: "Netflix: 5 days left", timestamp: "1 min ago" },
  { title: "Spotify: 10 days left", timestamp: "2 hours ago" },
  { title: "Car Insurance: 30 days left", timestamp: "1 day ago" },
  // Add more notifications as needed
];

// Funcție pentru a trunchia numele dacă depășește lungimea dorită
const truncateName = (name, maxLength) => {
  if (name.length > maxLength) {
    return name.substring(0, maxLength) + "...    ";
  }
  return name;
};

const NotificationScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.fixedContent}>
        <Text style={styles.title}>Notifications</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.headerSpacer} />
        {notifications.map((notification, index) => (
          <View key={index} style={styles.notificationItem}>
            <View style={styles.notificationColumn}>
              <Text style={styles.notificationTitle}>
                {truncateName(notification.title, 30)}
              </Text>
            </View>
            <View style={styles.notificationColumn}>
              <Text style={styles.notificationTimestamp}>
                {notification.timestamp}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
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
  notificationItem: {
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
    width: "95%", // Schimbați lățimea aici
    alignSelf: "center", // Centrarea notificărilor
  },

  notificationColumn: {
    alignItems: "flex-start",
  },
  notificationTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  notificationTimestamp: {
    fontSize: 16,
    color: "#777",
  },
  bottomNav: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default NotificationScreen;
