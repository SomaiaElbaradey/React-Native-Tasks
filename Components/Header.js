import React,{Component} from 'react';
import {View, Text} from 'react-native';

const header =(props) =>{
   
        return(
            <View style={styles.viewstyle}>
                <Text style={styles.textStyle}>
                    {props.headerText}
                </Text>
            </View>
        );
}
const styles ={
    viewstyle:{
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height : 60,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffest:{height:2, width:0},
        shadowOpacity: 0.2,
        elevation:2,
        position:'relative'
    },
    
    textStyle:{
        fontSize:20,
    }
}

export default header ;