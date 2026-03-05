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

export default function PhoneNumber() {
  const [number, setNumber] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const verifyNumber = () => {
    if (!number) {
      setError('Please enter your mobile number');
      return;
    }
    setError('');
    router.push('/(auth)/verifynumber');
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled"
      >
        <Text style={styles.label}>Mobile Number</Text>

        <View style={styles.inputContainer}>
          <Text style={styles.countryCode}>+234</Text>
          <View style={styles.divider} />
          <TextInput
            style={styles.input}
            placeholder="80 000 0000"
            keyboardType="phone-pad"
            placeholderTextColor="#A1A1A1"
            value={number}
            onChangeText={text => {
              setNumber(text);
              if (text) setError('');
            }}
            maxLength={10}
          />
        </View>

        {/* Error message */}
        {error.length > 0 && <Text style={styles.error}>{error}</Text>}

        <View style={styles.buttonContainer}>
          <CustomButton
            onPress={verifyNumber}
            style={{ borderRadius: 25 }}
            title="Verify Phone Number"
          />
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    // padding: 20,
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
    fontFamily:'MontserratMedium',
    fontSize: 16,
    color: '#A1A1A1',
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