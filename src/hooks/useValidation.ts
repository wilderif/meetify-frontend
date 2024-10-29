import { useState, useCallback } from "react";

interface ValidationRules {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  custom?: (value: string) => boolean;
}

interface ValidationMessages {
  required?: string;
  minLength?: string;
  maxLength?: string;
  pattern?: string;
  custom?: string;
  passwordMatch?: string;
}

interface ValidationState {
  isValid: boolean;
  message: string;
}

interface FormValidation {
  email: ValidationState;
  password: ValidationState;
  passwordConfirm?: ValidationState;
}

export const useValidation = (isSignup: boolean = false) => {
  const [loginAttempts, setLoginAttempts] = useState(0);
  const [isLocked, setIsLocked] = useState(false);
  const MAX_LOGIN_ATTEMPTS = 5;
  const LOCK_DURATION = 30 * 60 * 1000; // 30분

  const [validation, setValidation] = useState<FormValidation>({
    email: { isValid: true, message: "" },
    password: { isValid: true, message: "" },
    ...(isSignup && { passwordConfirm: { isValid: true, message: "" } }),
  });

  const validationRules = {
    email: {
      required: true,
      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    },
    password: {
      required: true,
      minLength: 8,
      pattern: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
    },
  };

  const validationMessages = {
    email: {
      required: "이메일을 입력해주세요.",
      pattern: "올바른 이메일 형식이 아닙니다.",
    },
    password: {
      required: "비밀번호를 입력해주세요.",
      minLength: "비밀번호는 최소 8자 이상이어야 합니다.",
      pattern: "비밀번호는 영문, 숫자, 특수문자를 포함해야 합니다.",
    },
    passwordMatch: "비밀번호가 일치하지 않습니다.",
  };

  const validateField = useCallback(
    (
      value: string,
      rules: ValidationRules,
      messages: ValidationMessages
    ): ValidationState => {
      if (rules.required && !value) {
        return {
          isValid: false,
          message: messages.required || "필수 입력값입니다.",
        };
      }

      if (rules.minLength && value.length < rules.minLength) {
        return {
          isValid: false,
          message:
            messages.minLength ||
            `최소 ${rules.minLength}자 이상 입력해주세요.`,
        };
      }

      if (rules.maxLength && value.length > rules.maxLength) {
        return {
          isValid: false,
          message:
            messages.maxLength ||
            `최대 ${rules.maxLength}자까지 입력 가능합니다.`,
        };
      }

      if (rules.pattern && !rules.pattern.test(value)) {
        return {
          isValid: false,
          message: messages.pattern || "올바른 형식이 아닙니다.",
        };
      }

      if (rules.custom && !rules.custom(value)) {
        return {
          isValid: false,
          message: messages.custom || "유효하지 않은 값입니다.",
        };
      }

      return { isValid: true, message: "" };
    },
    []
  );

  const validateForm = useCallback(
    (formData: {
      email: string;
      password: string;
      passwordConfirm?: string;
    }) => {
      const emailValidation = validateField(
        formData.email,
        validationRules.email,
        validationMessages.email
      );

      const passwordValidation = validateField(
        formData.password,
        validationRules.password,
        validationMessages.password
      );

      let passwordConfirmValidation = { isValid: true, message: "" };
      if (isSignup && formData.passwordConfirm !== undefined) {
        passwordConfirmValidation = {
          isValid: formData.password === formData.passwordConfirm,
          message:
            formData.password === formData.passwordConfirm
              ? ""
              : validationMessages.passwordMatch,
        };
      }

      setValidation({
        email: emailValidation,
        password: passwordValidation,
        ...(isSignup && { passwordConfirm: passwordConfirmValidation }),
      });

      return (
        emailValidation.isValid &&
        passwordValidation.isValid &&
        (!isSignup || passwordConfirmValidation.isValid)
      );
    },
    [validateField, isSignup]
  );

  const handleLoginAttempt = useCallback(() => {
    if (isLocked) {
      return false;
    }

    setLoginAttempts((prev) => {
      const newAttempts = prev + 1;
      if (newAttempts >= MAX_LOGIN_ATTEMPTS) {
        setIsLocked(true);
        setTimeout(() => {
          setIsLocked(false);
          setLoginAttempts(0);
        }, LOCK_DURATION);
      }
      return newAttempts;
    });

    return true;
  }, [isLocked]);

  return {
    validation,
    validateForm,
    loginAttempts,
    isLocked,
    remainingAttempts: MAX_LOGIN_ATTEMPTS - loginAttempts,
    handleLoginAttempt,
  };
};
