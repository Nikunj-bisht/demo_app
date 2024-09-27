import { StyleSheet } from "react-native";

const styles= StyleSheet.create({
      dateday: {
        borderRadius: 11,
        elevation: 6,
        padding: 10,
        paddingLeft: 20,
        borderTopWidth: 5,
        borderColor: '#3743ab',
        width: '95%',
        alignSelf: 'center',
        margin: 20,
      },
      cardView:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8,
        alignItems: 'center',
      },
      dateView:{alignItems: 'center', marginLeft: 12},
      date:{fontSize: 16, fontWeight: '600', marginLeft: 19},
      progressView:{alignItems: 'center', marginRight: 60},
      progressText:{fontSize: 10, color: '#4dd0e1'},
      divider:{marginBottom: 8},
      notTakenView:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 12,
        marginLeft: 7,
      },
      notTakenText:{color: 'red'},
      takenText:{color: '#66bb6a'},
      

      //main
     container:{height: '100%', backgroundColor: '#3743ab'},
     modal:{alignItems: 'center', backgroundColor: 'red'},
     detailView:{
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(52, 52, 52, 0.8)',
      },
     lottie:{width: 70, height: 70},
     top:{backgroundColor: '#3743ab'},
     container1:{alignItems: 'center', marginTop: 28},
     progress:{fontSize: 18, color: '#4dd0e1'},
     medView:{
        alignItems: 'center',
        marginBottom: 12,
        marginTop: 15,
        padding: 5,
        borderRadius: 20,
      },
     medText:{fontSize: 25, fontWeight: '500', color: 'white'},
     subContainer:{
        backgroundColor: 'white',
        flex: 1,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
      },
     datesView:{height: 130, alignItems: 'center', marginTop: 18},
     scheduleDateText:{fontWeight: '500', marginBottom: 8},
     dayView:{alignItems: 'center'},
     dayText:{color: 'black', fontSize: 18},
     dateText:{
        backgroundColor: 'white',
        padding: 8,
        borderRadius: 30,
        color: 'black',
      },
     monthText:{color: 'white'},
     medicineHisText:{
        marginLeft: 10,
        marginTop: 8,
        fontWeight: '600',
        textAlign: 'center',
        fontSize: 18,
      },
     buttonTitle:{fontSize: 18},
     button:{backgroundColor: '#3743ab', height: 40},  
});
export default styles;