import { Icon, IconButton as ChakraIconButton } from "@chakra-ui/react";
import { FiPlus } from "react-icons/fi";

const IconButton = ({ ...rest }) => {
  return (
    <ChakraIconButton
      bg={"primary.900"}
      color="white"
      _hover={{ bg: "primary.900", opacity: "60%" }}
      {...rest}
    >
      <Icon as={FiPlus} w={6} h={6} />
    </ChakraIconButton>
  );
};

export default IconButton;
