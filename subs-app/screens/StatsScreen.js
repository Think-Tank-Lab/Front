import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { LineChart } from "react-native-chart-kit";
import NavBar from "../components/NavBar"; // asigurați-vă că calea este corectă

const StatsScreen = ({ navigation }) => {
  // Datele pentru grafic. Înlocuiește acestea cu datele tale.
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
      <Text style={styles.title}>Expense Summary</Text>
      {/* <LineChart
        data={data}
        width={320}
        height={220}
        chartConfig={{
          backgroundColor: '#ADD8E6',
          backgroundGradientFrom: '#ADD8E6',
          backgroundGradientTo: '#ADD8E6',
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        style={styles.chart}
      /> */}
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
    marginBottom: 10,
  },
  chart: {
    marginVertical: 8,
    borderRadius: 16,
  },
});

export default StatsScreen;
