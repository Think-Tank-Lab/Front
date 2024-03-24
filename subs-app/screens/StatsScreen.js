import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { LineChart } from "react-native-chart-kit";
import NavBar from "../components/NavBar"; // Make sure the path is correct

const StatsScreen = ({ navigation }) => {
  // Data for the chart. Replace this with your own data.
  const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
        strokeWidth: 2,
      },
    ],
  };

  return (
    <View style={styles.container}>
      <View style={styles.fixedContent}>
        <Text style={styles.title}>Expense Summary</Text>
      </View>
      <LineChart
        data={data}
        width={400}
        height={260}
        chartConfig={{
          backgroundColor: "#ADD8E6",
          backgroundGradientFrom: "#ADD8E6",
          backgroundGradientTo: "#ADD8E6",
          decimalPlaces: 2,
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
