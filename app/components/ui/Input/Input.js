import React from 'react';
import {
  Input as ChakraInput,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/input';

import { Icon } from '@chakra-ui/icon';
import Select from './Select';

const Input = ({ placeholder, type, domain, icon, ...rest }) => {
  return (
    <InputGroup>
      {icon && (
        <InputLeftElement pointerEvents="none">
          <Icon as={icon} color={'gray.600'} />
        </InputLeftElement>
      )}
      {type === 'select' ? (
        <Select domain={domain} {...rest} />
      ) : (
        <ChakraInput
          placeholder={placeholder}
          borderRadius={20}
          bg={'beige.50'}
          // border="none"
          textColor="black"
          {...rest}
          color={'#000'}
          _placeholder={{ color: 'gray.600', fontWeight: 500, fontSize: 14 }}
          focusBorderColor={'gray.200'}
        />
      )}
    </InputGroup>
  );
};

export default Input;
