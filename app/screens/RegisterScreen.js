import React from 'react';
import { Image, StyleSheet } from 'react-native';
import * as Yup from 'yup';

import Screen from '../components/Screen';
import AppForm from '../components/forms/AppForm';
import AppFormField from '../components/forms/AppFormField';
import SubmitButton from '../components/forms/SubmitButton';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password'),
});

const RegisterScreen = () => {
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{ name: '', email: '', password: '' }}
        onSubmit={values => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          autoCorrect={false}
          icon="account"
          name="name"
          placeholder="Name"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          name="email"
          placeholder="Email"
          // for ios only, it will autofill from keychain
          textContentType="emailAddress"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="password"
          secureTextEntry
          // for ios only, it will autofill from keychain
          textContentType="password"
        />
        <SubmitButton title="Register" />
      </AppForm>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default RegisterScreen;
