import { useSignIn } from 'api/account';
import { BlueButton, Input } from 'components';
import { paths } from 'models/paths';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { typography } from 'styles';
import {
  StyledButtonWrapper,
  StyledInputWrapper,
  StyledWrapper,
} from './SignIn.styled';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const { signIn } = useSignIn(
    (user) => {
      console.log(user);
      navigate(paths.ROOT);
    },
    (error) => {
      console.log(error);
      alert('failed to login');
    }
  );

  const signInJob = (e: React.FormEvent) => {
    e.preventDefault();

    signIn(email, password);
  };

  return (
    <StyledWrapper>
      <form onSubmit={signInJob}>
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
            onClick={signInJob}
            content="SIGNIN"
            typography={typography.emphasize}
          />
        </StyledButtonWrapper>
      </form>
    </StyledWrapper>
  );
}
