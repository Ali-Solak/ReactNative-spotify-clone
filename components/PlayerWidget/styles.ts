import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({

  title: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    margin: 10,
  
  },

  progress: {
    height: 3,
    width: '100%',
    backgroundColor: '#bcbcbc',
  },

  row: {
    flexDirection: 'row',
  },

  artist: {
    color: 'lightgray',
    fontSize: 18,
  },
  image: {
    marginRight: 10,
    width: 65,
    height: 65,
  },
  container: {
    position: 'absolute',
    bottom: 45,
    width: '100%',
    backgroundColor: '#131313',
    borderWidth: 2,
    borderColor: 'black',
  },
  rightContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    
  },
  iconsContainer: {
    flexDirection: 'row',
    alignItems: "center",
    width: 100,
    justifyContent: 'space-around',
  }
})

export default styles;