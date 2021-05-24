import React from 'react';
import {View, Text, TouchableOpacity, TextInput, StatusBar,Image} from 'react-native';
import styles from '../styles/styles';

const Login = ({navigation}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center',backgroundColor:'#fff'}}>
        <StatusBar animated showHideTransition='slide' backgroundColor={styles.primary.color} barStyle='dark-content'/>
      <View style={styles.formLogin}>
        <Image source={require('../assets/icons/icon_savings.png')} style={{width:120,height:120,alignSelf:'center'}}/>
        <View style={styles.formInput}>
          <Text>Email</Text>
          <TextInput keyboardType={'email-address'} style={styles.inputLogin} placeholder="user@gmail.com"/>
        </View>
        <View style={styles.formInput}>
          <Text>Password</Text>
          <TextInput secureTextEntry style={styles.inputLogin} placeholder="Password"/>
        </View>
        <View style={styles.rowCenter}>
          <View>
            <Text style>Don't Have Account ? </Text>
          </View>
          <View>
            <TouchableOpacity style={styles.btnRegister} onPress={()=>navigation.navigate('Register')}>
              <Text style={styles.accent}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <TouchableOpacity style={styles.btnLogin} onPress={()=>navigation.navigate('Tab')}>
            <Text style={styles.loginText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigation.navigate('Forgot')}>
            <Text style={styles.forgotText}>Forgot Password ?</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;
