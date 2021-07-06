import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import IconPay from 'react-native-vector-icons/MaterialIcons';
import IconDolar from 'react-native-vector-icons/FontAwesome';

const User = ({route, navigation}) => {
  // const {email} = route.params;
  const date = new Date().toDateString();

  return (
    <View style={styles.mainView}>
      <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
        {/* image section */}
        <View style={styles.imageSection}>
          <View style={styles.headerIcons}>
            <Icon name="menufold" size={20} color="black" />
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>:</Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <Image
              source={{
                uri: 'https://image.freepik.com/free-photo/smiling-confident-businesswoman-posing-with-arms-folded_1262-20950.jpg',
              }}
              style={styles.topImage}
            />
            <Text style={styles.name}>Hira Riaz</Text>
            <Text>UX/UI Designer</Text>
            {/* <Text>{email}</Text> */}
          </View>
          <View style={styles.priceSection}>
            <View>
              <Text style={styles.priceText}>$ 8900</Text>
              <Text style={{textAlign: 'center'}}>Income</Text>
            </View>
            <View>
              <Text style={styles.priceText}>$ 5500</Text>
              <Text style={{textAlign: 'center'}}>Expenses</Text>
            </View>
            <View>
              <Text style={styles.priceText}>$ 890</Text>
              <Text style={{textAlign: 'center'}}>Loan</Text>
            </View>
          </View>
        </View>

        {/* overview section */}
        <View style={styles.overview}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={styles.name}>Overview</Text>
            <Icon
              name="bells"
              size={20}
              color="black"
              style={{paddingLeft: 10}}
            />
          </View>
          <View>
            <Text style={{color: '#545B91', fontWeight: 'bold'}}>{date}</Text>
          </View>
        </View>

        {/* status section sent */}
        <View style={styles.statusMain}>
          <View style={styles.statusView}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View style={styles.statusIcon}>
                <Icon
                  name="arrowup"
                  size={20}
                  color="black"
                  style={{paddingHorizontal: 10}}
                />
              </View>
              <View style={{paddingLeft: 10}}>
                <Text style={styles.overviewText}>Sent</Text>
                <Text>Sending Payment to Clients</Text>
              </View>
            </View>
            <View>
              <Text style={styles.overviewText}>$ 150</Text>
            </View>
          </View>
        </View>

        {/* status section recieve */}
        <View style={styles.statusMain}>
          <View style={styles.statusView}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View style={styles.statusIcon}>
                <Icon
                  name="arrowdown"
                  size={20}
                  color="black"
                  style={{paddingHorizontal: 10}}
                />
              </View>
              <View style={{paddingLeft: 10}}>
                <Text style={styles.overviewText}>Receive</Text>
                <Text>Receiving Salary from company</Text>
              </View>
            </View>
            <View>
              <Text style={styles.overviewText}>$ 250</Text>
            </View>
          </View>
        </View>

        {/* status section loan */}
        <View style={styles.statusMain}>
          <View style={styles.statusView}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View style={styles.statusIcon}>
                <IconDolar
                  name="dollar"
                  size={20}
                  color="black"
                  style={{paddingHorizontal: 15}}
                />
              </View>
              <View style={{paddingLeft: 10}}>
                <Text style={styles.overviewText}>Loan</Text>
                <Text>Loan for the Car</Text>
              </View>
            </View>
            <View>
              <Text style={styles.overviewText}>$ 400</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* footer section */}
      {/* <View> */}
      <View style={styles.footer}>
        <Icon name="home" size={40} color="black" />
        <IconPay
          name="payment"
          size={40}
          color="black"
          onPress={() => navigation.navigate('Payment')}
        />
        <View style={styles.plusIcon}>
          <Icon name="plus" size={20} color="white" />
        </View>
        <Text style={{fontSize: 35}}>$</Text>
        <Icon name="user" size={30} color="black" />
      </View>
      {/* </View> */}
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
  priceSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  priceText: {
    color: '#545B91',
    fontSize: 20,
    fontWeight: '700',
  },
  overview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
  },
  statusMain: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 10,
    borderRadius: 15,
    paddingHorizontal: 10,
    marginVertical: 8,
  },
  statusView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  statusIcon: {
    backgroundColor: '#E5E8F9',
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderRadius: 40,
  },
  overviewText: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  plusIcon: {
    backgroundColor: '#3D4584',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
});
