import React from 'react';
import {
  TouchableOpacity,
  TextInput,
  StatusBar,
  Image,
  View,
  Text,
} from 'react-native';
import styles from '../styles/styles';

const Register = ({navigation}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center',backgroundColor:'#fff'}}>
        <StatusBar animated showHideTransition='slide' backgroundColor={styles.primary.color} barStyle='dark-content'/>
      <View style={styles.formLogin}>
        <Image source={require('../assets/icons/icon_savings.png')} style={{width:120,height:120,alignSelf:'center'}}/>
        <View style={styles.formInput}>
          <Text>Email</Text>
          <TextInput keyboardType={'email-address'} style={styles.inputLogin} placeholder="user@gmail.com" />
        </View>
        <View style={styles.formInput}>
          <Text>Password</Text>
          <TextInput secureTextEntry style={styles.inputLogin} placeholder="Password"/>
        </View>
        <View style={styles.formInput}>
          <Text>Retype Password</Text>
          <TextInput secureTextEntry style={styles.inputLogin} placeholder="Retype Password"/>
        </View>
        <View>
          <TouchableOpacity style={styles.btnLogin}>
            <Text style={styles.loginText}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Register;