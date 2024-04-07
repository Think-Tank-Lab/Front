import { View, TouchableOpacity, Text, Image, StyleSheet } from "react-native";

const NavBar = ({ navigation }) => {
  return (
    <View style={styles.navBar}>
      <TouchableOpacity onPress={() => navigation.navigate("ExpenseScreen")}>
        <Image
          source={require("../assets/icons/HomeIcon.png")}
          style={styles.navIcon}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("ChatBotScreen")}
      >
        <Image
          source={require("../assets/icons/NotificationIcon2.png")}
          style={styles.navIcon}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("AddSubscriptionScreen")}
      >
        <Image
          source={require("../assets/icons/AddIcon.png")}
          style={[styles.navIcon, styles.addIcon]} // Apply additional style for the "Add" button
        />
      </TouchableOpacity>
      <TouchableOpacity 
      onPress={() => navigation.navigate("StatsScreen")}>
        <Image
          source={require("../assets/icons/StatsIcon.png")}
          style={styles.navIcon}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("ProfileScreen")}>
        <Image
          source={require("../assets/icons/ProfileIcon.png")}
          style={styles.navIcon}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    //backgroundColor: "#e3f9fc",
    backgroundColor: "#FFF100",
    padding: 20,
    width: "100%",
  },
  navIcon: {
    width: 25,
    height: 25,
  },
  addIcon: {
    width: 30, // Adjust the width of the "Add" button
    height: 30, // Adjust the height of the "Add" button
  },
});

export default NavBar;
