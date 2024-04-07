import React, { useState } from "react";
import { View, StyleSheet, Text, FlatList, TextInput, TouchableOpacity } from 'react-native';
import { WebView } from 'react-native-webview';
import NavBar from "../components/NavBar";
import axios from 'axios'; 

const ChatBotScreen = ({ navigation }) => {

  const [data, setData] = useState([]);
  const apiKey = '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';
  const apiURL = 'https://api.openai.com/v1/engines/text-davinci-002/completions';
  const [textInput, setTextInput] = useState('');
  
  const handleSend = async () => {
    try {
      const prompt = textInput;
      const response = await axios.post(apiURL, {
        prompt: prompt,
        max_tokens: 1024,
        temperature: 0.5,
      },{
        headers:{
          'Content-Type': 'application/json',
          'Authorization' : `Bearer ${apiKey}`
        }
      });
  
      const text = response.data.choises[0].text;
      setData([...data, {type:'user', 'text': textInput}, {type:'bot', 'text':text}]);
      setTextInput('');
    } catch (error) {
      console.error('Error:', error);
      alert('Something went wrong. Please try again later.');
    }
  }
  
  
  return (
    <View style={styles.container}>
        <Text style={styles.title}>ChatBot</Text>
        <FlatList
          data={data} // Corectare aici
          keyExtractor={(item,index) => index.toString()}
          style={styles.body}
          renderItem={({item}) => (
              <View style={{flexDirection:'row', padding:10}}>
                  <Text style={{fontWeight:'bold', color: item.type === 'user' ? 'green' : 'red'}}>{item.type === 'user' ? 'Ninza' : 'Bot'}</Text>
                  <Text style={styles.bot}>{item.text}</Text>
              </View>
          )}
        />
        <TextInput
          style={styles.input}
          value={textInput}
          onChangeText={ text => setTextInput(text)}
          placeholder="Ask me anything"
        />

        <TouchableOpacity onPress={handleSend}>
          <Text style={styles.buttonText}>Let's Go</Text>
        </TouchableOpacity>
        
        {/* <View style={styles.bottomNav}>
          <NavBar navigation={navigation} />
        </View> */}
        
    </View>
    
  );
};

export default ChatBotScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 70,
  },
  bottomNav: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  body: {
    backgroundColor: 'fffcc3',
    width:'102%',
    margin:10,
  },
  bot:{
    fontSize:16,
  },
  input:{
    borderWidth:1,
    borderColor:'black',
    width:'90%',
    height:60,
    marginBottom:10,
    borderRadius:10,
  },
  button:{
    backgroundColor:'#fff323',
    width:'90%',
    height:60,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText:{
    fontSize:25,
    fontWeight:'bold',
    color:'blue',
  },
});
