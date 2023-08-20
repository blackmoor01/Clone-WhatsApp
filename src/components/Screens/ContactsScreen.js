import {FlatList} from 'react-native';
import chats from 'assets/data/chats.json';
import ContactListItems from "../ContactListItems";


const ContactsScreen =()=>{
  return(
    <FlatList data={chats} renderItem={({item}) => <ContactListItems user ={item.user} /> }
              style={{backgroundColor: 'white'}}/>

  );
};

export default ContactsScreen;
