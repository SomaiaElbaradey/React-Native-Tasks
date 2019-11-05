import React, {component} from 'react';
import {TouchableOpacity, Text} from 'react-native';

const button =({onPress, children}) => {
    
    const {bottonStyle, textStyle} =styles;

    return (

        <TouchableOpacity onPress={onPress} style={bottonStyle}>
            <Text style={textStyle}>
                {children}
            </Text>
        </TouchableOpacity>
    )
};

const styles={

    bottonStyle:{
        flex:1,
        alignSelf:'stretch',
        borderRadius: 5,
        borderColor: '#007aff',
        borderWidth: 1,
        backgroundColor: '#fff',
        marginLeft:5,
        marginRight:5
    },

    textStyle:{
        alignSelf:'center',
        color:'#007aff',
        fontSize:16,
        fontWidth: '600',
        paddingTop:10,
        paddingBottom:10
    }
};

export default button;