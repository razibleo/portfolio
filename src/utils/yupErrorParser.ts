import { ValidationError } from "yup";

const parseYupError = (validationError: ValidationError) => {
  const result: any = {};

  validationError.inner.forEach((e) => {
    if (result[e.path!] != null) {
      (result[e.path!] as string[]).push(...e.errors);
    } else {
      result[e.path!] = e.errors;
    }
  });

  return result;
};

export default parseYupError;
