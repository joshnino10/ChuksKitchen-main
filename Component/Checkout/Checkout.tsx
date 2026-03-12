import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image
} from 'react-native';
import { useRouter } from 'expo-router';
import { useCart } from '../../context/CartContext';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function CheckoutOrder() {

  const { totalPrice } = useCart();
  const router = useRouter();

  const deliveryFee = 0;
  const total = totalPrice + deliveryFee;

  return (
    <SafeAreaView style={styles.container}>
            <View style={styles.header}> 
                <TouchableOpacity>
                <Ionicons name="chevron-back" size={24} color="black" />
                    
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={{width:24, height:24}} source={require('../../assets/images/cardproduct.png')}/>

                </TouchableOpacity>
            </View>
        <ScrollView>



        </ScrollView>
    
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
        //   onPress={() => router.push('/payment')}
        >
          <Text style={styles.checkoutText}>Confirm Order</Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'space-between', // This makes the checkout section stay at the bottom
    backgroundColor: '#fff',
  
  },
  header:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingHorizontal:16


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
  },

  priceValue: {
    fontSize: 16,
    color: '#888',
  },

  divider: {
    height: 1,
    backgroundColor: '#eee',
    marginVertical: 10,
  },

  totalText: {
    fontSize: 18,
    fontWeight: '600',
  },

  totalAmount: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  checkoutButton: {
    marginHorizontal:25,
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
  },
});