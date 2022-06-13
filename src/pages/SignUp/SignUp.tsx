import { BlueButton, Input } from 'components';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { typography } from 'styles';
import {
  StyledButtonWrapper,
  StyledInputWrapper,
  StyledWrapper,
} from './SignUp.styled';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [verifyPassword, setVerifyPassword] = useState('');

  return (
    <StyledWrapper>
      <StyledInputWrapper>
        <Input setValue={setEmail} value={email} placeholder="Email" />
        <Input setValue={setPassword} value={password} placeholder="Password" />
        <Input
          setValue={setVerifyPassword}
          value={verifyPassword}
          placeholder="Verify Password"
        />
        <Link to="/login">sign in</Link>
      </StyledInputWrapper>

      <StyledButtonWrapper>
        <BlueButton content="SIGNUP" typography={typography.emphasize} />
      </StyledButtonWrapper>
    </StyledWrapper>
  );
}
