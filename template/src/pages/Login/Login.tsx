import { BlueButton, Input } from 'components';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { typography } from 'styles';
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
        <Input
          setValue={setPassword}
          value={password}
          placeholder="Password"
          type="password"
        />
        <Link to="/signup">sign up</Link>
      </StyledInputWrapper>

      <StyledButtonWrapper>
        <BlueButton content="SIGNIN" typography={typography.emphasize} />
      </StyledButtonWrapper>
    </StyledWrapper>
  );
}
