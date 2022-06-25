import { useEffect, useState } from 'react';
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

    console.log(Utils.flattenValuesOfObject(validators));

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
