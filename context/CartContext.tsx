import React, {
    createContext,
    useState,
    useEffect,
    useContext,
    ReactNode,
    useMemo,
  } from 'react';
  import AsyncStorage from '@react-native-async-storage/async-storage';
  import { ImageSourcePropType } from 'react-native';
  
  // Types
  export type CartItem = {
    id: string;
    name: string;
    price: string;
    image: ImageSourcePropType;
    quantity: number;
  };
  
  type CartContextType = {
    cartItems: CartItem[];
    addToCart: (item: CartItem) => Promise<void>;
    updateQuantity: (id: string, quantity: number) => Promise<void>;
    removeFromCart: (id: string) => Promise<void>;
    clearCart: () => Promise<void>;
    isInCart: (id: string) => boolean;
    getItemQuantity: (id: string) => number;
    totalPrice: string;
  };
  
  // Create context
  const CartContext = createContext<CartContextType | undefined>(undefined);
  
  // Provider
  export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
  
    // Load cart from storage
    useEffect(() => {
      const loadCart = async () => {
        try {
          const stored = await AsyncStorage.getItem('cartItems');
          if (stored) setCartItems(JSON.parse(stored));
        } catch (err) {
          console.error('Failed to load cart:', err);
        }
      };
      loadCart();
    }, []);
  
    // Save cart to storage
    useEffect(() => {
      const saveCart = async () => {
        try {
          await AsyncStorage.setItem('cartItems', JSON.stringify(cartItems));
        } catch (err) {
          console.error('Failed to save cart:', err);
        }
      };
      saveCart();
    }, [cartItems]);
  
    const addToCart = async (item: CartItem) => {
      try {
        setCartItems(prev => {
          const index = prev.findIndex(i => i.id === item.id);
          if (index !== -1) {
            const updated = [...prev];
            updated[index] = {
              ...updated[index],
              quantity: updated[index].quantity + item.quantity,
            };
            return updated;
          }
          return [...prev, item];
        });
      } catch (err) {
        console.error('Add to cart failed:', err);
      }
    };
  
    const updateQuantity = async (id: string, quantity: number) => {
      try {
        if (!Number.isInteger(quantity) || quantity < 1) {
          await removeFromCart(id);
          return;
        }
  
        setCartItems(prev =>
          prev.map(item =>
            item.id === id ? { ...item, quantity } : item
          )
        );
      } catch (err) {
        console.error('Update quantity failed:', err);
      }
    };
  
    const removeFromCart = async (id: string) => {
      try {
        setCartItems(prev => prev.filter(item => item.id !== id));
      } catch (err) {
        console.error('Remove from cart failed:', err);
      }
    };
  
    const clearCart = async () => {
      try {
        await AsyncStorage.removeItem('cartItems');
        setCartItems([]);
      } catch (err) {
        console.error('Clear cart failed:', err);
      }
    };
  
    const isInCart = (id: string) => cartItems.some(item => item.id === id);
  
    const getItemQuantity = (id: string) =>
      cartItems.find(item => item.id === id)?.quantity || 0;
  
    const totalPrice = useMemo(() => {
      const total = cartItems.reduce((sum, item) => {
        const price = parseFloat(item.price.replace(/[^0-9.]/g, ''));
        return sum + price * item.quantity;
      }, 0);
  
      return `#${total.toFixed(1)}`;
    }, [cartItems]);
  
    return (
      <CartContext.Provider
        value={{
          cartItems,
          addToCart,
          updateQuantity,
          removeFromCart,
          clearCart,
          isInCart,
          getItemQuantity,
          totalPrice,
        }}
      >
        {children}
      </CartContext.Provider>
    );
  };
  
  // Custom hook
  export const useCart = (): CartContextType => {
    const context = useContext(CartContext);
  
    if (!context) {
      throw new Error('useCart must be used within a CartProvider');
    }
  
    return context;
  };