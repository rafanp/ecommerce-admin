import React from 'react';
import Link from 'next/link';
import { Container, Flex, Text, VStack } from '@chakra-ui/layout';
import { Icon } from '@chakra-ui/react';
import { FiCoffee } from 'react-icons/fi';
import { navigationOptions } from 'app/config/navigationOptions';
import { useRouter } from 'next/router';

const Navigation = () => {
  const router = useRouter();

  return (
    <Container
      bg={'white'}
      h={'100%'}
      borderRadius={24}
      centerContent
      minW={240}
      padding={0}
    >
      <Icon as={FiCoffee} w={12} h={12} color={'gray.600'} mb={12} mt={12} />
      <NavigationOptions activeRoute={router.pathname} />
    </Container>
  );
};
export default Navigation;

const NavigationOptions = ({ activeRoute }) => {
  return (
    <VStack spacing={0} align="stretch" w={'100%'}>
      {navigationOptions.map((option, index) => {
        return (
          <NavigationButton
            key={index}
            to={option.to}
            name={option.name}
            icon={option.icon}
            active={activeRoute === option.to}
          />
        );
      })}
    </VStack>
  );
};

const NavigationButton = ({ to, name, icon, active }) => {
  const styles = {
    borderRight: active && 'solid 4px black',
    bgGradient: active && 'linear(to-r, white, beige.200)',
    color: active ? 'primary.900' : 'gray.400',
  };
  return (
    <Link href={to} passHref>
      <Flex as="a" h={12} align={'center'} {...styles}>
        <Icon as={icon} mr={8} ml={8} w={6} h={6} />
        <Text as={'span'} fontWeight={'bold'} fontSize={14}>
          {name}
        </Text>
      </Flex>
    </Link>
  );
};
