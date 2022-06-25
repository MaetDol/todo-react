import { useEffect, useMemo, useState } from 'react';
import { Utils } from 'utils/util';

export type Validators = {
  [key: string]: {
    values: any;
    message: string;
    validator: Function;
  };
};

export type InvalidateMessages = {
  [key: string]: string | undefined;
};

/**
 * validators 는 반드시 useMemo로 감싸줄 것
 * 리액트 특성상 [], () => 같은 리터럴로 작성하는 경우가 많은데,
 * 의존성 확인시 변경으로 받아들인다
 */
export function useValidate(validators: Validators) {
  const [previousFlattenValidators, setPreviousFlattenValidators] = useState<
    any[]
  >(Utils.flattenValuesOfObject(validators));

  const [errors, setErrors] = useState<InvalidateMessages>({});
  useEffect(() => {
    const isSame = Utils.checkArrayShallowly(
      Utils.flattenValuesOfObject(validators),
      previousFlattenValidators
    );
    if (isSame) return;

    const errors: InvalidateMessages = {};
    for (const name in validators) {
      const { message, values, validator } = validators[name];
      const isValid = validator(...values);
      if (isValid) continue;

      errors[name] = message;
    }

    setErrors(errors);
    setPreviousFlattenValidators(Utils.flattenValuesOfObject(validators));
  }, [validators]);

  return errors;
}

export function useEmailInput() {
  const [email, setEmail] = useState('');

  const validator = useMemo(() => {
    return {
      message: 'Invalid Email',
      values: [email],
      validator: (email: string) => /[^@]+@[^@]+\.\w+/.test(email),
    };
  }, [email]);

  return { email, setEmail, validator };
}

export function usePasswordInput() {
  const [password, setPassword] = useState('');
  const [verifyPassword, setVerifyPassword] = useState('');

  const validator = useMemo(() => {
    return {
      message: 'Password is not matched',
      values: [password, verifyPassword],
      validator: (password: string, reEnteredPassword: string) =>
        password === reEnteredPassword,
    };
  }, [password, verifyPassword]);

  return {
    password,
    setPassword,
    verifyPassword,
    setVerifyPassword,
    validator,
  };
}
