import React from 'react';
import { Image, View, Text } from 'react-native';
import { Song } from '../../types';
import styles from './styles';


export interface SongListProp {
  song: Song;
}

const SongListItem = (props: SongListProp) => {

  const { song } = props;
  const { setSongId } = useContext(AppContext);

  return (
    <View style={styles.container}>
      <View>
        <Image source={{ uri: song.imageUri }} style={styles.image} />
      </View>
      <View style={styles.rightContainer}>
        <Text style={styles.title}>{song.title}</Text>
        <Text style={styles.artist}>{song.artist}</Text>
      </View>
    </View>
  )
}

export default SongListItem;

