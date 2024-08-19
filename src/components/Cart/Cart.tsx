import React, { useState } from 'react';
import { Container, Box, Typography, List, ListItem, ListItemText, Button } from '@mui/material';
import { FaShoppingCart } from 'react-icons/fa';

interface CartItem {
  id: number;
  name: string;
  price: string;
  quantity: number;
}

const Cart: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false); 

  const toggleCart = () => setIsOpen(!isOpen);

  // Função para adicionar itens ao carrinho
  const addToCart = (product: CartItem) => {
    setCartItems((prevItems) => {
      const itemExists = prevItems.find(item => item.id === product.id);
      if (itemExists) {
        return prevItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  return (
    <div className={`fixed top-0 right-0 h-full bg-white shadow-lg transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300`}>
      <div className="p-4 bg-blue-600 text-white flex justify-between items-center cursor-pointer" onClick={toggleCart}>
        <Typography variant="h6" gutterBottom>
          Carrinho
        </Typography>
        <FaShoppingCart size={24} />
      </div>
      <Container maxWidth="sm" className="p-4">
        <Box my={4}>
          {cartItems.length > 0 ? (
            <List>
              {cartItems.map((item) => (
                <ListItem key={item.id}>
                  <ListItemText
                    primary={`${item.name} (x${item.quantity})`}
                    secondary={item.price}
                  />
                </ListItem>
              ))}
            </List>
          ) : (
            <Typography variant="body1" color="textSecondary">
              Carrinho vazio
            </Typography>
          )}
          <Box mt={2}>
            <Button variant="contained" color="primary" disabled={cartItems.length === 0}>
              Finalizar Compra
            </Button>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default Cart;
