import ReactSelect, { components, StylesConfig } from 'react-select';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

const colourStyles = {
  container: () => ({ width: '100%' }),
  control: (styles) => ({
    ...styles,
    backgroundColor: 'white',
  }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
      //   backgroundColor: isDisabled
      //     ? undefined
      //     : isSelected
      //     ? data.color
      //     : isFocused
      //     ? color.alpha(0.1).css()
      //     : undefined,
      //   color: isDisabled
      //     ? '#ccc'
      //     : isSelected
      //     ? chroma.contrast(color, 'white') > 2
      //       ? 'white'
      //       : 'black'
      //     : data.color,
      //   cursor: isDisabled ? 'not-allowed' : 'default',

      ':active': {
        ...styles[':active'],
        opacity: 0.8,
        // backgroundColor: 'tomato',
        // backgroundColor: !isDisabled
        //   ? isSelected
        //     ? data.color
        //     : 'red'
        //   : undefined,
      },
    };
  },
  multiValue: (styles, { data }) => {
    return {
      ...styles,
      backgroundColor: 'primary.900',
    };
  },
  //   multiValueLabel: (styles, { data }) => ({
  //     ...styles,
  //     color: data.color,
  //   }),
  multiValueRemove: (styles, { data }) => ({
    ...styles,
    color: data.color,
    ':hover': {
      opacity: 0.8,
      //   backgroundColor: data.color,
      //   color: 'white',
    },
  }),
};

const Select = ({ domain }) => {
  console.log('domain :', domain);

  return (
    <ReactSelect
      options={options}
      placeholder=""
      closeMenuOnScroll={false}
      closeMenuOnSelect={false}
      isMulti
      styles={colourStyles}
      // components={{ Control }}
    />
  );
};

export default Select;

// const EMOJIS = ['👍', '🤙', '👏', '👌', '🙌', '✌️', '🖖', '👐'];

// const Control = ({ children, ...props }) => {
//   // @ts-ignore
//   const { emoji, onEmojiClick } = props.selectProps;
//   const style = { cursor: 'pointer' };

//   return (
//     <components.Control {...props}>
//       <span onMouseDown={onEmojiClick} style={style}>
//         {emoji} 🤙
//       </span>
//       {children}
//     </components.Control>
//   );
// };
