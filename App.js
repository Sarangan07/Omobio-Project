import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import UserDetails from './UserDetails';

export default class App extends React.Component {
  state={
    email:"",
    password:""
  }


  login=()=>{
    fetch('http://localhost/omobio/login.php', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
 
    EMAIL: this.state.email,
 
    PASSWORD:this.state.password
 
  })
 
}).then((response) => response.json())
      .then((responseJson) => {
 
        // If server response message same as Data Matched
       if(responseJson === 'SuccessLogin')
        {
 
            //Then open Profile activity and send user email to profile activity.
            // this.props.navigation.navigate('Second', { Email: UserEmail });
            // console.log("suceess");
            alert("success");
 
        }
        else{
 
          alert("fail");
        }
 
      }).catch((error) => {
        console.error(error);
      });
 
  }

  


  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>Omobio Login</Text>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Email..." 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({email:text})} />
        </View>
        <View style={styles.inputView} >
          <TextInput  
            secureTextEntry
            style={styles.inputText}
            placeholder="Password..." 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({password:text})}/>
        </View>
       
        <TouchableOpacity style={styles.loginBtn} onPress={this.login}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>

    
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CAD5E2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    fontWeight:"bold",
    fontSize:50,
    color:"#fb5b5a",
    marginBottom:40
  },
  inputView:{
    width:"80%",
    backgroundColor:"#465881",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:50,
    color:"white"
  },
  forgot:{
    color:"white",
    fontSize:11
  },
  loginBtn:{
    width:"80%",
    backgroundColor:"#fb5b5a",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
  loginText:{
    color:"white"
  }
});