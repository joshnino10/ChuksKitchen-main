import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
    Keyboard,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableWithoutFeedback,
    View,
} from 'react-native';
import CustomButton from '../CustomButton/CustomButton';

export default function EmailLogin() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const verifyNumber = () => {
    if (!email) {
      setError('Please enter your email');
      return;
    }
    setError('');
    router.push('/(tabs)/home');
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled"
      >
        <Text style={styles.label}>Email Address</Text>

        <View style={styles.inputContainer}>
        
          <TextInput
            style={styles.input}
            placeholder="example@gmail.com"
            keyboardType="email-address"
            placeholderTextColor="#A1A1A1"
            value={email}
            onChangeText={text => {
              setEmail(text);
              if (text) setError('');
            }}
           
          />
        </View>

        {/* Error message */}
        {error.length > 0 && <Text style={styles.error}>{error}</Text>}

        <View style={styles.buttonContainer}>
          <CustomButton
            onPress={verifyNumber}
            style={{ borderRadius: 10 }}
            title="Log in"
          />
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {

    flexGrow: 1,
    justifyContent: 'center',
  },
  label: {
    fontFamily: 'MontserratMedium',
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 8,
    color: '#000000',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 51,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 12,
    backgroundColor: '#F6F6F6',
  },
  countryCode: {
    fontSize: 16,
    color: '#555',
  },
  divider: {
    width: 1,
    height: '60%',
    backgroundColor: '#ccc',
    marginHorizontal: 8,
  },
  input: {
    fontFamily: 'MontserratMedium',
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  buttonContainer: {
    marginTop: 30,
  },
  error: {
    color: 'red',
    marginTop: 5,
    fontSize: 14,
  },
});