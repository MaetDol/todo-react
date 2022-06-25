import { useSignUp } from 'api/account';
import { BlueButton, Input } from 'components';
import { paths } from 'models/paths';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { typography } from 'styles';
import { useEmailInput, usePasswordInput, useValidate } from './SignUp.hooks';
import {
  StyledButtonWrapper,
  StyledInputWrapper,
  StyledWrapper,
} from './SignUp.styled';

export default function SignUp() {
  const { email, setEmail, validator: emailValidator } = useEmailInput();
  const {
    password,
    setPassword,
    verifyPassword,
    setVerifyPassword,
    validator: passwordValidator,
  } = usePasswordInput();

  const errors = useValidate({ emailValidator, passwordValidator });

  const navigate = useNavigate();
  const { signUp } = useSignUp(
    (user) => {
      console.log(user);
      navigate(paths.ROOT);
    },
    (error) => {
      console.log(error);
      alert('Failed to Sign up');
    }
  );

  const doSignUp = (e: React.FormEvent) => {
    e.preventDefault();

    const error = Object.values(errors)[0];
    if (error) {
      alert(error);
      return;
    }
    signUp(email, password);
  };

  return (
    <StyledWrapper>
      <form onSubmit={doSignUp}>
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
            onClick={doSignUp}
            content="SIGNUP"
            typography={typography.emphasize}
          />
        </StyledButtonWrapper>
      </form>
    </StyledWrapper>
  );
}
