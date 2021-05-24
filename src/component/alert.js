import React from 'react';
import {View, Text, Modal, TouchableOpacity} from 'react-native';
import styles from '../styles/styles'

const Alert = ({title, message, func, type, show}) => {
  return (
    <Modal visible={show} animationType={'fade'} transparent>
      <TouchableOpacity
        activeOpacity={1}
        style={{flex: 1, backgroundColor: 'rgba(0,0,0,.4)',justifyContent:'center',alignItems:'center'}}>
        <View style={{backgroundColor:'#fff',width:'80%',borderRadius:10,padding:10}}>
          <View style={{paddingVertical:10,borderBottomWidth:1,borderBottomColor:styles.primary.color}}>
            <Text style={[styles.accent,{fontWeight:'bold',fontSize:17}]}>{title}</Text>
          </View>
          <View style={{paddingVertical:10}}>
            <Text>{message}</Text>
          </View>
          <View style={[styles.btnModalContainer,{justifyContent:'flex-end'}]}>
              {
                  type == '2button' ? <TouchableOpacity onPress={func} style={[styles.btnModalCancel,{padding:5,width:60,marginRight:10}]}>
                  <Text style={styles.btnModalCancelText}>Cancel</Text>
                </TouchableOpacity> : null
              }
            
            <TouchableOpacity onPress={func} style={[styles.btnModalSave,{padding:5,width:60}]}>
              <Text style={styles.btnModalSaveText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

export default Alert;
