import React, {useState} from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback,
  TextInput,
  Image,
} from 'react-native';
import styles from '../styles/styles';
import Alert from './alert';

const ModalComponent = ({show, changeState}) => {
  const [alert, setAlert] = useState(false);
  const [message , setMessage] = useState('');
  const [type, setType] = useState('');


  const showAlert = (showing) => {
    setAlert(!showing);
  };

  const maxValue = (value) => {
    if (value > 50 && value < 90) {
      setType('2button')
      setMessage('Anda Yakin Persentase Tabungan Diatas 50% Dari Pemasukan ?');
      showAlert(alert);
    } else if (value > 90) {
      setType(''); 
      setMessage('Maximal Persentase Tabungan 90%');
      showAlert(alert);
    }
  };

  return (
    <Modal visible={show} animationType="slide" transparent>
      <Alert
        title="Input Persentase Tabungan"
        message={message}
        func={showAlert}
        show={alert}
        type={type}
      />
      <TouchableOpacity
        activeOpacity={1}
        style={{flex: 1, backgroundColor: 'rgba(0,0,0,.4)'}}
        onPress={changeState}>
        <View
          style={{
            backgroundColor: '#fff',
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            padding: 10,
            borderTopStartRadius: 30,
            borderTopEndRadius: 30,
            zIndex: 100,
          }}>
          <Image
            source={require('../assets/images/savings-plan.png')}
            style={{
              width: 250,
              height: 120,
              alignSelf: 'center',
              resizeMode: 'contain',
            }}
          />
          <View style={{marginVertical: 15}}>
            <View style={styles.inputModalContainer}>
              <TextInput
                placeholder="Masukkan Total Pemasukan Bulanan"
                style={styles.textInputModal}
                keyboardType={'number-pad'}
              />
            </View>
            <View style={styles.inputModalContainer}>
              <TextInput
                placeholder="Masukkan Persentase Tabungan (%)"
                style={styles.textInputModal}
                keyboardType={'number-pad'}
                maxLength={2}
                onChangeText={(value) => maxValue(value)}
              />
            </View>
            <View style={styles.inputModalContainer}>
              <TextInput
                placeholder="Masukkan Target Tabungan"
                style={styles.textInputModal}
                keyboardType={'number-pad'}
              />
            </View>
          </View>
          <View style={styles.btnModalContainer}>
            <TouchableOpacity
              onPress={changeState}
              style={styles.btnModalCancel}>
              <Text style={styles.btnModalCancelText}>Batal</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnModalSave}>
              <Text style={styles.btnModalSaveText}>Simpan</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};
export default ModalComponent;
