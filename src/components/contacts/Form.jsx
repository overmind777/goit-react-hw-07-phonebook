import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addNewContact } from 'components/redux/operations';

import styled from 'styled-components';

const Form = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addNewContact({ name, phone }));
    setName('');
    setPhone('');
  };

  return (
    <FormStyled onSubmit={handleSubmit}>
      <input
        value={name}
        onChange={e => {
          setName(e.target.value);
        }}
        type="text"
        placeholder="Enter name"
      />
      <input
        value={phone}
        onChange={e => {
          setPhone(e.target.value);
        }}
        type="tel"
        placeholder="Enter phone"
      />
      <ButtonStyled>Add contact</ButtonStyled>
    </FormStyled>
  );
};

//============================================================================================

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const ButtonStyled = styled.button`
  width: 100px;
  height: 30px;
`;

export default Form;
