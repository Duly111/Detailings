import { useFormik } from 'formik';
import { useState } from 'react';

export default function useContactsValidation() {
    const [showPopUp, setShowPopUp] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState(null);

    const validate = (values) => {
        const errors = {};
        
        if (!values.email) {
            errors.email = 'Моля, въведете валиден имейл адрес.';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Невалиден имейл адрес';
        }
        
        if(!values.name) {
            errors.name = "Моля, въведете вашето име.";
        } else if (values.name.length < 3) {
            errors.name = 'Името трябва да е поне 3 символа.';
        }
        
        if (!values.message) {
            errors.message = "Моля, въведете вашето съобщение";
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
                // 1. Подготвяме данните
                const formData = {
                    name: values.name.trim(),
                    email: values.email.trim(),
                    message: values.message.trim()
                };
        
                // 2. Изпращане към сървъра
                const response = await fetch('http://localhost:3030/users/subscribe', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify(formData)
                });
        
                // 3. Обработка на отговора
                if (!response.ok) {
                    const errorData = await response.json().catch(() => ({}));
                    throw new Error(errorData.message || `Грешка ${response.status}`);
                }
        
                const data = await response.json();
                setShowPopUp(true);
                resetForm();
            } catch (error) {
                console.error('Грешка при изпращане:', error);
                setSubmitError(error.message || 'Грешка при изпращане на съобщението');
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
        submitError 
    };
}