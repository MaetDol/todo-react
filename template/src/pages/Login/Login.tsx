import { useSignIn } from 'api/account';
import { BlueButton, Input } from 'components';
import { paths } from 'models/paths';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { typography } from 'styles';
import {
  StyledButtonWrapper,
  StyledInputWrapper,
  StyledWrapper,
} from './Login.styled';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const signIn = useSignIn(
    () => navigate(paths.ROOT),
    () => alert('failed to login')
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
        <Link to={paths.SIGNUP}>sign up</Link>
      </StyledInputWrapper>

      <StyledButtonWrapper>
        <BlueButton
          onClick={() => signIn('email@email.com', 'OH_MY_PASSWORD')}
          content="SIGNIN"
          typography={typography.emphasize}
        />
      </StyledButtonWrapper>
    </StyledWrapper>
  );
}
