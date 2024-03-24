import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import IntroScreen1 from "./screens/IntroScreen1";
import IntroScreen2 from "./screens/IntroScreen2";
import IntroScreen3 from "./screens/IntroScreen3";
import LoginScreen from "./screens/LoginScreen";
import SignUpScreen from "./screens/SignUpScreen";
import GetStartedScreen from "./screens/GetStartedScreen";
import ExpenseScreen from "./screens/ExpenseScreen";
import NotificationScreen from "./screens/NotificationScreen";
import AddSubscriptionScreen from "./screens/AddSubscriptionScreen";
import ProfileScreen from "./screens/ProfileScreen";
import StatsScreen from "./screens/StatsScreen";
import ChangePasswordScreen from "./screens/ChangePasswordScreen";
import EditProfileScreen from "./screens/EditProfileScreen";
import SettingsScreen from "./screens/SettingsScreen";
import HelpScreen from "./screens/HelpScreen";
import PrivacyScreen from "./screens/PrivacyScreen";
import ContactSupportScreen from "./screens/ContactSupportScreen";
import FAQScreen from "./screens/FAQPage";
import SendFeedbackScreen from "./screens/SendFeedbackScreen";
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Intro1">
        <Stack.Screen
          options={{ headerShown: false }}
          name="Intro1"
          component={IntroScreen1}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Intro2"
          component={IntroScreen2}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Intro3"
          component={IntroScreen3}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={LoginScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="ChangePasswordScreen"
          component={ChangePasswordScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="SignUp"
          component={SignUpScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="GetStartedScreen"
          component={GetStartedScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="ExpenseScreen"
          component={ExpenseScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="NotificationScreen"
          component={NotificationScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="AddSubscriptionScreen"
          component={AddSubscriptionScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="ProfileScreen"
          component={ProfileScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="StatsScreen"
          component={StatsScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="EditProfileScreen"
          component={EditProfileScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="SettingsScreen"
          component={SettingsScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="HelpScreen"
          component={HelpScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="PrivacyScreen"
          component={PrivacyScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="ContactSupportScreen"
          component={ContactSupportScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="FAQScreen"
          component={FAQScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="SendFeedbackScreen"
          component={SendFeedbackScreen}
        />

        {/* Adăugați alte ecrane aici */}
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
