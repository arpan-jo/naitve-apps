import React, {useState} from 'react';

import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Button,
  FlatList,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import shortid from 'shortid';

export default function ToDo() {
  const [display, setDisplay] = useState(false);
  const [task, setTask] = useState(null);
  const [allTasks, setAllTasks] = useState([]);
  const [completeTasks, setCompleteTasks] = useState([]);
  const [inCompleteTasks, setInCompleteTasks] = useState([]);
  // const [toggleCheckBox, setToggleCheckBox] = useState(false);

  const handleCheck = item => {
    const newItem = allTasks?.filter(singleItem => singleItem?.id !== item?.id);
    let tempItem = {
      ...item,
      isCheck: item?.isCheck ? false : true,
    };
    setAllTasks([...newItem, tempItem]);
    setCompleteTasks([...completeTasks, tempItem]);
    setInCompleteTasks([...inCompleteTasks, newItem]);
  };

  const handleAdd = () => {
    const tasks = {
      todo: task,
      id: shortid.generate(),
      isCheck: false,
    };
    setAllTasks([JSON.parse(JSON.stringify(tasks)), ...allTasks]);
    setTask(null);
  };

  let fullTaskList = [];
  if (completeTasks.length) fullTaskList = completeTasks;
  else if (inCompleteTasks.length) fullTaskList = inCompleteTasks;
  else fullTaskList = allTasks;

  const handleComplete = () => {
    let complete = allTasks.filter(itm => itm?.isCheck === true);
    setCompleteTasks(complete);
    setInCompleteTasks([]);
  };

  const handleIncomplete = () => {
    let inComplete = allTasks.filter(itm => itm?.isCheck === false);
    setInCompleteTasks(inComplete);
    setCompleteTasks([]);
  };

  return (
    <SafeAreaView style={{backgroundColor: '#FEF3C7', flex: 1}}>
      <Text style={styles.navText}>Todo App</Text>

      <TouchableOpacity
        style={styles.buttonSection}
        onPress={() => setDisplay(!display)}>
        <Text style={styles.button}>+ Add New Task</Text>
      </TouchableOpacity>

      <View style={{marginHorizontal: 20}}>
        {display && (
          <View
            style={{
              backgroundColor: '#FFFFFF',
              flexDirection: 'row',
              justifyContent: 'space-between',
              borderRadius: 5,
            }}>
            <TextInput
              style={{paddingHorizontal: 10}}
              placeholder="Your Todos..."
              value={task}
              onChangeText={text => setTask(text)}
            />
            <TouchableOpacity onPress={() => setDisplay(!display)}>
              <Text
                style={{fontSize: 40, paddingRight: 10}}
                onPress={() => handleAdd()}>
                +
              </Text>
            </TouchableOpacity>
          </View>
        )}

        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            marginTop: 10,
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: '#FBBF24',
              paddingHorizontal: 25,
              paddingVertical: 10,
              borderRadius: 5,
            }}
            onPress={() => handleIncomplete()}>
            <Text style={{fontSize: 20}}>Incomplete</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              backgroundColor: '#1F2937',
              paddingHorizontal: 25,
              paddingVertical: 10,
              borderRadius: 5,
            }}
            onPress={() => handleComplete()}>
            <Text style={{color: 'white', fontSize: 20}}>Complete</Text>
          </TouchableOpacity>
        </View>

        <View style={{marginTop: 10}}>
          <FlatList
            data={fullTaskList}
            renderItem={({item, index}) => (
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <CheckBox
                  disabled={false}
                  value={item?.isCheck}
                  onValueChange={() => handleCheck(item)}
                />
                {item && (
                  <Text
                    style={{
                      width: 400,
                      fontSize: 20,
                      backgroundColor: '#FFFFFF',
                      marginVertical: 3,
                      padding: 7,
                    }}>
                    {item?.todo}
                  </Text>
                )}
              </View>
            )}
            keyExtractor={(item, index) => index}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  navText: {
    textAlign: 'center',
    fontSize: 25,
    backgroundColor: '#FBCC4D',
    padding: 10,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  buttonSection: {
    marginLeft: 100,
    marginRight: 100,
    backgroundColor: '#FBCC4D',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  button: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
  },
});
