import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const SignUpScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Sign Up</Text>
      {/* Add your form inputs for name, last name, email, mobile, address, password, and confirm password here */}
      <Button
        title="Sign Up"
        onPress={() => {
          // Implement sign-up logic
          navigation.navigate('Login');
        }}
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
});

export default SignUpScreen;
