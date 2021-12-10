import React from "react";
import { Flex } from "@chakra-ui/layout";
import { FiSearch, FiBell } from "react-icons/fi";
import { Icon } from "@chakra-ui/react";
import { Avatar } from "@chakra-ui/avatar";
import Input from "@/components/ui/Input/Input";

const Header = () => {
  return (
    <Flex
      as="header"
      bg="white"
      h={"100%"}
      align="center"
      borderRadius={12}
      pl={4}
      pr={4}
    >
      <Input placeholder={"Search"} icon={FiSearch} w={200} />
      <Flex align="center">
        <Icon as={FiBell} color="gray.600" w={6} h={6} mr={8} />
        <Avatar
          name="Dan Abrahmov"
          src="https://bit.ly/dan-abramov"
          size="md"
        />
      </Flex>
    </Flex>
  );
};
export default Header;
