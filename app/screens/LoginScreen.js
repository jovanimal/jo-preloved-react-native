import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

import Screen from '../components/Screen';
import AppTextInput from '../components/AppTextInput';
import ErrorMessage from '../components/ErrorMessage';
import AppButton from '../components/AppButton';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password'),
});

const LoginScreen = () => {
  return (
    <Screen style={styles.container}>
      <Image source={require('../assets/logo-red.png')} style={styles.logo} />

      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={values => console.log(values)}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
          <React.Fragment>
            <AppTextInput
              autoCapitalize="none"
              autoCorrect={false}
              icon="email"
              keyboardType="email-address"
              onBlur={() => setFieldTouched('email')}
              onChangeText={handleChange('email')}
              placeholder="Email"
              // for ios only, it will autofill from keychain
              textContentType="emailAddress"
            />
            <ErrorMessage visible={touched.email} error={errors.email} />
            <AppTextInput
              autoCapitalize="none"
              autoCorrect={false}
              icon="lock"
              onBlur={() => setFieldTouched('password')}
              onChangeText={handleChange('password')}
              placeholder="password"
              secureTextEntry
              // for ios only, it will autofill from keychain
              textContentType="password"
            />
            <ErrorMessage visible={touched.password} error={errors.password} />
            <AppButton title="Login" onPress={handleSubmit} />
          </React.Fragment>
        )}
      </Formik>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 20,
  },
});

export default LoginScreen;
