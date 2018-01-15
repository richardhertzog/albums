import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = () => {
  console.log('button');
  return (
    <TouchableOpacity>
      <Text>Click me!</Text>
    </TouchableOpacity>
  );
};

export default Button;
