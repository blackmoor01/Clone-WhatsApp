import {Text, Image, View, StyleSheet, Pressable} from 'react-native';
import {useNavigation} from "react-navigation/native";
import dayjs from "dayjs";
import chat from 'assets/data/chats.json'
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

const ChatListItems = ({chat}) =>{
  const navigation = useNavigation();
  return(
    <Pressable onPress={() =>navigation.navigate('Chat', {id: chat.id, name: chat.user.name})} style={styles.container}>
      <Image source={require(chat.user.image)} style={styles.Image}/>

      <View style={styles.content}>
        <View style={styles.row}>
          <Text style={styles.name} numberOfLines={1}>
            {chat.user.name}
          </Text>
          <Text style={styles.subTitle}>{dayjs(chat.lastMessage.createdAt).fromNow(true)}</Text>
        </View>
        <Text style={styles.subTitle} numberOfLines={2}>{chat.lastMessage.text}</Text>
      </View>
    </Pressable>

  );
};

const styles = StyleSheet.create({
  container:{
    flexDirection:'row',
    marginHorizontal:10,
    marginVertical: 3,
    height: 70,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'lightgray'
  },

  content:{
    flex: 1
  },

  Image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10
  },

  name:{
    flex: 1,
    fontWeight: 'bold'
  },

  row:{
    flexDirection: 'row',
    marginBottom: 5
  },

  subTitle:{
    color: 'gray'
  }
})
export default ChatListItems;
