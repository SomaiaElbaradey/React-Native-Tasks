import React, { Component } from 'react';
import {ScrollView } from 'react-native';
import axios from 'axios' ;
import AlbumDelail from './AlbumDetail' ;


export default class AlbumList extends Component {
  state= {
    albums:[]
  };
  
  renderAlbum(){
    return this.state.albums.map(album =>
      <AlbumDelail key={album.title} album={album}/>
      );
  }
  
  componentWillMount(){
      axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(Response => this.setState({albums: Response.data}))
  }

  render() {
    console.log(this.state)
    return (
      <ScrollView>
        {this.renderAlbum()}
      </ScrollView>
    );
  }
  
}
