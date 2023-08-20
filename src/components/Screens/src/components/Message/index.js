import {Text, View} from 'react-native';
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

const Message = ({message}) => {
  const isItMyMessage = () => {
    return(
      message.user.id === 'u1'
    );
  };
  return(
    <View style={[styles.container,{
      backgroundColor: isItMyMessage() ? '#DCF8C5' : 'white',
      alignSelf: isItMyMessage() ? 'flex-end' : 'flex-start'
    }]}>
      <Text>{message.text}</Text>
      <Text style={styles.time}>{dayjs(message.createdAt).fromNow(true)}</Text>
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    margin: 5,
    padding: 10,
    borderRadius: 10,
    maxWidth: '80%',
    shadowColor: '#000',

    shadowOffset:{
      width: 0,
      height:1
    },
    
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1
  },

  times: {
    color: 'gray',
    alignSelf: "flex-end"
  }
});
export default Message;
