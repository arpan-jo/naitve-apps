import React from 'react';
import {
  View,
  Image,
  Text,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {payload} from '../../FakeData/FakeData';
import shortid from 'shortid';

// const Item = ({title}) => (
//   <View>
//     <Text>{title}</Text>
//   </View>
// );

console.log(payload);
export default function Chat() {
  // const renderItem = ({payload}) => <Item title={payload.name} />;
  return (
    <SafeAreaView>
      <View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View
            style={{
              flexDirection: 'row',
              paddingHorizontal: 10,
              alignItems: 'center',
            }}>
            <Image
              source={require('../../Images/download.jpeg')}
              style={{width: 50, height: 50}}
            />
            <Text style={{fontSize: 40}}>Chats</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              paddingHorizontal: 10,
              alignItems: 'center',
            }}>
            <Image
              source={require('../../Images/download.jpeg')}
              style={{width: 50, height: 50, borderRadius: 50}}
            />

            <Text>Chats</Text>
          </View>
        </View>
      </View>
      <FlatList
        data={payload}
        renderItem={({item, index}) => (
          <View
            style={{
              flexDirection: 'row',
              paddingHorizontal: 10,
              marginVertical: 10,
              alignItems: 'center',
            }}>
            <TouchableOpacity onPress={() => alert('clciked')}>
              <Image
                source={{
                  uri: `${item?.profileImg}`,
                }}
                style={{width: 60, height: 60, borderRadius: 50}}
              />
            </TouchableOpacity>

            <View style={{paddingHorizontal: 20}}>
              <Text>{item?.name}</Text>
              <Text>
                {item?.lastMessage} {item?.lastMessageTime}
              </Text>
            </View>
          </View>
        )}
        keyExtractor={() => shortid.generate()}
      />
    </SafeAreaView>
  );
}
