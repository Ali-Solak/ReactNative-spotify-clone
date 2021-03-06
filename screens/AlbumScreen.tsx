import { useRoute } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import { Album } from '../types';
import albumDetails from '../data/albumDetails';
import SongListItem from '../components/SongListItem';
import AlbumHeader from '../components/AlbumHeader';

const AlbumScreen = () => {

  const route = useRoute();

  useEffect(() => {
    console.log(route);
  }, [])


  return (
    <View>
      <FlatList
        data={albumDetails.songs}
        renderItem={({ item }) => <SongListItem song={item} />}
        keyExtractor={item => item.id.toString()}
        ListHeaderComponent={() => <AlbumHeader album={albumDetails} />}
      />
    </View>
  )
}

export default AlbumScreen;