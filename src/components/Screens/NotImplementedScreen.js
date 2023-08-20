import {View, Text, Image, StyleSheet}  from "react-native";

const NotImplementedScreen = () => {
  return(
    <View>
      <Text>NotImplemented!</Text>
      <Image source={require('assets/R.jpg')}
        style={styles.Image}
        resizeMode= 'contain'
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  text:{
    fontSize: 18,
    fontWeight: "500",
    color: 'gray'
  },

  image:{
    width: '80%',
    aspectRatio: 2
  }
});

export default NotImplementedScreen;
