import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const LogIn = ({navigation}) => {
  const [email, setEmail] = useState('');
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
              placeholder="Username@gmail.com"
              value={email}
              onChangeText={eml => setEmail(eml)}
            />
          </View>
        </View>
      </View>

      {/* password section */}
      <View style={styles.commonView}>
        <View style={{paddingHorizontal: 15}}>
          <Text style={{paddingTop: 5}}>Password</Text>
          <View style={styles.password}>
            <View style={styles.email}>
              <Icon name="lock" size={20} color="black" />
              <TextInput placeholder="Your password" secureTextEntry={true} />
            </View>
            <Icon name="eye" size={20} color="black" />
          </View>
        </View>
      </View>

      {/* login button section */}
      <TouchableOpacity
        style={styles.buttonViewView}
        onPress={() => {
          setEmail('');
          navigation.navigate(
            'User',

            // , {
            //   email: email,
            // }
          );
        }}>
        <View style={styles.button}>
          <Text style={{color: 'white'}}>LogIn</Text>
        </View>
      </TouchableOpacity>

      {/* singup section */}
      <View style={styles.signup}>
        <Text>Signup</Text>
        <Text>Forget Password?</Text>
      </View>
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
