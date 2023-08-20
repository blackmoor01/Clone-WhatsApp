import {TextInput} from 'react-native';
import {AntDesign, MaterialIcons} from '@expo/vector-icons';
import {useState} from 'react';
import {SafeAreaView} from "react-native-safe-area-context";

const InputBox = () => {
  const[newMessage,setNewMessage] = useState('');

  const OnSend = () => {
    console.warn("Sending a message!", newMessage)

    setNewMessage('');
  }
  return(
    <SafeAreaView edges={['bottom']} style={styles.container}>
      {/* Icon */}
      <AntDesign name={'plus'} size={20} color={'royalblue'} />

      {/* TextInput */}
      <TextInput style={styles.Input} placeholder={"Enter your message here!"}
        value={newMessage} onChangeText={setNewMessage}/>

      {/* Icon */}
      <MaterialIcons onPress={OnSend} style={styles.Send} name={'send'} size={16} color={'white'} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Input: {
    flex: 1,
    backgroundColor: 'white',
    padding: 5,
    paddingHorizontal: 10,
    marginHorizontal: 10,

    borderRadius: 50,
    borderColor: 'lightgray',
    borderWidth: StyleSheet.hairlineWidth


  },

  Container: {
    flexDirection: 'row',
    backgroundColor: 'whitesmoke',
    padding: 5,
    paddingHorizontal: 10,
    alignItems: 'center'
  },

  Send: {
    backgroundColor: 'royalblue',
    padding: 7,
    overflow: 'hidden',
    borderRadius: 15
  }

})
export default InputBox;
