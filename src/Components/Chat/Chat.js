import React, {useState, useEffect} from 'react';
import {
  View,
  Image,
  Text,
  FlatList,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';
import {payload} from '../../FakeData/FakeData';
import shortid from 'shortid';
import moment from 'moment';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Chat() {
  const [byName, setByName] = useState('');
  const [data, setData] = useState([]);
  let dayName = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  useEffect(() => {
    setData(payload);
  }, [payload]);

  const searchResult = data.filter(user =>
    user?.name?.toLowerCase().includes(byName?.toLowerCase()),
  );

  return (
    <View style={styles.mainVeiw}>
      <View>
        <View style={styles.headerView}>
          <View style={styles.chatView}>
            <Image
              source={{
                uri: 'https://images.unsplash.com/photo-1591258739299-5b65d5cbb235?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
              }}
              style={styles.chatHeaderImg}
            />
            <Text style={styles.chatText}>Chats</Text>
          </View>
          <View style={styles.icons}>
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
          <View style={styles.textInput}>
            <Icon name="search" size={20} color="gray" />
            <TextInput
              placeholder="Search"
              value={byName}
              onChangeText={name => setByName(name)}
            />
          </View>
        </View>
      </View>

      <View style={{flex: 1}}>
        <FlatList
          showsVerticalScrollIndicator={false}
          vertical={true}
          data={searchResult}
          renderItem={({item, index}) => (
            <View style={styles.flatListMain}>
              <View style={styles.flatListImgPart}>
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
            <View style={styles.listHeaderMain}>
              <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                data={searchResult}
                ItemSeparatorComponent={() => <View style={{width: 30}}></View>}
                renderItem={({item, index}) => (
                  <View style={styles.listHeaderImgPart}>
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

const styles = StyleSheet.create({
  mainVeiw: {
    flex: 1,
    paddingHorizontal: 15,
  },
  headerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  chatView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  chatHeaderImg: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },
  chatText: {
    fontSize: 40,
    paddingHorizontal: 10,
  },
  icons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    backgroundColor: '#EFF0F1',
    borderRadius: 20,
    marginTop: 10,
    paddingLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  flatListMain: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  flatListImgPart: {
    flexDirection: 'row',
    marginVertical: 10,
    alignItems: 'center',
  },
  listHeaderMain: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  listHeaderImgPart: {
    width: 90,
    marginVertical: 10,
    alignItems: 'center',
    backgroundColor: 'red',
    // marginHorizontal: 20,
  },
});
