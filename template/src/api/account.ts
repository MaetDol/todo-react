import { useEffect, useState } from 'react';

export function useSignUp(onSuccess: Function, onFailed: Function) {
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!done) return;
    onSuccess();
  }, [done]);

  return (email: string, passsword: string) => {
    console.log('Try Sign up..');
    setTimeout(() => setDone(true), 1000);
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
