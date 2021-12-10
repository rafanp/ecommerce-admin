import React from "react";
import {
  Input as ChakraInput,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";

const Input = ({ placeholder, type, icon, ...rest }) => {
  return (
    <InputGroup>
      {icon && (
        <InputLeftElement pointerEvents="none">
          <Icon as={icon} color={"gray.600"} />
        </InputLeftElement>
      )}

      <ChakraInput
        placeholder={placeholder}
        borderRadius={20}
        bg={"beige.50"}
        // border="none"
        textColor="black"
        {...rest}
        color={"#000"}
        _placeholder={{ color: "gray.600", fontWeight: 500, fontSize: 14 }}
        focusBorderColor={"gray.200"}
      />
    </InputGroup>
  );
};

export default Input;
