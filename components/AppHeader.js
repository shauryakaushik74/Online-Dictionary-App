import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

class AppHeader extends React.Component{
  render(){
    return(
      <View style = {styles.buttonStyle}>
        <Text style={styles.text}>Pocket Dictionary</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
 buttonStyle:{
    backgroundColor: "blue",
  },
  text:{
    color: 'black',
    padding: 20,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});

export default AppHeader;