import React , { Component }  from 'react' ;
import { Text, View } from 'react-native';


const Card= (props) => {
    return(
        <View style={styles.container}>
           {props.children}
        </View>
    );

};

const styles = {
    container:{
        textColor:'black',
        
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        borderRadius: 2,
        borderWidth: 1,
        borderColor: '#ddd',

        marginTop: 10,
        marginLeft: 5,
        marginRight: 5,
        marginBottom: 10
    }
};

export default Card;