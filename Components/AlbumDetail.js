import React, { Component } from 'react';
import { Text, View , Image, Linking} from 'react-native';
import Card from './Card' ;
import CardSection from './CardSection';
import Botton from './button';
import Header from './Header';

const AlbumDetail = ({album}) => {
    const {title,artist,thumbnail_image, image, url} = album;
    const {headerContainer, headerImage, thumbnailImageStyle} = styles;
    return( 
       
    
    <View style={{backgroundColor:'black'}}>

       <Card>
            <CardSection>
                <View style={headerImage}>
                    <Image style={thumbnailImageStyle} source={{uri: `${thumbnail_image}`}} />
                </View> 

                <View style={headerContainer}>
                    <Text style={{fontSize:18}}> {title} </Text>
                    <Text> {artist} </Text>
                </View>

            </CardSection>
                
            <CardSection>
                <Image style={{height:300, flex:1, width:null}} source={{uri: `${image}`}} />
            </CardSection>

            <CardSection>
                <Botton onPress={()=>{Linking.openURL(url)}}>
                    Buy Now
                </Botton>
            </CardSection>

        </Card>
    </View>
    );    
};

const styles = {
        headerContainer:{
            justifyContent: 'space-around' ,
            flexDirection: 'column',
        },

        headerImage: {
            justifyContent: 'center',
            marginLeft: 10,
            marginRight:10
        },

        thumbnailImageStyle:{
            height:50,
            width:50
        }
    }

export default AlbumDetail;