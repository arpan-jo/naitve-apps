import React from 'react';
import {useEffect} from 'react';
import {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  BackHandler,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  getStoreData,
  uploadImage,
  uploadImageWithBase,
  uploadImageWithoutBase,
} from '../LogIn/helper';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const User = ({navigation}) => {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({});
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  // console.log(JSON.stringify(userData, null, 2));

  const state = useSelector(state => state);
  // console.log(file);

  useEffect(() => {
    getStoreData(setUserData);
    BackHandler.addEventListener('hardwareBackPress', () => true);
  }, []);

  const launchCam = () => {
    const options = {
      mediatype: 'photo',
      saveToPhotos: false,
      includeBase64: true,
    };
    launchCamera(options, res => {
      if (res?.assets) {
        uploadImageWithBase(res?.assets[0], setFile).then(data => {
          if (data) {
            setLoading(true);
            setFile(res?.assets[0]);
          }
        });

        // uploadImageWithoutBase(res?.assets);
      }
    });
  };

  const openGallary = () => {
    const options = {
      mediatype: 'photo',
      includeBase64: false,
    };
    launchImageLibrary(options, res => {
      if (res?.assets) {
        uploadImageWithoutBase(res?.assets).then(data => {
          if (data) {
            setLoading(true);
            setFile(res?.assets[0]);
          }
        });
      }
    });
  };

  return (
    <View style={styles.mainView}>
      <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
        {/* image section */}
        <View style={styles.imageSection}>
          <View style={styles.headerIcons}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>:</Text>
          </View>
          <View style={{alignItems: 'center'}}>
            {loading ? (
              <Image source={file} style={styles.topImage} />
            ) : (
              <Text>Loading</Text>
            )}
            <Text style={styles.name}>
              Name: {userData?.profileData?.userName}
            </Text>
            <Text>Email: {userData?.profileData?.emailAddress}</Text>
            <Text>Contact: {userData?.profileData?.contact}</Text>
            <Text>Designation: {userData?.profileData?.designationName}</Text>
            <Text>Department: {userData?.profileData?.departmentName}</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <TouchableOpacity
            style={styles.buttonViewView}
            onPress={() => launchCam()}>
            <View style={styles.button}>
              <Text style={{color: 'white'}}>Camera</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonViewView}
            onPress={() => openGallary()}>
            <View style={styles.button}>
              <Text style={{color: 'white'}}>Open Gallary</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonViewView}
            onPress={() => {
              navigation.navigate('Login');
              dispatch({type: 'REMOVE_USER', payload: {}});
            }}>
            <View style={styles.button}>
              <Text style={{color: 'white'}}>Log Out</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default User;

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: '#EBF2FA',
    paddingHorizontal: 30,
  },
  headerIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  imageSection: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 30,
    borderRadius: 20,
  },
  topImage: {
    width: 100,
    height: 100,
    borderRadius: 80,
    marginBottom: 10,
  },
  name: {
    color: '#545B91',
    fontSize: 25,
    fontWeight: 'bold',
  },
  buttonViewView: {
    alignItems: 'center',
    paddingVertical: 15,
  },
  button: {
    backgroundColor: '#3E4685',
    paddingHorizontal: 15,
    paddingVertical: 15,
    marginHorizontal: 5,
    borderRadius: 20,
  },
});
