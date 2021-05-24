import {StyleSheet} from 'react-native';
// Primary = #ffe05d
// Primary Text = #212121
// Accent= =#ff9642
// Secondary = #646464
// Dark Primary = #ffe05d
// Light Primary = #fff8cd
// Text Icon = #212121
// Secondary Text = #757575
// divider color = #BDBDBD
const primary = '#ffe05d';
const divider = '#BDBDBD';
const accent = '#ff9642';
const lightText='#fff8cd';
const darkText = '#646464';
const transparent = 'transparent';
const err = '#ed2424';
const succ = '#24ed2e';
const soft = '#646464';
export default StyleSheet.create({
  primary: {
    color: primary,
  },
  accent:{
      color:accent,
  },
  darkText:{
      color:darkText,
  },
  lightText:{
      color:lightText
  },
  // Intro
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: 300,
    height: 270,
    marginVertical: 32,
    resizeMode:'contain'
  },
  text: {
    color: 'rgba(255, 255, 255, 0.8)',
    textAlign: 'center',
  },
  title: {
    fontSize: 22,
    color: 'white',
    textAlign: 'center',
  },
  buttonCircle: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(0, 0, 0, .2)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  //   Login
  formLogin: {
      display:'flex',
      flexDirection:'column',
      alignSelf:'center',
      width:'75%'
  },
  inputLogin:{
      borderColor:divider,
      borderWidth:1,
      borderRadius:10,
      padding:0,
      paddingVertical:5,
      paddingHorizontal:5
  },
  formInput:{
      marginVertical:7
  },
  rowCenter:{
      alignItems:'center',
      flexDirection:'row',
      justifyContent:'center'
  },
  btnRegister :{
      padding:0,
      color:primary
  },
  btnLogin:{
      backgroundColor:primary,
      padding:10,
      textAlign:'center',
      borderRadius:10,
      marginTop:10
  },
  loginText:{
      textAlign:'center',
      fontWeight:'bold',
      fontSize:16,
      color:darkText
  },
  forgotText:{
    textAlign:'center',
    marginTop:5,
    fontWeight:'bold',
    color:accent
  },
//   Home
    cardAmount:{
        borderWidth:1,
        borderColor:transparent,
        alignSelf:'center',
        width:'80%',
        // paddingHorizontal:50,
        paddingVertical:5,
        marginVertical:15,
        borderRadius:10,
        elevation:3,
        backgroundColor:'#fff',
    },
    cardAmountText:{
        fontSize:18,
        fontWeight:'bold',
        color : darkText
    },
    cardBalance:{
        flexDirection:'row',
        justifyContent:'space-between',
        padding:15,
        borderBottomColor:divider,
        borderBottomWidth:1,
        alignItems:'center'
    },
    cardIcon:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center',
        padding:5
    },
    btnCardContainer:{
        alignItems:'center'
    },
    btnCard:{
        backgroundColor:accent,
        padding:4,
        color:'#fff',
        alignItems:'center',
        borderRadius:7,
        padding:8,
        width:50,
        elevation:2
    },
    btnCardText:{
        color:'#646464',
    },
    header:{
        backgroundColor:primary,
        width:'100%',
        position:'absolute',
        top:0,
        bottom:0
    },
    cardInfo:{
        borderWidth:1,
        borderColor:accent,
        alignSelf:'center',
        width:'100%',
        paddingBottom:8,
        marginTop:15,
        borderRadius:10,
        paddingHorizontal:10,
        backgroundColor:'#fff',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    infoText:{
        fontSize:18,
        fontWeight:'bold',
        color : darkText
    },
    historyContainer:{
        marginVertical:10,
    },
    historyText:{
        fontSize:18,
        fontWeight:'bold',
        color : darkText,
        marginLeft:10
    },
    itemHistory:{
        backgroundColor:'#fff',
        borderRadius:10,
        margin:10,
        width:160,
        height:150,
    },
    itemHistoryHeader:{
        backgroundColor:accent,
        padding:10,
    },
    itemHistoryHeaderText:{
        color:darkText
    },
    itemHistoryBody:{
        padding:10,
        borderWidth:1,
        borderColor:accent
    },
    itemHistoryAmountText:{
        fontSize:13,
        fontWeight:'bold',
        color:err
    },
    // Modal 
    inputModalContainer:{
        marginVertical:15
    },
    textInputModal:{
        borderBottomWidth:1,
        borderBottomColor:accent
    },
    btnModalContainer:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        padding:10,
        alignItems:'center'
    },
    btnModalSave:{
        backgroundColor:accent,
        padding:10,
        borderRadius:8,
        width:120,
    },
    btnModalSaveText:{
        color:'#fff',
        textAlign:'center'
    },
    btnModalCancel:{
        backgroundColor:'#fff',
        padding:10,
        borderRadius:8,
        width:120,
        borderWidth:1,
        borderColor:accent
    },
    btnModalCancelText:{
        color:accent,
        textAlign:'center'
    }
});
