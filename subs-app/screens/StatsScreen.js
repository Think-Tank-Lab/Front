import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { Picker } from "@react-native-picker/picker";
import NavBar from "../components/NavBar";
import { ref, onValue } from "firebase/database";
import { db, auth } from "../firebase.js";

const StatsScreen = ({ navigation }) => {
  const [subscriptions, setSubscriptions] = useState([]);
  const [loading, setLoading] = useState(true);
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
    const counts = {
      Weekly: 0,
      Biweekly: 0,
      Monthly: 0,
      Quarterly: 0,
      Semiannually: 0,
      Yearly: 0,
    };

    subscriptions.forEach((subscription) => {
      let paymentCycle = subscription.paymentCycle.toLowerCase();

      if (paymentCycle === "bi-weekly") {
        paymentCycle = "biweekly";
      }

      if (paymentCycle === "3 months") {
        paymentCycle = "quarterly";
      }

      if (paymentCycle === "6 months") {
        paymentCycle = "semiannually";
      }

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

    const newData = { ...chartData };
    newData.datasets[0].data = Object.values(counts);
    setChartData(newData);
  }, [subscriptions]);

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

  return (
    <View style={styles.container}>
      <View style={styles.fixedContent}>
        <Text style={styles.title}>Subscription Summary</Text>
      </View>
      <LineChart
        data={{
          labels: chartData.labels,
          datasets: [
            {
              data: chartData.datasets[0].data,
              strokeWidth: 2,
            },
          ],
        }}
        width={Dimensions.get("window").width * 0.9}
        height={Dimensions.get("window").height * 0.5}
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
