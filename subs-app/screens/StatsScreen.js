import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { Picker } from "@react-native-picker/picker";
import NavBar from "../components/NavBar";
import { ref, onValue } from "firebase/database";
import { db } from "../firebase.js";
const StatsScreen = ({ navigation }) => {
  const [subscriptions, setSubscriptions] = useState([]);
  const [loading, setLoading] = useState(true); // New loading state
  const [chartData, setChartData] = useState({
    labels: [
      "Weekly",
      "Bi-weekly",
      "Monthly",
      "3 months",
      "6 months",
      "Yearly",
    ],
    datasets: [
      {
        data: [0, 0, 0, 0, 0, 0],
        strokeWidth: 2,
      },
    ],
  });
  const screenWidth = Dimensions.get("window").width; // Define screenWidth here

  // First useEffect to fetch data from Firebase
  useEffect(() => {
    const subscriptionsRef = ref(db, "subscriptions");
    onValue(subscriptionsRef, (snapshot) => {
      const data = snapshot.val();
      const subs = [];
      for (let key in data) {
        subs.push({ id: key, ...data[key] });
      }
      console.log(subs);
      setSubscriptions(subs);
      setLoading(false); // Update loading state when data fetching is completed
    });
  }, []);

  // Second useEffect to update chart data based on subscriptions
  useEffect(() => {
    console.log("Subscriptions:", subscriptions); // Debugging

    const counts = {
      Weekly: 0,
      Biweekly: 0,
      Monthly: 0,
      Quarterly: 0,
      Semiannually: 0,
      Yearly: 0,
    };

    subscriptions.forEach((subscription) => {
      let paymentCycle = subscription.paymentCycle.toLowerCase(); // Normalize to lowercase

      // Normalize "bi-weekly" to "biweekly"
      if (paymentCycle === "bi-weekly") {
        paymentCycle = "biweekly";
      }

      // Normalize "3 months" to "quarterly"
      if (paymentCycle === "3 months") {
        paymentCycle = "quarterly";
      }

      // Normalize "6 months" to "semiannually"
      if (paymentCycle === "6 months") {
        paymentCycle = "semiannually";
      }

      console.log("Payment cycle:", paymentCycle); // Debugging

      switch (paymentCycle) {
        case "weekly":
          counts["Weekly"] += 1;
          break;
        case "biweekly":
          counts["Biweekly"] += 1;
          break;
        case "monthly":
          counts["Monthly"] += 1;
          break;
        case "quarterly":
          counts["Quarterly"] += 1;
          break;
        case "semiannually":
          counts["Semiannually"] += 1;
          break;
        case "yearly":
          counts["Yearly"] += 1;
          break;
        default:
          break;
      }
    });

    console.log("Counts:", counts); // Debugging

    const newData = { ...chartData };
    newData.datasets[0].data = Object.values(counts);
    setChartData(newData);
  }, [subscriptions]);

  // Render loading indicator while fetching data
  if (loading) {
    return (
      <View style={styles.container}>
        <View style={styles.fixedContent}>
          <Text style={styles.title}>Subscription Summary</Text>
        </View>
        <LineChart
          data={chartData}
          width={screenWidth * 0.9}
          height={260}
          chartConfig={{
            backgroundColor: "#ADD8E6",
            backgroundGradientFrom: "#ADD8E6",
            backgroundGradientTo: "#ADD8E6",
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16,
            },
          }}
          style={styles.chart}
        />
        <View style={styles.bottomNav}>
          <NavBar navigation={navigation} />
        </View>
      </View>
    );
  }

  // Render the rest of the component once data fetching is completed
  return (
    <View style={styles.container}>
      <View style={styles.fixedContent}>
        <Text style={styles.title}>Subscription Summary</Text>
      </View>
      <LineChart
        data={chartData}
        width={screenWidth * 0.9}
        height={260}
        chartConfig={{
          backgroundColor: "#fff440",
          backgroundGradientFrom: "#fff660",
          backgroundGradientTo: "#fff660",
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        style={styles.chart}
      />
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
  title: {
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  chart: {
    marginTop: 100,
    marginVertical: 8,
    borderRadius: 16,
  },
  bottomNav: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default StatsScreen;
