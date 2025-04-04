import { useFormik } from 'formik';
import { useState } from 'react';

export default function useContactsValidation() {
    const [showPopUp, setShowPopUp] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState(null);

    // 1. Оптимизирана валидационна функция
    const validate = (values) => {
        const errors = {};
        
        if (!values.email) {
            errors.email = 'Моля, въведете валиден имейл адрес.';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/i.test(values.email)) {
            errors.email = 'Невалиден имейл адрес формат';
        }
        
        if (!values.name?.trim()) {
            errors.name = "Моля, въведете вашето име.";
        } else if (values.name.trim().length < 3) {
            errors.name = 'Името трябва да е поне 3 символа.';
        }
        
        if (!values.message?.trim()) {
            errors.message = "Моля, въведете вашето съобщение";
        } else if (values.message.trim().length < 10) {
            errors.message = "Съобщението трябва да е поне 10 символа";
        }
          
        return errors;
    };

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: '',
        },
        validate,
        onSubmit: async (values, { resetForm }) => {
            setIsSubmitting(true);
            setSubmitError(null);

            try {
                // 2. Оптимизирано изпращане
                const response = await fetch('http://localhost:3030/users/subscribe', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        name: values.name.trim(),
                        email: values.email.trim(),
                        message: values.message.trim()
                    }),
                });
        
                const data = await response.json();
                
                if (!response.ok) {
                    throw new Error(data.message || `HTTP error! status: ${response.status}`);
                }

                setShowPopUp(true);
                resetForm();
            } catch (error) {
                console.error('Submission error:', error);
                setSubmitError(
                    error.message || 
                    'Възникна грешка при изпращане. Моля, опитайте по-късно.'
                );
            } finally {
                setIsSubmitting(false);
            }
        },
    });

    return { 
        showPopUp, 
        formik, 
        setShowPopUp,
        isSubmitting,
        submitError,
        resetError: () => setSubmitError(null) // Допълнителен хелпер
    };
}