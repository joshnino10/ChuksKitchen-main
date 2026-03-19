import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
  ActivityIndicator,
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
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const verifyEmail = () => {
    if (!email) {
      setError('Please enter your email');
      return;
    }

    // ✅ basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setError('');
    setLoading(true);

    // simulate API request / navigation delay
    setTimeout(() => {
      setLoading(false);
      router.replace('/(tabs)/home'); // navigate only if valid
    }, 1000);
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
            onChangeText={(text) => {
              setEmail(text);
              if (text) setError('');
            }}
          />
        </View>

        {/* Error message */}
        {error.length > 0 && <Text style={styles.error}>{error}</Text>}

        <View style={styles.buttonContainer}>
          {loading ? (
            <ActivityIndicator size="large" color="#FE8300" />
          ) : (
            <CustomButton
              onPress={verifyEmail}
              style={{ borderRadius: 10 }}
              title="Log in"
            />
          )}
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