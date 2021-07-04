import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import IconPay from 'react-native-vector-icons/MaterialIcons';

export default function Transactions() {
  return (
    <View style={styles.mainView}>
      <View style={{flex: 1}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{fontWeight: 'bold', fontSize: 20, color: '#3D4785'}}>
            Recent Transactions
          </Text>
          <Text>See all</Text>
        </View>

        {/* top button section */}
        <View style={{flexDirection: 'row', paddingVertical: 20}}>
          <TouchableOpacity>
            <View style={styles.topButton}>
              <Text style={{color: 'white', fontSize: 16}}>All</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.topCommonButton}>
              <Text style={{color: 'black', fontSize: 16}}>Income</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.topCommonButton}>
              <Text style={{color: 'black', fontSize: 16}}>Expense</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* payment section */}
        <Text style={{fontSize: 20, color: '#3D4785', fontWeight: 'bold'}}>
          Today
        </Text>
        <View style={styles.paymentMain}>
          <View style={styles.paymentView}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View style={styles.statusIcon}>
                <IconPay name="payment" size={20} color="black" />
              </View>
              <View style={{paddingLeft: 10}}>
                <Text style={styles.overviewText}>Payment</Text>
                <Text>Payment from Andrea</Text>
              </View>
            </View>
            <View>
              <Text style={styles.overviewText}>$ 30.00</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={{marginBottom: 40}}>
        <Image
          source={{
            uri: 'https://i.ibb.co/sw1vyLX/image3.png',
          }}
          style={{width: '100%', height: 300}}
        />
      </View>

      <View style={{flex: -1}}>
        <TouchableOpacity style={styles.buttonViewView}>
          <View style={styles.seeButton}>
            <Text style={{color: 'white', fontSize: 16}}>See Details</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: '#EBF2FA',
    paddingHorizontal: 30,
  },
  topButton: {
    backgroundColor: '#3E4685',
    paddingHorizontal: 30,
    paddingVertical: 5,
    borderRadius: 20,
  },
  topCommonButton: {
    backgroundColor: '#ffffff',
    marginHorizontal: 10,
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 20,
  },
  paymentMain: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 10,
    borderRadius: 15,
    paddingHorizontal: 10,
    marginTop: 20,
  },
  paymentView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  statusIcon: {
    backgroundColor: '#E5E8F9',
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 40,
  },
  overviewText: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  buttonViewView: {
    alignItems: 'center',
    paddingVertical: 15,
  },
  seeButton: {
    backgroundColor: '#3E4685',
    paddingHorizontal: 125,
    paddingVertical: 15,
    borderRadius: 20,
  },
});
