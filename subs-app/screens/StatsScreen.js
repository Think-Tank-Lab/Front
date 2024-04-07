import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, StyleSheet, Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { ref, onValue } from "firebase/database";
import { db, auth } from "../firebase.js";
import NavBar from "../components/NavBar";

const StatsScreen = ({ navigation }) => {
  const [subscriptions, setSubscriptions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [chartData1, setChartData1] = useState({
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
  const [chartData2, setChartData2] = useState({
    labels: [
      "App&Games",
      "Art",
      "Car",
      "Food",
      "Movies",
      "Music",
      "News",
      "Sports",
      "Other",
    ],
    datasets: [
      {
        data: [0, 0, 0, 0, 0, 0],
        strokeWidth: 2,
      },
    ],
  });
  const screenWidth = Dimensions.get("window").width;

  useEffect(() => {
    const userEmail = auth.currentUser.email;
    const username = userEmail.substring(0, userEmail.indexOf("@"));

    const subscriptionsRef = ref(db, `subscriptions/${username}`);
    onValue(subscriptionsRef, (snapshot) => {
      const data = snapshot.val();
      const subs = [];
      for (let key in data) {
        subs.push({ id: key, ...data[key] });
      }
      setSubscriptions(subs);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    const counts1 = {
      Weekly: 0,
      Biweekly: 0,
      Monthly: 0,
      Quarterly: 0,
      Semiannually: 0,
      Yearly: 0,
    };

    subscriptions.forEach((subscription) => {
      let paymentCycle = subscription.paymentCycle.toLowerCase();

      if (paymentCycle === "bi-weekly") paymentCycle = "biweekly";
      if (paymentCycle === "3 months") paymentCycle = "quarterly";
      if (paymentCycle === "6 months") paymentCycle = "semiannually";

      switch (paymentCycle) {
        case "weekly":
          counts1["Weekly"] += 1;
          break;
        case "biweekly":
          counts1["Biweekly"] += 1;
          break;
        case "monthly":
          counts1["Monthly"] += 1;
          break;
        case "quarterly":
          counts1["Quarterly"] += 1;
          break;
        case "semiannually":
          counts1["Semiannually"] += 1;
          break;
        case "yearly":
          counts1["Yearly"] += 1;
          break;
        default:
          break;
      }
    });

    setChartData1({
      ...chartData1,
      datasets: [{ data: Object.values(counts1), strokeWidth: 2 }],
    });
  }, [subscriptions]);

  useEffect(() => {
    const categoryCounts = {
      "App&Games": 0,
      Art: 0,
      Car: 0,
      Food: 0,
      Movies: 0,
      Music: 0,
      News: 0,
      Sports: 0,
      Other: 0,
    };

    subscriptions.forEach((subscription) => {
      const category = subscription.category;

      // Increment the count for the corresponding category
      categoryCounts[category] += 1;
    });

    // Transpose the data for the second chart
    const transposedData = Object.keys(categoryCounts).map(
      (category) => categoryCounts[category]
    );

    // Create a new chartData object with transposed data
    const transposedChartData = {
      labels: Object.keys(categoryCounts).map(truncateLabel), // Categories become labels
      datasets: [
        {
          data: transposedData,
          strokeWidth: 2,
        },
      ],
    };

    setChartData2(transposedChartData);
  }, [subscriptions]);

  // Helper function to truncate label
  const truncateLabel = (label) => {
    if (label.length > 6) {
      return label.substring(0, 6) + ".."; // Truncate label if more than 6 characters
    }
    return label;
  };

  return (
    <View style={styles.container}>
      <View style={styles.fixedContent}>
        <Text style={styles.title}>Subscription Summary</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {loading ? (
          <Text>Loading...</Text>
        ) : (
          <>
            <LineChart
              data={chartData1}
              width={screenWidth * 0.9}
              height={260}
              chartConfig={{
                backgroundColor: "#ADD8E6",
                backgroundGradientFrom: "#fff660",
                backgroundGradientTo: "#fff660",
                decimalPlaces: 0,
                color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                style: { borderRadius: 16 },
              }}
              style={styles.chart}
            />
            <LineChart
              data={chartData2}
              width={screenWidth * 0.9}
              height={260}
              chartConfig={{
                backgroundColor: "#ADD8E6",
                backgroundGradientFrom: "#fff660",
                backgroundGradientTo: "#fff660",
                decimalPlaces: 0,
                color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                style: { borderRadius: 16 },
                xLabelsOffset: -10, // Move x-axis labels to the left
              }}
              style={styles.chart}
            />
          </>
        )}
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
  title: {
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  chart: {
    marginTop: 20,
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
