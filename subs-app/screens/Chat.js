import React from 'react';
import { View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

const ChatbotScreen = () => {
  return (
    <View style={styles.container}>
      <WebView
        source={{
          uri: `https://script.chatlab.com/aichatbot.js?key=09ba4f51-eba6-4c53-866a-c5be949ff444&providerId=f9e9c5e4-6d1a-4b8c-8d3f-3f9e9c5e46d1`
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ChatbotScreen;
