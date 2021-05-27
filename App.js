import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  Alert,
  TouchableOpacity,
} from 'react-native';
import Constants from 'expo-constants';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import AppHeader from './components/AppHeader';
import dictionary from '../database.'

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      text: '',
      isSearchPressed: 'false',
      word: '',
      type: '',
      examples: [],
      definition: '',
    };
  }

  getWord=(text)=>{
    var text = text.toLowerCase();
    try{
     var word = dictionary[text]["word"]
     var lexicalCategory = dictionary[text]["lexicalCategory"]
     var definition = dictionary[text]["defitnion"]
     this.setState({
      "word": word,
      "lexicalCategory": lexicalCategory,
      "definition": defintion
    })
    }
    catch(err){
      alert("Sorry This word is not available for now")
      this.setState({
         'text': '',
         'isSearchPressed': false
      })
    }
  }
  

  render() {
    return (
      <View style={styles.container}>
        <AppHeader />
        <TextInput
          onChangeText={(text) => {
            this.setState({ text: text });
          }}
          style={styles.inputBox}
          value={this.state.text}
        />
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => {
            this.setState({ isSearchPressed: true });
            this.getWord(this.state.text);
          }}>
          <Text style={styles.textStyle}>SEARCH</Text>
        </TouchableOpacity>
        <Text style={styles.dataStyle}>Word: {this.state.word}</Text>
        <Text style={styles.dataStyle}>Type: {this.state.type}</Text>
        <Text style={styles.dataStyle}>
          Definition: {this.state.definition}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  dataStyle: {
    flex: 0.7,
    color: "blue",
    fontWeight: 'bold',
    fontSize: 20
  },

  inputBox: {
    width: '80%',
    height: 40,
    textAlign: 'center',
    marginTop: 90,
    borderWidth: 4,
    outline: 'none',
    alignSelf: 'center',
  },

  buttonStyle: {
    alignSelf: 'center',
    margin: 10,
    padding: 10,
    width: '50%',
    height: 55,
  },

  textStyle: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
