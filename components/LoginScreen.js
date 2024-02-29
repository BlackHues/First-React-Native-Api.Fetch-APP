import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login</Text>
      <TextInput placeholder="Email/Mobile" style={styles.input} />
      <TextInput placeholder="Password" style={styles.input} secureTextEntry />
      <Button title="Login" onPress={() => navigation.navigate('Home')} />
      <Button
        title="Sign Up"
        onPress={() => navigation.navigate('SignUp')}
        style={styles.signupButton}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
  },
  signupButton: {
    marginTop: 10,
  },
});

export default LoginScreen;
