import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  FlatList,
  ImageBackground,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';
import Icons1 from 'react-native-vector-icons/FontAwesome';
import styles from '../styles/styles';
import Modal from './modal';

const Home = () => {
  const [dummyData, setDummyData] = useState([]);
  const [show, setShow] = useState(false);
  const data = [
    {
      nama_transaksi: 'Beli Bahan Makanan',
      amount: '-Rp 20.000',
      date: '07-03-2021',
      jenis_pengeluaran: 'Cash',
    },
    {
      nama_transaksi: 'Beli Bensin',
      amount: '-Rp 20.000',
      date: '08-03-2021',
      jenis_pengeluaran: 'Cash',
    },
    {
      nama_transaksi: 'Project',
      amount: '+Rp 200.000',
      date: '09-03-2021',
      jenis_pengeluaran: 'ATM',
    },
    {
      nama_transaksi: 'Beli Paket',
      amount: '-Rp 50.000',
      date: '10-03-2021',
      jenis_pengeluaran: 'Dana',
    },
    {
      nama_transaksi: 'Print',
      amount: '-Rp 5.000',
      date: '10-03-2021',
      jenis_pengeluaran: 'Cash',
    },
    {
      nama_transaksi: 'Tarik Tunai',
      amount: '-Rp 50.000',
      date: '11-03-2021',
      jenis_pengeluaran: 'Bank',
    },
    {
      nama_transaksi: 'Transfer ke Rizky',
      amount: '-Rp 50.000',
      date: '13-03-2021',
      jenis_pengeluaran: 'Bank',
    },
  ];

  const changeState = (show) => {
    setShow(!show);
  };

  useEffect(() => {
    setDummyData(data);
  }, []);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fbf7f0'}}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={styles.primary.color}
        animated
        showHideTransition={'slide'}
      />
      <Modal show={show} changeState={() => changeState(show)} />
      <View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}>
        <ImageBackground
          source={require('../assets/bg/BgHome.png')}
          style={{height: 250}}
          resizeMode={'cover'}
        />
      </View>
      <View style={{padding: 40, paddingBottom: 15}}>
        <Text style={{fontSize: 34, color: '#ff9642'}}>Hello...</Text>
        <Text style={{fontSize: 20, color: '#ff9642'}}>Rahmat Hidayat</Text>
      </View>
      <View>
        <View style={styles.cardAmount}>
          <TouchableOpacity
            style={[styles.cardBalance, {padding: 5, paddingLeft: 15}]}
            onPress={() => changeState(show)}>
            <Text style={styles.darkText}>Tabungan 15%</Text>
            <Text style={styles.darkText}>Uang Pegangan 5%</Text>
            <Icons1 name="angle-right" size={30} />
          </TouchableOpacity>
          <View style={styles.cardBalance}>
            <Text style={styles.darkText}>Tabungan</Text>
            <Icons name="md-wallet" size={30} color={styles.accent.color} />
            <Text style={styles.cardAmountText}>Rp 3.000.000</Text>
          </View>
          <View style={styles.cardIcon}>
            <View style={styles.btnCardContainer}>
              <View style={styles.btnCard}>
                <Icons
                  name="ios-add"
                  size={20}
                  color={styles.lightText.color}
                />
              </View>
              <Text style={styles.btnCardText}>Add</Text>
            </View>
            <View style={styles.btnCardContainer}>
              <View style={styles.btnCard}>
                <Icons1
                  name="balance-scale"
                  size={20}
                  color={styles.lightText.color}
                />
              </View>
              <Text style={styles.btnCardText}>Balance</Text>
            </View>
            <View style={styles.btnCardContainer}>
              <View style={styles.btnCard}>
                <Icons1
                  name="history"
                  size={20}
                  color={styles.lightText.color}
                />
              </View>
              <Text style={styles.btnCardText}>History</Text>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{width: '80%', alignSelf: 'center', flex: 1, marginBottom: 15}}>
        <Text style={[styles.darkText,{marginBottom:8}]}>Recent Transaction</Text>
        <FlatList
          data={dummyData}
          horizontal={false}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{flexGrow: 1}}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => (
            <View style={styles.cardInfo}>
              <View>
                <Text style={styles.infoText}>{item.nama_transaksi}</Text>
                <Text>{item.date}</Text>
              </View>
              <View>
                <Text
                  style={[
                    styles.itemHistoryAmountText,
                    {
                      color: item.amount.includes('-') ? '#ed2424' : '#24ed2e',
                    },
                  ]}>
                  {item.amount}
                </Text>
              </View>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
