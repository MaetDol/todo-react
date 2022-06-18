import { useSignUp } from 'api/account';
import { BlueButton, Input } from 'components';
import { paths } from 'models/paths';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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

  const navigate = useNavigate();
  const signUp = useSignUp(
    () => navigate(paths.LOGIN),
    () => alert('Failed to Sign up')
  );

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
        <Input
          setValue={setVerifyPassword}
          value={verifyPassword}
          placeholder="Verify Password"
          type="password"
        />
        <Link to="/login">sign in</Link>
      </StyledInputWrapper>

      <StyledButtonWrapper>
        <BlueButton
          onClick={() => signUp('my id here', 'and password here')}
          content="SIGNUP"
          typography={typography.emphasize}
        />
      </StyledButtonWrapper>
    </StyledWrapper>
  );
}
