import React from 'react';
import PopUpMessage from '../popUpMessage/PopUpMessage';
import contactsValidation from './useContactsValidation'


export default function ContactsPage() {
  const {
    showPopUp,
    formik,
    setShowPopUp,
    isSubmitting,
    submitError
  } = contactsValidation()

  return (
    <form onSubmit={formik.handleSubmit}>
      <section className="contactUs" >
        <h2 className="contacts-header">Свържи се с нас</h2>
        <div className="inputs">
          <div>
            <input
              className={`inp ${formik.touched.name && formik.errors.name ? 'invalid' : ''}`}
              type="text"
              placeholder="Име"
              name="name"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.name}
              disabled={isSubmitting}
            />
            {formik.touched.name && formik.errors.name && (
              <div className='error-message'>
                <span>{formik.errors.name}</span>
              </div>   
            )}
          </div>
          <div>
            <input
              className={`inp ${formik.touched.email && formik.errors.email ? 'invalid' : ''}`}
              type="email"
              placeholder="Имейл"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              disabled={isSubmitting}
            />
            {formik.touched.email && formik.errors.email && (
              <div className='error-message'>
                <span>{formik.errors.email}</span>
              </div>   
            )}
          </div>
          <div>
            <textarea
              className={formik.touched.message && formik.errors.message ? 'invalid' : ''}
              rows={4}
              placeholder="Съобщение"
              name="message"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.message}
              disabled={isSubmitting}
            />
            {formik.touched.message && formik.errors.message && (
              <div className='error-message'>
                <span>{formik.errors.message}</span>
              </div>   
            )}
          </div>
          <button className="sendBtn" type="submit">{isSubmitting ? 'Изпраща се...': 'Изпращане'}</button>
          {showPopUp && <PopUpMessage close={() => setShowPopUp(false)} />}
          {submitError &&(
            <div className="error-message">
              <span>{submitError}</span>
            </div>
          )}
        </div>
      </section>
      </form>
  );
}