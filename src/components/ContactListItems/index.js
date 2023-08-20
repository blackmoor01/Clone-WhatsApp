import {Text, Image, View, StyleSheet, Pressable} from 'react-native';
import {useNavigation} from "@react-navigation/native";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

const ContactListItems = ({user}) =>{
  const navigation = useNavigation();
  return(
    <Pressable onPress={() =>{}} style={styles.container}>
      <Image source={require(user.image)} style={styles.Image}/>

    <View style={styles.content}>
      <Text style={styles.name} numberOfLines={1}>
        {user.name}
      </Text>
      <Text style={styles.subTitle} numberOfLines={2}>{user.status}</Text>
    </View>
    </Pressable>

  );
};

const styles = StyleSheet.create({
  container:{
    flexDirection:'row',
    marginHorizontal:10,
    marginVertical: 3,
    alignItems: 'center',
    height: 70,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'lightgray'
  },

  Image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10
  },

  name:{
    fontWeight: 'bold'
  },

  subTitle:{
    color:'gray'
  }
})
export default ContactListItems;
