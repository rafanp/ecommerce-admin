import { api } from 'app/services/api';
import AsyncSelect from 'react-select/async';

const customStyles = {
  container: () => ({ width: '100%' }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
      ':active': {
        ...styles[':active'],
        opacity: 0.8,
      },
    };
  },
  multiValue: (styles, { data }) => {
    return {
      ...styles,
      backgroundColor: 'white',
    };
  },
  multiValueRemove: (styles, { data }) => ({
    ...styles,
    color: data.color,
    ':hover': {
      opacity: 0.8,
    },
  }),
};

const promiseOptions = async (inputValue) => {
  const response = await api.get('categories');
  return response.data;
};

const Select = ({ domain, onChange, ...rest }) => {
  return (
    <AsyncSelect
      cacheOptions
      defaultOptions
      loadOptions={promiseOptions}
      styles={customStyles}
      isMulti
      closeMenuOnSelect={false}
      getOptionLabel={(option) => option.name}
      getOptionValue={(option) => option.id}
      onChange={onChange}
      {...rest}
    />
  );
};

export default Select;
