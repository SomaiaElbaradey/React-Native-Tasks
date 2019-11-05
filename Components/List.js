
import React from 'react';
import {SafeAreaView, StyleSheet, Br, ActivityIndicator , FlatList, Address, Text, View, Alert, Image } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
      /*
      FlatListItems: [
        { id: 'IMDb: 8/10 ★★★★☆', value: 'fight club ', image: <Image style={{width:106.6, height: 160}} source={require('../pic/club.jpg')} /> ,
         name : <Text>2h 18min | Mystery, Thriller | 19 February 2010 (USA) {"\n"} Director: Martin Scorsese {"\n"} Writers: Laeta Kalogridis (screenplay), Dennis Lehane (novel) {"\n"}
         Stars: Leonardo DiCaprio, Emily Mortimer, Mark Ruffalo </Text> },
        { id: 'IMDb: 9.3/10 ★★★★☆', value: 'shawshank redemption', image: <Image style={{width:106.6, height: 160}} source={require('../pic/shaw.jpg')} />,
        name : <Text>2h 22min | Drama | 14 October 1994 (USA) {"\n"} Director: Frank Darabont {"\n"} Writers: Stephen King (short story "Rita Hayworth and Shawshank Redemption"), Frank Darabont (screenplay) {"\n"}
        Stars: Tim Robbins, Morgan Freeman, Bob Gunton </Text> },
        { id: 'IMDb: 8.2/10 ★★★★☆', value: 'silence of the lambs', image: <Image style={{width:106.6, height: 160}} source={require('../pic/silence.jpg')} />,
        name : <Text> 1h 58min | Crime, Drama, Thriller | 14 February 1991 (USA) {"\n"} Director: Jonathan Demme {"\n"}Writers: Thomas Harris (novel), Ted Tally (screenplay){"\n"}
        Stars: Jodie Foster, Anthony Hopkins, Lawrence A. Bonney </Text> },
        { id: 'IMDb: 9/10 ★★★★☆', value: 'godfather', image: <Image style={{width:106.6, height: 160}} source={require('../pic/fath.jpg')} />,
        name : <Text> 2h 55min | Crime, Drama | 24 March 1972 (USA) {"\n"} Director: Francis Ford Coppola {"\n"}Writers: Mario Puzo (screenplay by), Francis Ford Coppola (screenplay by){"\n"}
        Stars: Marlon Brando, Al Pacino, James Caan </Text> },
        { id: 'IMDb: 8.3/10 ★★★★☆', value: 'good will hunting' , image: <Image style={{width:106.6, height: 160}} source={require('../pic/will.jpg')} />,
        name : <Text> 2h 6min | Drama, Romance | 9 January 1998 (USA) {"\n"} Director: Gus Van Sant {"\n"}Writers: Matt Damon, Ben Affleck{"\n"}
        Stars: Robin Williams, Matt Damon, Ben Affleck  </Text> },
        { id: 'IMDb: 8.1/10 ★★★★☆', value: 'shutter island', image: <Image style={{width:106.6, height: 160}} source={require('../pic/shutter.jpg')} />,
        name : <Text> 2h 18min | Mystery, Thriller | 19 February 2010 (USA) {"\n"} Director: Martin Scorsese {"\n"}Writers: Laeta Kalogridis (screenplay), Dennis Lehane (novel){"\n"}
        Stars: Leonardo DiCaprio, Emily Mortimer, Mark Ruffalo  </Text> },
        { id: 'IMDb: 7/10 ★★★☆☆', value: 'theory of everything', image: <Image style={{width:106.6, height: 160}} source={require('../pic/everything.jpg')} />,
        name : <Text> 2h 3min | Biography, Drama, Romance | 26 November 2014 (USA) {"\n"} Director: James Marsh {"\n"}Writers: Anthony McCarten (screenplay), Jane Hawking (book){"\n"}
        Stars: Eddie Redmayne, Felicity Jones, Tom Prior </Text> },
        { id: 'IMDb: 8.4/10 ★★★★☆', value: 'A Beautiful Mind', image: <Image style={{width:106.6, height: 160}} source={require('../pic/mind.jpg')} />, 
        name : <Text>  2h 15min | Biography, Drama | 4 January 2002 (USA){"\n"} Director: Ron Howard {"\n"}Writers: Akiva Goldsman, Sylvia Nasar (book){"\n"}
        Stars: Russell Crowe, Ed Harris, Jennifer Connelly </Text> },
      ],*/
    };
  }

  FlatListItemSeparator = () => {
    return (
      <View        
        style={{ height: 0.5, width: '100%', backgroundColor: '#C8C8C8' }}>
      </View>
    );
  };
  
  componentWillMount(){
    this.fetchData();
  }
  
  fetchData = async() => {
    const responce = await fetch('http://192.168.1.11:3000/api/list');
    const json = await responce.json();
    this.setState({data: json.FlatListItems});
  }
  

  GetItem(item) {
    Alert.alert(item);
  }

  render() {
    return (
      <View style={{padding: 10,
        marginBottom: 110}} >
        <FlatList
          data={this.state.data}
          renderItem={({ item }) => (
            <View
            style={{padding: 10,
              borderWidth: 0.5,
              borderColor: 'black',
              borderStyle: "solid" ,
              color: "white",
              flex: 1,
              }}>
              <Text
               style={{padding: 10,
                borderWidth: 0.5,
                borderColor: 'white',
                color: "lightpink",
                borderStyle: "solid" ,
                fontSize: 17,
                flex: 1}}

                onPress={this.GetItem.bind(
                  this,
                   "Area  " + item.strArea 
                )}

                >

                {`${item.strMeal}`}            
              </Text>
              
             
                <View style={{padding: 10,
                  color: "white",
                  flex: 1,
                  flexDirection:"row"
                  }} >

                 

                  <Text style={{padding: 10,
                  color: "lavenderblush",
                  flex: 1,
                  fontSize: 15,
                  fontFamily: "Cochin" ,
                  flexDirection:"row"
                  }}>     

                  {`${item.idMeal}`}
                  </Text>
                  
                  <Image style={{width:106.6, height: 160}}  source={{uri: `${item.strMealThumb}`}} />
                       
                </View>
                
            </View>
          )}
        />
      </View>
    );
  }
}
