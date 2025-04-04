import React from 'react';
import PopUpMessage from '../popUpMessage/PopUpMessage';
import useContactsValidation from './useContactsValidation'; // Забележка: име на hook трябва да започва с 'use'

export default function ContactsPage() {
  const {
    showPopUp,
    formik,
    setShowPopUp,
    isSubmitting,
    submitError
  } = useContactsValidation(); // Променено от contactsValidation на useContactsValidation

  return (
    <form onSubmit={formik.handleSubmit} className="contact-form">
      <section className="contactUs">
        <h2 className="contacts-header">Свържи се с нас</h2>
        <div className="inputs">
          {/* Име */}
          <div className="input-group">
            <input
              className={`inp ${formik.touched.name && formik.errors.name ? 'invalid' : ''}`}
              type="text"
              placeholder="Име"
              name="name"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.name}
              disabled={isSubmitting}
              aria-label="Вашето име"
            />
            {formik.touched.name && formik.errors.name && (
              <div className='error-message' role="alert">
                <span>{formik.errors.name}</span>
              </div>   
            )}
          </div>

          {/* Имейл */}
          <div className="input-group">
            <input
              className={`inp ${formik.touched.email && formik.errors.email ? 'invalid' : ''}`}
              type="email"
              placeholder="Имейл"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              disabled={isSubmitting}
              aria-label="Вашият имейл"
            />
            {formik.touched.email && formik.errors.email && (
              <div className='error-message' role="alert">
                <span>{formik.errors.email}</span>
              </div>   
            )}
          </div>

          {/* Съобщение */}
          <div className="input-group">
            <textarea
              className={`message-input ${formik.touched.message && formik.errors.message ? 'invalid' : ''}`}
              rows={4}
              placeholder="Съобщение"
              name="message"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.message}
              disabled={isSubmitting}
              aria-label="Вашето съобщение"
            />
            {formik.touched.message && formik.errors.message && (
              <div className='error-message' role="alert">
                <span>{formik.errors.message}</span>
              </div>   
            )}
          </div>

          {/* Бутон и съобщения */}
          <button 
            className="sendBtn" 
            type="submit"
            disabled={isSubmitting}
            aria-busy={isSubmitting}
          >
            {isSubmitting ? 'Изпраща се...' : 'Изпращане'}
          </button>

          {showPopUp && (
            <PopUpMessage 
              close={() => setShowPopUp(false)}
              message="Съобщението ви е изпратено успешно!"
            />
          )}

          {submitError && (
            <div className="error-message server-error" role="alert">
              <span>{submitError}</span>
            </div>
          )}
        </div>
      </section>
    </form>
  );
}