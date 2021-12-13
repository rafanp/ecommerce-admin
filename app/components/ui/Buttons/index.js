import { Icon, IconButton as ChakraIconButton } from "@chakra-ui/react";
import { FiPlus, FiEdit2, FiTrash } from "react-icons/fi";

// const iconType = (type) => {
//   switch (type) {
//     case "edit":
//       return FiEdit2;
//     case "add":
//     default:
//       return FiPlus;
//   }
// };

const iconType = {
  add: FiPlus,
  edit: FiEdit2,
  delete: FiTrash,
};

const iconCss = (type) => {
  switch (type) {
    // case "edit":
    //   return FiEdit2;
    case "add":
    default:
      return {
        bg: "tomato",
      };
  }
};

const IconButton = ({ icon, iconProps, ...rest }) => {
  return (
    <ChakraIconButton
      bg={"primary.900"}
      color="white"
      _hover={{ bg: "primary.900", opacity: "60%" }}
      borderRadius="100%"
      // {...iconCss(icon)}
      {...rest}
    >
      <Icon as={iconType[icon]} w={4} h={4} {...iconProps} />
    </ChakraIconButton>
  );
};

export default IconButton;
