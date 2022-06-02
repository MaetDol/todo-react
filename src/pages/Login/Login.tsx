import { BlueTitleButton, Input } from 'components';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  StyledButtonWrapper,
  StyledInputWrapper,
  StyledWrapper,
} from './Login.styled';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <StyledWrapper>
      <StyledInputWrapper>
        <Input setValue={setEmail} value={email} placeholder="Email" />
        <Input setValue={setPassword} value={password} placeholder="Password" />
        <Link to="/signup">sign up</Link>
      </StyledInputWrapper>

      <StyledButtonWrapper>
        <BlueTitleButton content="LOGIN" />
      </StyledButtonWrapper>
    </StyledWrapper>
  );
}
