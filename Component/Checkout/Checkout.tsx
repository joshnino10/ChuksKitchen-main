import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
  ActivityIndicator,
} from 'react-native';
import { useRouter } from 'expo-router';
import { useCart } from '../../context/CartContext';
import Ionicons from '@expo/vector-icons/Ionicons';
import PaymentMethod from '../PaymentMethod/PaymentMethod';

export default function CheckoutOrder() {
  const { totalPrice } = useCart();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const deliveryFee = 0;
  const total = totalPrice + deliveryFee;

  const gotoOrderConfirmed = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      router.push('/orderconfirm');
    }, 1500); // simulate network delay
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="chevron-back" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={{ width: 24, height: 24 }}
            source={require('../../assets/images/cardproduct.png')}
          />
        </TouchableOpacity>
      </View>

      {/* Payment Method Section */}
      <ScrollView>
        <PaymentMethod />
      </ScrollView>

      {/* Checkout Section */}
      <View style={styles.checkoutContainer}>
        <View style={styles.priceRow}>
          <Text style={styles.priceLabel}>Subtotal</Text>
          <Text style={styles.priceValue}>{totalPrice}</Text>
        </View>

        <View style={styles.priceRow}>
          <Text style={styles.priceLabel}>Delivery Fee</Text>
          <Text style={styles.priceValue}>
            {deliveryFee === 0 ? 'Free' : `${deliveryFee}`}
          </Text>
        </View>

        <View style={styles.divider} />

        <View style={styles.priceRow}>
          <Text style={styles.totalText}>Total</Text>
          <Text style={styles.totalAmount}>{total}</Text>
        </View>

        <TouchableOpacity
          style={styles.checkoutButton}
          onPress={gotoOrderConfirmed}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator color="white" size="small" />
          ) : (
            <Text style={styles.checkoutText}>Confirm Order</Text>
          )}
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  checkoutContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderTopWidth: 1,
    borderColor: '#eee',
  },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  priceLabel: {
    color: '#888',
    fontSize: 16,
    fontFamily: 'Poppins-Regular', // restored font
  },
  priceValue: {
    fontSize: 16,
    color: '#888',
    fontFamily: 'Poppins-Regular', // restored font
  },
  divider: {
    height: 1,
    backgroundColor: '#eee',
    marginVertical: 10,
  },
  totalText: {
    fontSize: 18,
    fontWeight: '600',
    fontFamily: 'Poppins-SemiBold', 
  },
  totalAmount: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Poppins-Bold', 
  },
  checkoutButton: {
    marginHorizontal: 25,
    backgroundColor: '#FE8300',
    padding: 16,
    borderRadius: 12,
    marginTop: 15,
    alignItems: 'center',
  },
  checkoutText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
    fontFamily: 'Poppins-SemiBold', 
  },
});