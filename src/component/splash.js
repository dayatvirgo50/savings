import React, {useEffect} from 'react';
import {View, StatusBar, Text} from 'react-native';
import LottiView from 'lottie-react-native';
import styles from '../styles/styles';

const Splash = ({navigation}) => {

  useEffect(()=>{
    const timeOut = setTimeout(()=>navigation.replace("Intro"),3000);

    return()=>{
      clearTimeout(timeOut);
    }
  },[])

  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <StatusBar
        animated
        backgroundColor={styles.primary.color}
        showHideTransition="slide"
        barStyle="dark-content"
      />
      <LottiView
        source={require('../assets/animated/savings_splash.json')}
        autoPlay
        loop
      />
    </View>
  );
};

export default Splash;
