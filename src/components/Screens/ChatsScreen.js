import {FlatList} from 'react-native';
import chats from './assets/data/chats.json';
import ChatListItems from '../ChatListItems';
const ChatsScreen = () => {
  return(
    <FlatList data={chats} renderItem={({item}) => <ChatListItems chat={item} /> }
    style={{backgroundColor: 'white'}}/>
  );
};


export default ChatsScreen;
