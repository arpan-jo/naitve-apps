import React, {useState, useEffect} from 'react';
import {
  View,
  Image,
  Text,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {payload} from '../../FakeData/FakeData';
import shortid from 'shortid';
import moment from 'moment';
import Icon from 'react-native-vector-icons/FontAwesome';
import {} from 'react';

export default function Chat() {
  const [byName, setByName] = useState('');
  const [data, setData] = useState([]);
  let dayName = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  useEffect(() => {
    setData(payload);
  }, []);
  // will implement search
  console.log(data);

  return (
    <View style={{paddingHorizontal: 15}}>
      <View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image
              source={{
                uri: 'https://images.unsplash.com/photo-1591258739299-5b65d5cbb235?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
              }}
              style={{
                width: 60,
                height: 60,
                borderRadius: 50,
              }}
            />
            <Text style={{fontSize: 40, paddingHorizontal: 10}}>Chats</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Icon name="camera" size={30} color="black" />
            <Icon
              name="pencil"
              size={30}
              color="black"
              style={{paddingLeft: 30}}
            />
          </View>
        </View>
        <View>
          <View
            style={{
              backgroundColor: '#EFF0F1',
              borderRadius: 20,
              marginTop: 10,
            }}>
            <TextInput
              placeholder="Search"
              value={byName}
              onChangeText={t => setByName(t)}
            />
          </View>
        </View>
      </View>

      <View>
        <FlatList
          vertical={true}
          data={data}
          renderItem={({item, index}) => (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View
                style={{
                  flexDirection: 'row',
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
                    {item?.lastMessage} {' - '}
                    {moment().format('L') === item?.lastMessageDate
                      ? item?.lastMessageTime
                      : // : moment(item?.lastMessageDate).format('ddd')
                        dayName[new Date(item?.lastMessageDate).getDay()]}
                  </Text>
                </View>
              </View>
              <View>
                <Icon name="bell" size={12} color="gray" />
              </View>
            </View>
          )}
          ListHeaderComponent={
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                data={payload}
                renderItem={({item, index}) => (
                  <View
                    style={{
                      width: 90,
                      marginVertical: 10,
                      alignItems: 'center',
                    }}>
                    <Image
                      source={{
                        uri: `${item?.profileImg}`,
                      }}
                      style={{width: 60, height: 60, borderRadius: 50}}
                    />
                    <Text>{item?.name}</Text>
                  </View>
                )}
                keyExtractor={() => shortid.generate()}
              />
            </View>
          }
          keyExtractor={() => shortid.generate()}
        />
      </View>
      <View>
        <Icon name="wechat" size={30} color="black" />
      </View>
    </View>
  );
}
