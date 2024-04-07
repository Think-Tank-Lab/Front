import React, { useEffect, useState } from 'react';
import { StyleSheet, Keyboard, View } from 'react-native';
import { WebView } from 'react-native-webview';
import NavBar from "../components/NavBar";

const ChatBotScreen = ({ navigation }) => {
  const [keyboardOpen, setKeyboardOpen] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardOpen(true);
      }
    );

    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardOpen(false);
      }
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: 'https://www.chatbase.co/chatbot-iframe/ImiMAcYdr_1SauR62X6ud' }}
        style={[styles.webview, keyboardOpen && styles.webviewWithKeyboard]}
      />
      {!keyboardOpen && (
        <View style={styles.bottomNav}>
          <NavBar navigation={navigation} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
    marginBottom: 60,
    marginTop:45,
  },
  webviewWithKeyboard: {
    marginBottom: 0,
  },
  bottomNav: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default ChatBotScreen;
