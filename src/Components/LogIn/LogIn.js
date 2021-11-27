import CheckBox from '@react-native-community/checkbox';
import {useFormik} from 'formik';
import React, {useState} from 'react';
import {useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {useDispatch} from 'react-redux';
import {getStoreData, userLogin} from './helper';
import * as Yup from 'yup';

const LogIn = ({navigation}) => {
  const [hidden, setHidden] = useState(true);
  const [remember, setRemember] = useState(true);
  const [user, setUser] = useState({});
  // console.log(JSON.stringify(user, null, 2));

  const initData = {
    userName: user?.profileData?.emailAddress || '',
    password: user?.password || '',
  };

  const schemaValidation = Yup.object().shape({
    userName: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string()
      .min(6, 'Must be 6 character')
      .required('Password is reqired'),
  });

  const dispatch = useDispatch();

  useEffect(() => {
    getStoreData(setUser);
  }, []);

  const formikprops = useFormik({
    enableReinitialize: true,
    initialValues: initData,
    validationSchema: schemaValidation,
    onSubmit: (values, action) => {
      saveHandler(values, () => {
        action.resetForm();
      });
    },
  });

  const saveHandler = (value, cb) => {
    userLogin(value).then(data => {
      data && navigation.navigate('User');
      remember && dispatch({type: 'UPDATE_USER', payload: value});
    });
  };

  return (
    <View style={styles.main}>
      {/* header image section*/}
      <View style={styles.headerImgView}>
        <Image
          source={{
            uri: 'https://image.freepik.com/free-vector/luxury-gold-template-monogram_1159-5727.jpg',
          }}
          style={styles.headerImg}
        />
      </View>

      {/* email section */}
      <View style={styles.commonView}>
        <View style={{paddingLeft: 15}}>
          <Text style={{paddingTop: 5}}>Email Address</Text>
          <View style={styles.email}>
            <Icon name="mail" size={20} color="black" />
            <TextInput
              style={{paddingLeft: 10}}
              onChangeText={formikprops.handleChange('userName')}
              onBlur={formikprops.handleBlur('userName')}
              value={formikprops?.values?.userName}
            />
          </View>
        </View>
        {formikprops?.errors?.userName && formikprops?.touched ? (
          <Text style={{color: 'red', paddingLeft: 10}}>
            {formikprops?.errors?.userName}
          </Text>
        ) : null}
      </View>

      {/* password section */}
      <View style={styles.commonView}>
        <View style={{paddingHorizontal: 15}}>
          <Text style={{paddingTop: 5}}>Password</Text>
          <View style={styles.password}>
            <View style={styles.email}>
              <Icon name="lock" size={20} color="black" />
              <TextInput
                style={{paddingLeft: 10}}
                secureTextEntry={hidden}
                onChangeText={formikprops.handleChange('password')}
                onBlur={formikprops.handleBlur('password')}
                value={formikprops?.values?.password}
              />
            </View>
            <Icon
              name="eye"
              size={20}
              color="black"
              onPress={() => setHidden(!hidden)}
            />
          </View>
        </View>
        {formikprops?.errors?.password && formikprops?.touched ? (
          <Text style={{color: 'red', paddingLeft: 10}}>
            {formikprops?.errors?.password}
          </Text>
        ) : null}
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingLeft: 8,
        }}>
        <CheckBox
          disabled={false}
          value={remember}
          onValueChange={e => {
            setRemember(!remember);
          }}
        />
        <Text>Remember</Text>
      </View>

      <TouchableOpacity
        style={styles.buttonViewView}
        onPress={formikprops.handleSubmit}>
        <View style={styles.button}>
          <Text style={{color: 'white'}}>LogIn</Text>
        </View>
      </TouchableOpacity>

      {/* email section */}
      {/* <View style={styles.commonView}>
        <View style={{paddingLeft: 15}}>
          <Text style={{paddingTop: 5}}>Email Address</Text>
          <View style={styles.email}>
            <Icon name="mail" size={20} color="black" />
            <TextInput
              placeholder="Username@gmail.com"
              value={email || user?.userName}
              onChangeText={eml => setEmail(eml)}
              style={{paddingLeft: 10}}
            />
          </View>
        </View>
      </View> */}

      {/* password section */}
      {/* <View style={styles.commonView}>
        <View style={{paddingHorizontal: 15}}>
          <Text style={{paddingTop: 5}}>Password</Text>
          <View style={styles.password}>
            <View style={styles.email}>
              <Icon name="lock" size={20} color="black" />
              <TextInput
                placeholder="Your password"
                secureTextEntry={hidden}
                style={{paddingLeft: 10}}
                value={pass || user?.password}
                onChangeText={ps => setPass(ps)}
              />
            </View>
            <Icon
              name="eye"
              size={20}
              color="black"
              onPress={() => setHidden(!hidden)}
            />
          </View>
        </View>
      </View> */}

      {/* login button section */}
      {/* <TouchableOpacity
        style={styles.buttonViewView}
        onPress={() => {
          userLogin(payload)
            .then(data => {
              data && navigation.navigate('User');
              remember && dispatch({type: 'UPDATE_USER', payload: data});
            })
            .catch(err => console.log(err));
        }}>
        <View style={styles.button}>
          <Text style={{color: 'white'}}>LogIn</Text>
        </View>
      </TouchableOpacity> */}
    </View>
  );
};

export default LogIn;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#F3F8FE',
  },
  headerImgView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    marginBottom: 80,
  },
  headerImg: {
    width: 60,
    paddingVertical: 30,
    borderRadius: 50,
    marginTop: 20,
  },
  commonView: {
    marginVertical: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
  },
  email: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  password: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttonViewView: {
    alignItems: 'center',
    paddingVertical: 15,
  },
  button: {
    backgroundColor: '#3E4685',
    paddingHorizontal: 150,
    paddingVertical: 15,
    borderRadius: 20,
  },
  signup: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
