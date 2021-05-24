import React from 'react';
import {View, Text, Image, StyleSheet,StatusBar} from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';
import AppIntroSlider from 'react-native-app-intro-slider';
import styles from '../styles/styles'
const slides = [
  {
    key: '1',
    title: 'Mulai Menabung',
    text: 'Menabung untuk masa depan yang lebih cerah',
    image: require('../assets/intro/1.png'),
    backgroundColor: '#fcba03',
    color : '#fff'
  },
  {
    key: '2',
    title: 'Rencanakan Menabung',
    text: 'Mulai rencanakan untuk menabung',
    image: require('../assets/intro/2.png'),
    backgroundColor: '#ff9642',
    color : '#fff'
  },
  {
    key: '3',
    title: 'Mari Mulai',
    text: 'Mulai Perencanaan Keuangan Sekarang',
    image: require('../assets/intro/3.png'),
    backgroundColor: '#fff8cd',
    color : '#ff9642'
  },
];

const Intro = ({navigation}) => {
  const onDone = () => {
    navigation.replace('Auth');
  };
  const renderItem = ({item}) => {
    return (
      <View key={(item) => item.key} style={[styles.slide,{backgroundColor:item.backgroundColor}]}>
        <StatusBar backgroundColor={styles.primary.color} animated barStyle={'dark-content'} showHideTransition='fade'/>
        <Text style={[styles.title,{color:item.color}]}>
          {item.title}
        </Text>
        <Image source={item.image} style={styles.image} />
        <Text style={[styles.text,{color:item.color}]}>
          {item.text}
        </Text>
      </View>
    );
  };

  const doneButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Icons name="md-checkmark" color="rgba(255, 255, 255, .9)" size={30} />
      </View>
    );
  };

  const nextButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Icons
          name="chevron-forward-circle-outline"
          color="rgba(255, 255, 255, .9)"
          size={30}
        />
      </View>
    );
  };

  return (
    <AppIntroSlider
      data={slides}
      onDone={onDone}
      renderItem={renderItem}
      activeDotStyle={{backgroundColor: '#ffe05d'}}
      renderDoneButton={doneButton}
      renderNextButton={nextButton}
    />
  );
};

export default Intro;
