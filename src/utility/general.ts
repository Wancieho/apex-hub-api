import { InputError } from "../errors";

export const errorInfo = (e: any): string => {
  console.error("\x1b[31m%s\x1b[0m", e?.message || e);

  if (e instanceof InputError) {
    return `: ${e?.message}`;
  }

  if (e?.original?.errno === 1062) {
    return ": duplicate data";
  }

  return "Unknown error";
};

export const inputValidation = (
  inputs: string | any,
  required: Array<string>,
  type: string
): void => {
  if (typeof inputs === "string") {
    if (!inputs) {
      throw new InputError(`${type} - ${required[0]} must be defined`);
    }
  } else {
    required.forEach((key: string) => {
      if (!inputs[key]) {
        throw new InputError(`${type} - ${key} must be defined`);
      }
    });
  }
};
