import { AuthError, UserCredential } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { signUp } from './firebase';

export function useSignUp(
  onSuccess: (user: UserCredential) => void,
  onFailed: (error: AuthError) => void
) {
  const [user, setUser] = useState<UserCredential>();
  useEffect(() => {
    if (!user) return;
    onSuccess(user);
  }, [user]);

  const [error, setError] = useState<AuthError>();
  useEffect(() => {
    if (!error) return;
    onFailed(error);
  }, [error]);

  const [loading, setLoading] = useState<boolean>(false);
  const signUpJob = (email: string, password: string) => {
    if (loading) return;
    setLoading(true);
    signUp(email, password)
      .finally(() => setLoading(false))
      .then(setUser)
      .catch(setError);
  };

  return {
    signUp: signUpJob,
    user,
    error,
  };
}

export function useSignIn(onSuccess: Function, onFailed: Function) {
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!done) return;
    onSuccess();
  }, [done]);

  return (email: string, passsword: string) => {
    console.log('Try sign in..');
    setTimeout(() => setDone(true), 1000);
  };
}
