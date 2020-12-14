import React, { useEffect, useState } from 'react';
import { Image, View, Text, TouchableOpacity } from 'react-native';
import { Song } from '../../types';
import { Audio} from 'expo-av';
import styles from './styles';
import { AntDesign, FontAwesome } from '@expo/vector-icons'
import { Sound } from 'expo-av/build/Audio';


export interface PlayerWidgetProps {
  song: Song;
}

const song = {
  id: 1,
  uri: 'https://firebasestorage.googleapis.com/v0/b/fir-b9532.appspot.com/o/songs%2Fsong1.mp3?alt=media&token=a4424b28-93c3-4a0c-a6b9-9136dcf63335',
  imageUri: 'https://mavciefendi.files.wordpress.com/2014/04/fikret-kizilok-asik-veysel.jpg?w=590',
  title: "Titelloo",
  artist: "Mickelangelo"
}

const PlayerWidget = () => {

  const [isPlaying, setIsPlaying] = useState<Boolean>(true);
  const [sound, setSound] = useState<Sound | null>(null);
  const [duration, setDuration] = useState<number | null>(null);
  const [position, setPosition] = useState<number>(0);

  const onPlaybackStatusUpdate = (status: any) => {
    setIsPlaying(status.isPlaying)
    setDuration(status.durationMillis);
    setPosition(status.positionMillis);
  }

  const playCurrentSong = async () => {

    if (sound) {
      await sound.unloadAsync();
    }

    const { sound: newSound } = await Audio.Sound.createAsync(
      { uri: song.uri },
      { shouldPlay: true },
      onPlaybackStatusUpdate
    )
    setSound(newSound);
  }

  const getProgress = () => {
    if (sound === null || duration === null || position === null) {
      return 0;
    }
  
    return (position / duration) * 100
  }

  const onPlayPausePress = async () => {
    if (!sound) {
      return;
    }
    
    if (isPlaying) {
      await sound.pauseAsync();
    }
    else {
      await sound.playAsync();
    }

  }

  useEffect(() => {

    playCurrentSong();

  }, [])


  return (
    <View style={styles.container}>
      <View style={[styles.progress, { width: `${getProgress()}%` }]} />

      <View style={styles.row}>
        <Image source={{ uri: song.imageUri }} style={styles.image} />
        <View style={styles.rightContainer}>

          <View style={styles.nameContainer}>
            <Text style={styles.title}>{song.title}</Text>
            <Text style={styles.artist}>{song.artist}</Text>
          </View>

          <View style={styles.iconsContainer}>
            <AntDesign name="hearto" size={30} color={"white"} />
            <TouchableOpacity onPress={onPlayPausePress}>
              <FontAwesome name={isPlaying ? 'pause' : 'play'} size={30} color={"white"} />
            </TouchableOpacity>
          </View>

        </View>
      </View>
    </View>
  )
}

export default PlayerWidget;

