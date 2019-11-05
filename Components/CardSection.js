import React, {component} from 'react' ;
import {Texr, View} from 'react-native' ;

const CardSection = (props) => {
    return(
        <View style={styles.section}>
            {props.children}
        </View>        
    )
};

const styles = {
    section:{
        borderBottomWidth: 1,
        padding:5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row' ,
        borderColor: '#ddd' ,
        position: 'relative'
    }
}

export default CardSection;