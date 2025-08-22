import { useState, useCallback } from 'react';
import { z } from 'zod';

export const useFormValidation = <T extends z.ZodType>(schema: T) => {
    const [errors, setErrors] = useState<Record<string, string>>({});

    const validate = useCallback((data: z.infer<T>): boolean => {
        try {
            schema.parse(data);
            setErrors({});
            return true;
        } catch (error: any) {
            if (error.errors) {
                const newErrors: Record<string, string> = {};
                error.errors.forEach((err: any) => {
                    if (err.path) {
                        newErrors[err.path[0]] = err.message;
                    }
                });
                setErrors(newErrors);
            }
            return false;
        }
    }, [schema]);

    const validateField = useCallback((fieldName: string, value: any): boolean => {
        try {
            schema.pick({ [fieldName]: true }).parse({ [fieldName]: value });
            setErrors(prev => ({ ...prev, [fieldName]: '' }));
            return true;
        } catch (error: any) {
            if (error.errors && error.errors.length > 0) {
                setErrors(prev => ({ ...prev, [fieldName]: error.errors[0].message }));
            }
            return false;
        }
    }, [schema]);

    const clearError = useCallback((fieldName: string) => {
        setErrors(prev => ({ ...prev, [fieldName]: '' }));
    }, []);

    return {
        errors,
        validate,
        validateField,
        clearError,
        setErrors
    };
};
