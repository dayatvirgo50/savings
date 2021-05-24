import React from 'react';
import {
  StatusBar,
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  ScrollView,
  ImageBackground,
} from 'react-native';
import Icons from 'react-native-vector-icons/Feather';
import styles from '../styles/styles';

const Profil = () => {
  return (
    <ScrollView style={{flex: 1, backgroundColor: '#fbf7f0'}}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle={'light-content'}
        animated
        showHideTransition={'fade'}
      />
      <View>
        <View style={{height: 370}}>
          <Image
            source={require('../assets/user/user.jpg')}
            style={{width: '100%', resizeMode: 'cover', height: '100%'}}
            blurRadius={0.9}
          />
          <View
            style={{
              backgroundColor: 'rgba(0,0,0,.5)',
              position: 'absolute',
              zIndex: 100,
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View style={{width: 120, height: 120, borderRadius: 60}}>
              <Image
                source={require('../assets/user/user.jpg')}
                style={{
                  width: 120,
                  height: 120,
                  position: 'absolute',
                  borderRadius: 60,
                }}
              />
            </View>
            <View>
              <Text style={{color: '#fff', fontSize: 20, marginVertical: 5}}>
                RAHMAT HIDAYAT
              </Text>
            </View>
            <View>
              <Text style={{color: '#fff', fontSize: 15}}>
                Tabungan : Rp 3.000.000
              </Text>
            </View>
          </View>
        </View>
        <View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View
              style={{
                backgroundColor: styles.primary.color,
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                padding: 10,
              }}>
              <View
                style={{
                  width: '50%',
                  alignItems: 'center',
                  flexDirection: 'row',
                  justifyContent: 'space-evenly',
                }}>
                <View
                  style={{
                    backgroundColor: 'rgba(92, 184, 92,.4)',
                    borderRadius: 35,
                  }}>
                  <Icons name="arrow-down" size={35} color="#5cb85c" />
                </View>
                <View>
                  <Text style={[styles.darkText, {fontWeight: 'bold'}]}>
                    Pemasukan
                  </Text>
                  <Text style={[styles.accent, {fontWeight: 'bold'}]}>
                    Rp 200.000
                  </Text>
                </View>
              </View>
              <View
                style={{
                  width: '50%',
                  alignItems: 'center',
                  flexDirection: 'row',
                  justifyContent: 'space-evenly',
                  borderLeftColor: styles.darkText.color,
                  borderLeftWidth: 1,
                }}>
                <View
                  style={{
                    backgroundColor: 'rgba(217, 83, 79,.4)',
                    borderRadius: 35,
                  }}>
                  <Icons name="arrow-up" size={35} color="#d9534f" />
                </View>
                <View>
                  <Text style={[styles.darkText, {fontWeight: 'bold'}]}>
                    Pengeluaran
                  </Text>
                  <Text style={[styles.accent, {fontWeight: 'bold'}]}>
                    Rp 200.000
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Profil;
