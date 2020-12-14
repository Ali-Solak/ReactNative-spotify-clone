import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 20,
  },

  name: {
    color: 'white',
    fontSize: 30,
    fontWeight: "bold",
  },

  image: {
    width: 200,
    height: 200,
    margin: 15,
  },

  creatorContainer: {
    flexDirection: 'row',
    margin: 10,
  },

  creator: {
    color: 'lightgray',
    fontSize: 15,
    margin: 5,
  },
  likes: {
    color: 'lightgray',
    fontSize: 15,
    margin: 5,
  },
  button:
  {
    backgroundColor: '#1CD05D',
    height: 60,
    width: 160,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  }

});

export default styles;