import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import NavBar from "../components/NavBar"; 

const faqData = [
  {
    question: "Why should  I use SmartSubs?",
    answer:
      "SmartSubs simplifies the process of managing your subscriptions by providing a centralized platform to track payments, renewal dates, and analyze your subscription expenses. It helps you stay organized and in control of your finances.",
  },
  {
    question: "What is SmartSubs?",
    answer:
      "SmartSubs is a subscription management application designed to help you effortlessly track and manage all your subscriptions in one place.",
  },
  {
    question: "How can I get support for SmartSubs?",
    answer:
      "If you have any questions, feedback, or encounter any issues while using SmartSubs, our support team is here to assist you. You can reach out to us through the app's support section, and we'll be happy to help.",
  },
  
];

const FAQScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.fixedContent}>
        <Text style={styles.title}>Frequently Asked Questions</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.headerSpacer} />
        {faqData.map((item, index) => (
          <View key={index} style={styles.faqItem}>
            <Text style={styles.question}>{item.question}</Text>
            <Text style={styles.answer}>{item.answer}</Text>
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
  faqItem: {
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
  question: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  answer: {
    fontSize: 16,
  },
  bottomNav: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default FAQScreen;
