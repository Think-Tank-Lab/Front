import React from "react";
import { View, Text, StyleSheet } from "react-native";
import NavBar from "../components/NavBar";

const PrivacyScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.fixedContent}>
        <Text style={styles.title}>Privacy</Text>
      </View>
      <View style={styles.secondContent}>
        <Text style={styles.privacyText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac
          ullamcorper urna. Integer dictum neque at tellus feugiat, nec
          consectetur neque ultrices. Phasellus ultrices velit at felis
          efficitur, vel rutrum turpis dictum. Cras id justo risus. Nulla et
          semper lectus, at vehicula turpis. Vestibulum eu nibh id urna
          hendrerit vehicula. Nam vulputate, felis ut tristique condimentum,
          nunc libero tincidunt sem, non posuere lectus sem eget eros. Proin
          convallis lacus non lectus consequat bibendum. Vestibulum tincidunt
          nec velit eget tristique. Fusce ullamcorper risus risus, at
          ullamcorper orci fermentum eget. Duis ut vestibulum mauris. Mauris
          ultricies ligula nec magna interdum scelerisque.
        </Text>
      </View>
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
  secondContent: {
    marginTop: 100, // Ajustați după cum este necesar
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  privacyText: {
    fontSize: 16,
    textAlign: "justify",
    lineHeight: 24,
  },
  bottomNav: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default PrivacyScreen;
