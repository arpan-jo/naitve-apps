import {Formik} from 'formik';
import React from 'react';
import {View, TextInput, Button, Text} from 'react-native';
import * as Yup from 'yup';

const initData = {
  name: '',
  email: '',
};
const TestTwo = () => {
  return (
    <View style={{marginTop: 30}}>
      <Formik
        initialValues={initData}
        validationSchema={Yup.object().shape({
          name: Yup.string()
            .min(5, 'Must be 5 characters or more')
            .required('Required'),
          email: Yup.string()
            .email('Invalid email address')
            .required('Required'),
        })}
        onSubmit={(values, {resetForm}) => {
          console.log(values);
          resetForm(initData);
        }}>
        {({handleChange, handleBlur, handleSubmit, values}) => (
          <View>
            <Text style={{fontSize: 30}}>Name</Text>
            <TextInput
              placeholder="Name"
              onChangeText={handleChange('name')}
              onBlur={handleBlur('name')}
              value={values.name}
            />
            <Text style={{fontSize: 30}}>Email</Text>
            <TextInput
              placeholder="Email"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
            />
            <Button onPress={handleSubmit} title="Submit" />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default TestTwo;
