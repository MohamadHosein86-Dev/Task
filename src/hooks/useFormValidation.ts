import { useState, useCallback } from "react";
import { z, ZodError, ZodTypeAny } from "zod";

export const useFormValidation = (schema: ZodTypeAny) => {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = useCallback((data: unknown): boolean => {
    try {
      schema.parse(data);
      setErrors({});
      return true;
    } catch (err) {
      if (err instanceof ZodError) {
        const newErrors: Record<string, string> = {};
        for (const issue of err.issues) {
          const field = issue.path[0]?.toString();
          if (field) newErrors[field] = issue.message;
        }
        setErrors(newErrors);
      }
      return false;
    }
  }, [schema]);

  const validateField = useCallback((field: string, value: unknown): boolean => {
    try {
      const fieldSchema = z.object({ [field]: (schema).shape[field] });
      fieldSchema.parse({ [field]: value });
      setErrors((prev) => ({ ...prev, [field]: "" }));
      return true;
    } catch (err) {
      if (err instanceof ZodError) {
        const message = err.issues[0]?.message ?? "";
        setErrors((prev) => ({ ...prev, [field]: message }));
      }
      return false;
    }
  }, [schema]);

  const clearError = useCallback((field: string) => {
    setErrors((prev) => ({ ...prev, [field]: "" }));
  }, []);

  return { errors, validate, validateField, clearError };
};
