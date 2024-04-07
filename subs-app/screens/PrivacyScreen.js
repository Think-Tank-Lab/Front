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
        Your privacy is important to us. It is SmartSubs' policy to respect your privacy regarding any information we may collect from you through our app.
        We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent.
        We only retain collected information for as long as necessary to provide you with your requested service. What data we store, we'll protect within commercially acceptable means to prevent loss and theft, as well as unauthorized access, disclosure, copying, use or modification.
        We don't share any personally identifying information publicly or with third-parties, except when required to by law.
        Our app may link to external sites that are not operated by us. Please be aware that we have no control over the content and practices of these sites, and cannot accept responsibility or liability for their respective privacy policies.
        You are free to refuse our request for your personal information, with the understanding that we may be unable to provide you with some of your desired services.
        Your continued use of our app will be regarded as acceptance of our practices around privacy and personal information. If you have any questions about how we handle user data and personal information, feel free to contact us.
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
